-- Paste into the Supabase SQL Editor and run.
-- Updates only the media rows from the supplied export. No poster_path or
-- backdrop_path values are changed.
BEGIN;

-- Stage the target slugs first so unique-slug constraints do not reject
-- changes where two exported rows currently use one another's slugs.
UPDATE public.media
SET slug = 'slug-migration-' || replace(id::text, '-', '')
WHERE id IN (
  '75322c1d-6fdd-4ab5-9025-5ce2d10a7309', '199021b8-d515-484d-8ca9-71d7dc0e4f74',
  '700dc5a5-a9d5-4f70-b214-e46a03c5c123', '57eeea88-f0f5-4a34-819c-8304bf1fd6b7',
  '027221ea-e4fd-49ba-b0a2-4ee71017158e', 'b8269040-d316-4c57-afb1-1dc1d951ee49',
  '889cc79f-3c4c-4347-9679-0ebd2b472453', 'e367b9f9-7b2e-47d9-9d56-2f7868e11c07',
  '3d071fce-c95c-4287-8f4a-e6d0b1c2231b', 'cda3d1fc-f21d-457a-8992-2289ac5d864a',
  '267fdd2a-595d-44db-b08a-e29fa59f9efa', 'bad0e089-8766-4a30-957a-c2b4d7da0356',
  '75a73610-8306-440e-a68f-c3c1264368bb', 'd9be2cb2-41d1-4464-b80e-7e4a44589c1c',
  'dc9776cd-fb16-49b1-8398-92844dee799d', 'cc9b8af7-3a0a-4109-a32e-b59f3723ee70',
  'aced580b-327c-46dd-97fa-fe21cac0e1d6', 'b750c2d7-e8b9-4eeb-8ee0-72a4f4ab742d',
  'c6d7cc27-1158-45f4-9d9d-68fb7ee26c71', '35110676-3ceb-4316-8e7a-1464925e8a37',
  'a1da0742-0d63-4562-8d91-791a188ac1e6', 'a36bffc5-d584-4e24-8015-598e3b2955c6',
  'c61a4ab5-196b-40ca-bfe0-0defe42d4ca9', '492b486b-56c2-4749-8725-99bbc37f78cc',
  '87893097-3eb1-4f27-b191-a4524575221a', '576e2f73-342c-4793-b330-68004f1efb5e',
  'e2000bca-14de-490e-91ae-18523e58456d', '6e384f4e-3b60-481b-9b39-cc419ea52652',
  '4b6fe5e6-014f-4de8-a634-88bba84a023b', 'eb65c7c5-2bef-4d9c-9121-d205d3da4859',
  'b6f36eaa-42b9-407a-b426-8516d7060bc7', 'b64abc59-3c5c-481a-a4d2-6273c1800fd9',
  '71b0e004-4dd1-4a7d-bc77-b2dd01c29a37', 'cd151b11-4774-4224-8b3a-8600eea495f3',
  'e8e06d4d-3e7b-40f7-bc71-d6f802b2346e', '6be5f9d6-a323-46b7-a920-e4b5c50867b5'
);

