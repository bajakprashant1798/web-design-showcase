
ALTER TABLE public.leads
ADD COLUMN status text NOT NULL DEFAULT 'new';

-- Allow admins to update leads (for status changes)
CREATE POLICY "Admins can update leads"
ON public.leads
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
