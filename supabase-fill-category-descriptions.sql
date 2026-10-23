-- These eight rows are genre/category tiles stored in public.media, not
-- individual movies or shows. This fills their descriptive copy only.
-- A genre has no single release date or official trailer, so those columns
-- intentionally remain NULL. No poster/backdrop paths are changed.
BEGIN;

UPDATE public.media AS m
SET description = v.description
FROM (VALUES
  ('6e384f4e-3b60-481b-9b39-cc419ea52652'::uuid,
   'Explore drama series featuring compelling characters, emotional stories, and high-stakes choices.'),
  ('e2000bca-14de-490e-91ae-18523e58456d'::uuid,
   'Explore comedy series filled with memorable characters, clever jokes, and lighthearted stories.'),
  ('576e2f73-342c-4793-b330-68004f1efb5e'::uuid,
   'Explore adventure series with daring journeys, unexpected discoveries, and exciting challenges.'),
  ('87893097-3eb1-4f27-b191-a4524575221a'::uuid,
   'Explore action series featuring intense confrontations, daring missions, and fast-paced stories.'),
  ('a1da0742-0d63-4562-8d91-791a188ac1e6'::uuid,
   'Explore drama movies with compelling characters, emotional stories, and high-stakes choices.'),
  ('35110676-3ceb-4316-8e7a-1464925e8a37'::uuid,
   'Explore comedy movies filled with memorable characters, clever jokes, and lighthearted stories.'),
  ('c6d7cc27-1158-45f4-9d9d-68fb7ee26c71'::uuid,
   'Explore adventure movies with daring journeys, unexpected discoveries, and exciting challenges.'),
  ('b750c2d7-e8b9-4eeb-8ee0-72a4f4ab742d'::uuid,
   'Explore action movies featuring intense confrontations, daring missions, and fast-paced stories.')
) AS v(id, description)
WHERE m.id = v.id;

COMMIT;