WITH normalized AS (
  SELECT id, type::text AS media_type,
         CASE WHEN lower(title) = 'mai: a mother''s rage' THEN 'mai-a-mothers-rage'
              ELSE trim(both '-' FROM regexp_replace(lower(title), '[^a-z0-9]+', '-', 'g'))
         END AS base_slug
  FROM public.media
  WHERE id IN (
    '75322c1d-6fdd-4ab5-9025-5ce2d10a7309', '199021b8-d515-484d-8ca9-71d7dc0e4f74',
    '700dc5a5-a9d5-4f70-b214-e46a03c5c123', '57eeea88-f0f5-4a34-819c-8304bf1fd6b7',
    '027221ea-e4fd-49ba-b0a2-4ee71017158e', 'b8269040-d316-4c57-afb1-1dc1d951ee49',
    '889cc79f-3c4c-4347-9679-0ebd2b472453', 'e367b9f9-7b2e-47d9-9d56-2f7868e11c07',
    '3d071fce-c95c-4287-8f4a-e6d0b1c2231b', 'cda3d1fc-f21d-457a-8992-2289ac5d864a',
    '267fdd2a-595d-44db-b08a-e29fa59f9efa', 'bad0e089-8766-4a30-957a-c2b4d7da0356',
    '75a73610-8306-440e-a68f-c3c1264368bb', 'd9be2cb2-41d1-4464-b80e-7e4a44589c1c',
    'dc9776cd-fb16-49b1-8398-92844dee799d', 'cc9b8af7-3a0a-4109-a32e-b59f3723ee70',
    'aced580b-327c-46dd-97fa-fe21cac0e1d6', 'b750c2d7-e8b9-4eeb-8ee0-72a4f4ab742d',
    'c6d7cc27-1158-45f4-9d9d-68fb7ee26c71', '35110676-3ceb-4316-8e7a-1464925e8a37',
    'a1da0742-0d63-4562-8d91-791a188ac1e6', 'a36bffc5-d584-4e24-8015-598e3b2955c6',
    'c61a4ab5-196b-40ca-bfe0-0defe42d4ca9', '492b486b-56c2-4749-8725-99bbc37f78cc',
    '87893097-3eb1-4f27-b191-a4524575221a', '576e2f73-342c-4793-b330-68004f1efb5e',
    'e2000bca-14de-490e-91ae-18523e58456d', '6e384f4e-3b60-481b-9b39-cc419ea52652',
    '4b6fe5e6-014f-4de8-a634-88bba84a023b', 'eb65c7c5-2bef-4d9c-9121-d205d3da4859',
    'b6f36eaa-42b9-407a-b426-8516d7060bc7', 'b64abc59-3c5c-481a-a4d2-6273c1800fd9',
    '71b0e004-4dd1-4a7d-bc77-b2dd01c29a37', 'cd151b11-4774-4224-8b3a-8600eea495f3',
    'e8e06d4d-3e7b-40f7-bc71-d6f802b2346e', '6be5f9d6-a323-46b7-a920-e4b5c50867b5'
  )
), slugged AS (
  SELECT id,
         CASE WHEN count(*) OVER (PARTITION BY base_slug) > 1
              THEN media_type || '-' || base_slug
              ELSE base_slug END AS new_slug
  FROM normalized
)
UPDATE public.media AS m
SET slug = s.new_slug
FROM slugged AS s
WHERE m.id = s.id;

-- Verified title matches. Show duration_minutes is left as supplied because
-- it is a whole-series aggregate in this schema, not one episode's runtime.
UPDATE public.media AS m
SET description = v.description,
    trailer_url = COALESCE(v.trailer_url, m.trailer_url),
    video_url = COALESCE(v.trailer_url, m.video_url),
    released_year = v.released_year,
    released_at = v.released_at::date,
    duration_minutes = COALESCE(v.duration_minutes, m.duration_minutes),
    views_count = v.views_count
