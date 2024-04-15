-- db/seed.sql
\c petpulse_db

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());

-- Inserting pets
INSERT INTO pets (user_id, name, species, created_at, updated_at)
VALUES 
(1, 'Fluffy', 'Cat', NOW(), NOW()),
(1, 'Buddy', 'Dog', NOW(), NOW()),
(1, 'Whiskers', 'Cat', NOW(), NOW()),
(1, 'Max', 'Dog', NOW(), NOW()),
(1, 'Luna', 'Cat', NOW(), NOW()),
(1, 'Bella', 'Dog', NOW(), NOW());

-- Inserting reminders
INSERT INTO reminders (pet_id, reminder_type, reminder_message, reminder_time, created_at, updated_at)
VALUES 
(1, 'Vaccination', 'Fluffy needs her annual vaccination', '2024-04-01 08:00:00', NOW(), NOW()),
(2, 'Grooming', 'Buddy needs grooming appointment', '2024-04-15 10:00:00', NOW(), NOW()),
(1, 'Feeding', 'Feed Fluffy her special diet', '2024-04-01 12:00:00', NOW(), NOW()),
(1, 'Vaccination', 'Whiskers needs her annual vaccination', '2024-04-01 08:00:00', NOW(), NOW()),
(2, 'Grooming', 'Max needs grooming appointment', '2024-04-15 10:00:00', NOW(), NOW()),
(1, 'Feeding', 'Feed Whiskers her special diet', '2024-04-01 12:00:00', NOW(), NOW()),
(3, 'Vaccination', 'Luna needs her annual vaccination', '2024-04-10 09:00:00', NOW(), NOW()),
(4, 'Grooming', 'Bella needs grooming appointment', '2024-04-20 11:00:00', NOW(), NOW()),
(2, 'Feeding', 'Feed Max his special diet', '2024-04-05 12:00:00', NOW(), NOW()),
(3, 'Medication', 'Give Luna her medication', '2024-04-02 14:00:00', NOW(), NOW()),
(4, 'Walking', 'Take Bella for a walk', '2024-04-18 07:00:00', NOW(), NOW()),
(1, 'Grooming', 'Book grooming appointment for Whiskers', '2024-04-05 10:00:00', NOW(), NOW()),
(2, 'Vaccination', 'Max needs his annual vaccination', '2024-04-12 11:00:00', NOW(), NOW());
