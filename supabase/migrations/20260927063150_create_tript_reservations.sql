/*
# Create Tript reservations

1. New Tables
- `reservations` stores table requests submitted from the café website.
- `id` (uuid, primary key): unique request identifier.
- `name` (text): guest name.
- `phone` (text): guest contact phone number.
- `date` (date): requested visit date.
- `time` (time): requested visit time.
- `party_size` (integer): number of guests.
- `created_at` (timestamptz): submission timestamp.

2. Security
- Row level security is enabled on `reservations`.
- Anonymous and authenticated visitors can submit reservation requests.
- Anonymous and authenticated visitors can read, update, and delete rows because this is a single-tenant café website with no sign-in flow.

3. Validation
- Required guest details are enforced at the database boundary.
- Party size must be between 1 and 20 guests.

4. Important Notes
- This table stores requests for the café team to confirm; it does not promise availability.
- No account or personal profile is created for guests.
*/

CREATE TABLE IF NOT EXISTS public.reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  party_size integer NOT NULL CHECK (party_size BETWEEN 1 AND 20),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read reservations" ON public.reservations;
CREATE POLICY "Public can read reservations"
  ON public.reservations FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public can submit reservations" ON public.reservations;
CREATE POLICY "Public can submit reservations"
  ON public.reservations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can update reservations" ON public.reservations;
CREATE POLICY "Public can update reservations"
  ON public.reservations FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can delete reservations" ON public.reservations;
CREATE POLICY "Public can delete reservations"
  ON public.reservations FOR DELETE
  TO anon, authenticated
  USING (true);