FROM (VALUES
  ('75322c1d-6fdd-4ab5-9025-5ce2d10a7309'::uuid,
   'A prince exiled from his kingdom joins forces with a courageous warrior to rescue his wife from the demon king Ravana.',
   'https://www.youtube.com/watch?v=scNmYjoR-qM', 2023, '2023-06-16', 178, 20000),
  ('700dc5a5-a9d5-4f70-b214-e46a03c5c123'::uuid,
   'After the devastating events of Infinity War, the surviving Avengers work to reverse Thanos’s actions and restore balance to the universe.',
   'https://www.youtube.com/watch?v=TcMBFSGVi1c', 2019, '2019-04-26', 181, 25000),
  ('027221ea-e4fd-49ba-b0a2-4ee71017158e'::uuid,
   'A young blade runner uncovers a buried secret that could destabilize what remains of society, leading him to search for former blade runner Rick Deckard.',
   'https://www.youtube.com/watch?v=gCcx85zbxz4', 2017, '2017-10-06', 164, 10000),
  ('cda3d1fc-f21d-457a-8992-2289ac5d864a'::uuid,
   'In a village shaped by ancient customs, a rebellious young man is drawn into a conflict between the forest, its people, and a powerful local landlord.',
   'https://www.youtube.com/watch?v/8mrVmf239GU', 2022, '2022-09-30', 150, 12000),
  ('492b486b-56c2-4749-8725-99bbc37f78cc'::uuid,
   'A laborer rises through the ranks of a red sandalwood smuggling syndicate, challenging its established power structure.',
   'https://www.youtube.com/watch?v=ou6h-22tMnA', 2021, '2021-12-17', 179, 14000),
  ('4b6fe5e6-014f-4de8-a634-88bba84a023b'::uuid,
   'In a crime-ridden city, an ensemble of characters cross paths in stories of revenge, justice, and survival.',
   'https://www.youtube.com/watch?v=PRtz8JQw01A', 2005, '2005-04-01', 124, 6000),
  ('71b0e004-4dd1-4a7d-bc77-b2dd01c29a37'::uuid,
   'After a bombing kills his daughter, a quiet London businessman seeks justice and becomes entangled in a political conflict with a former IRA operative.',
   'https://www.youtube.com/watch?v=33iuQu3UtjI', 2017, '2017-10-13', 114, 7000),
  ('6be5f9d6-a323-46b7-a920-e4b5c50867b5'::uuid,
   'A former soldier is recruited to travel to the future and help humanity fight an invading alien force.',
   'https://www.youtube.com/watch?v=QPistcpGB8o', 2021, '2021-07-02', 138, 9000),
  ('199021b8-d515-484d-8ca9-71d7dc0e4f74'::uuid,
   'Master thief Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, protect the secret behind the Ant-Man suit from a new threat.',
   'https://www.youtube.com/watch?v=pWdKf3MneyI', 2015, '2015-07-17', 117, 5000),
  ('aced580b-327c-46dd-97fa-fe21cac0e1d6'::uuid,
   'Dr. Michael Morbius attempts to cure his rare blood disease, but the experiment gives him extraordinary abilities and a dangerous thirst.',
   'https://www.youtube.com/watch?v=oZ6iiRrz1SY', 2022, '2022-04-01', 104, 2000),
  ('a36bffc5-d584-4e24-8015-598e3b2955c6'::uuid,
   'An Indian intelligence agent known as Pathaan returns to stop a rogue former agent and his mercenary group from carrying out a major attack.',
   'https://www.youtube.com/watch?v=vqu4z34wENw', 2023, '2023-01-25', 146, 3000),
  ('b64abc59-3c5c-481a-a4d2-6273c1800fd9'::uuid,
   'In 1990s Mumbai, a wedding detective’s background checks derail a young man’s marriage plans, setting off a comic rivalry between the two.',
   'https://www.youtube.com/watch?v=hs2MPHRkP9A', 2020, '2020-11-15', 133, 1800),
  ('cd151b11-4774-4224-8b3a-8600eea495f3'::uuid,
   'When a highly skilled CIA operative uncovers agency secrets, he becomes the target of a global manhunt led by a ruthless former colleague.',
   'https://www.youtube.com/watch?v=BmllggGO4pM', 2022, '2022-07-15', 129, 8200),
  ('889cc79f-3c4c-4347-9679-0ebd2b472453'::uuid,
   'A Mumbai police officer investigates murders linked to a presumed-dead serial killer and begins to suspect her seemingly perfect husband.',
   'https://www.youtube.com/watch?v=bknUInx4-_8', 2022, '2022-08-19', NULL, 4200),
  ('e367b9f9-7b2e-47d9-9d56-2f7868e11c07'::uuid,
   'In Westeros, powerful families struggle for control of the Iron Throne while an ancient threat gathers beyond the northern wall.',
   'https://www.youtube.com/watch?v=KPLWWIOCOOQ', 2011, '2011-04-17', NULL, 15000),
  ('eb65c7c5-2bef-4d9c-9121-d205d3da4859'::uuid,
   'Cash-strapped contestants accept an invitation to compete in children’s games for a life-changing prize, only to discover the deadly stakes.',
   'https://www.youtube.com/watch?v=oqxAJKy0ii4', 2021, '2021-09-17', NULL, 18000),
  ('cc9b8af7-3a0a-4109-a32e-b59f3723ee70'::uuid,
   'As the gang faces a new threat inside the Bank of Spain, the Professor’s plan begins to unravel and the stakes become more personal.',
   'https://www.youtube.com/watch?v=p_PJbmrX4uk', 2020, '2020-04-03', NULL, 8000),
  ('b8269040-d316-4c57-afb1-1dc1d951ee49'::uuid,
   'A father’s search for his missing daughter draws him into a complex investigation filled with secrets and shifting identities.',
   NULL, 2020, '2020-07-10', NULL, 5000),
  ('bad0e089-8766-4a30-957a-c2b4d7da0356'::uuid,
   'After her daughter is killed, a devoted mother sets out to uncover the truth and seek justice.',
   NULL, 2022, '2022-04-15', NULL, 5000),
  ('75a73610-8306-440e-a68f-c3c1264368bb'::uuid,
   'A businessman’s son inherits the throne of a lawless North Indian town, where rival gangs and corrupt power brokers fight for control.',
   NULL, 2018, '2018-11-16', NULL, 8000)
) AS v(id, description, trailer_url, released_year, released_at, duration_minutes, views_count)
WHERE m.id = v.id;

