CREATE TABLE prefcard_cards(
    id SERIAL PRIMARY KEY,
    surgeon TEXT NOT NULL,
    procedure TEXT NOT NULL,
    position TEXT NOT NULL,
    gloveSize INTEGER NOT NULL,
    gloveType TEXT NOT NULL,
    dominantHand TEXT NOT NULL,
    equipment TEXT NOT NULL,
    supplies TEXT NOT NULL,
    instrumentation TEXT NOT NULL,
    sutureAndUsage TEXT NOT NULL,
    dressings TEXT NOT NULL,
    skinPrep TEXT NOT NULL,
    medications TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL
)