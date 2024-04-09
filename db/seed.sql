-- db/seed.sql
\c petpulse_db

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());

-- Inserting pets
INSERT INTO pets (user_id, name, species, created_at, updated_at)
VALUES 
(1, 'Fluffy', 'Cat', NOW(), NOW()),
(1, 'Buddy', 'Dog', NOW(), NOW());

-- Inserting reminders
INSERT INTO reminders (pet_id, reminder_type, reminder_message, reminder_time, created_at, updated_at)
VALUES 
(1, 'Vaccination', 'Fluffy needs her annual vaccination', '2024-04-01 08:00:00', NOW(), NOW()),
(2, 'Grooming', 'Buddy needs grooming appointment', '2024-04-15 10:00:00', NOW(), NOW()),
(1, 'Feeding', 'Feed Fluffy her special diet', '2024-04-01 12:00:00', NOW(), NOW());