-- Keep the already supplied official trailer and correct the known premiere date.
UPDATE public.media
SET released_at = '2022-07-15'::date
WHERE id = 'cd151b11-4774-4224-8b3a-8600eea495f3';

-- Additional identifiable shows that were blank in the supplied export.
-- Existing series-level duration values are preserved; views_count values are
-- sample application counts, not verified audience statistics.
UPDATE public.media AS m
SET description = v.description,
    trailer_url = COALESCE(v.trailer_url, m.trailer_url),
    video_url = COALESCE(v.trailer_url, m.video_url),
    released_year = v.released_year,
    released_at = v.released_at::date,
    views_count = v.views_count
FROM (VALUES
  ('267fdd2a-595d-44db-b08a-e29fa59f9efa'::uuid,
   'Lucifer Morningstar abandons Hell for Los Angeles, where he helps a homicide detective solve crimes while confronting his own past.',
   'https://www.youtube.com/watch?v=X4bF_quwNtw', 2016, '2016-01-25', 9000),
  ('3d071fce-c95c-4287-8f4a-e6d0b1c2231b'::uuid,
   'On Cape Cod, National Marine Fisheries Service agent Jackie Quiñones discovers a body on the beach and is drawn into a murder investigation as she struggles toward sobriety.',
   'https://www.youtube.com/watch?v=3M9_ygoW1cc', 2020, '2020-05-18', 4000),
  ('b6f36eaa-42b9-407a-b426-8516d7060bc7'::uuid,
   'In the summer of 1985, the kids of Hawkins enjoy a new mall while a dangerous supernatural threat returns to their town.',
   'https://www.youtube.com/watch?v=YEG3bmU_WaI', 2019, '2019-07-04', 32000),
  ('c61a4ab5-196b-40ca-bfe0-0defe42d4ca9'::uuid,
   'In postwar Birmingham, crime boss Tommy Shelby leads his ambitious family’s rise through the city’s criminal underworld.',
   'https://www.youtube.com/watch?v=SRE5pZwNyrw', 2013, '2013-09-12', 7000),
  ('dc9776cd-fb16-49b1-8398-92844dee799d'::uuid,
   'After Rio is captured, the Professor reunites the gang to mount a new heist and bring their friend home.',
   'https://www.youtube.com/watch?v=TFJwUwnShnA', 2019, '2019-07-19', 8000),
  ('b8269040-d316-4c57-afb1-1dc1d951ee49'::uuid,
   'A desperate father faces an impossible demand after his young daughter is kidnapped, while inspector Kabir Sawant leads the investigation.',
   'https://www.youtube.com/watch?v=nxE-k2MLQIA', 2020, '2020-07-10', 5000),
  ('bad0e089-8766-4a30-957a-c2b4d7da0356'::uuid,
   'After her daughter’s death, Sheel Chaudhary investigates what happened and is pulled into a world of crime and corruption.',
   'https://www.youtube.com/watch?v=lT_ud0NY_MU', 2022, '2022-04-15', 5000),
  ('75a73610-8306-440e-a68f-c3c1264368bb'::uuid,
   'An incident at a wedding procession brings two brothers into conflict with the powerful Tripathi family and draws them into the violent world of Mirzapur.',
   'https://www.youtube.com/watch?v=ZNeGF-PvRHY', 2018, '2018-11-16', 8000)
) AS v(id, description, trailer_url, released_year, released_at, views_count)
WHERE m.id = v.id;

COMMIT;
