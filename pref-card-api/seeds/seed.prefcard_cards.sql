BEGIN;

TRUNCATE
prefcard_cards,
prefcard_users;

INSERT INTO prefcard_users
    (user_name, full_name, position, password)
VALUES
    ('asoohoo', 'Alyssa Soohoo', 'doctor', 'password'),
    ('bmoney', 'Bern Money', 'doctor', '1234567'),
    ('mmilli', 'Metch Milli', 'tech', 'pword1234'),
    ('pgary', 'Patrick Gary', 'nurse', 'nintendo');
INSERT INTO prefcard_cards
    (
    user_id,
    surgeon ,
    procedure ,
    position ,
    gloveSize ,
    gloveType ,
    dominantHand ,
    equipment ,
    supplies ,
    instrumentation ,
    sutureAndUsage ,
    dressings ,
    skinPrep ,
    medications
    )
VALUES
    (
        1,
        'Alyssa Soohoo',
        'Appendectomy',
        'Supine',
        7,
        'small',
        'right',
        'Electrosurgical unit with dispersive electrode',
        'Laparotomy pack',
        'Minor instrumentation set',
        'Ties: 2-0 Vicryl Reel',
        'Triple antibiotic ointment',
        'Shave if necessary',
        'Bupivacaine'
    ),
        (
        2,
        'Bern Money',
        'Craniotomy',
        'Supine',
        6.5,
        'small',
        'left',
        'Electrosurgical unit with dispersive electrode',
        'Craniotomy pack',
        'Minor instrumentation set',
        'Ties: 2-0 Vicryl Reel',
        'Triple antibiotic ointment',
        'Shave if necessary',
        'Bupivacaine'
    );
COMMIT;