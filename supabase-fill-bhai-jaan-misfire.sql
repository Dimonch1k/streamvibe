-- Corrects the two movie rows identified by the user.
-- Copies each verified official trailer to both trailer_url and video_url.
-- Does not change poster_path, backdrop_path, views_count, or publication flags.
BEGIN;

UPDATE public.media
SET title = 'Kisi Ka Bhai Kisi Ki Jaan',
    slug = 'kisi-ka-bhai-kisi-ki-jaan',
    description = 'Bhaijaan, a self-appointed vigilante, keeps his society crime-free and avoids marriage. When his younger brothers find him a match, a chain of events takes the family across the country and reveals unexpected truths.',
    trailer_url = 'https://www.youtube.com/watch?v=bsi8_9EoYyg',
    video_url = 'https://www.youtube.com/watch?v=bsi8_9EoYyg',
    released_year = 2023,
    released_at = '2023-04-21'::date,
    duration_minutes = 144
WHERE id = '57eeea88-f0f5-4a34-819c-8304bf1fd6b7';

UPDATE public.media
SET slug = 'misfire',
    description = 'DEA agent Cole heads into the dangerous underworld of Tijuana after his ex-wife is kidnapped by a cartel. With help from a local reporter, he races to find her before time runs out.',
    trailer_url = 'https://www.youtube.com/watch?v=ZoI3f04x5Pc',
    video_url = 'https://www.youtube.com/watch?v=ZoI3f04x5Pc',
    released_year = 2014,
    released_at = '2014-10-21'::date,
    duration_minutes = 88
WHERE id = 'd9be2cb2-41d1-4464-b80e-7e4a44589c1c';

COMMIT;
