-- db/seed.sql
\c petpulse_db

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());

-- Inserting pets with image URLs
INSERT INTO pets (user_id, name, species, image_url, created_at, updated_at)
VALUES 
(1, 'Fluffy', 'Cat', 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713201630/cute-kitten-sitting-staring-flower-nature-beauty-generated-by-artificial-intelligence_25030-66726_a7mlwl.jpg', NOW(), NOW()),
(1, 'Buddy', 'Dog', 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713201071/small-dog-owners-1_aospu1.jpg', NOW(), NOW()),
(1, 'Whiskers', 'Cat', 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713201549/NationalGeographic_2572187_square_hl47yr.jpg', NOW(), NOW()),
(1, 'Max', 'Dog', 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713201357/best-guard-dogs-1650302456.jpeg_tjuxpy.jpg', NOW(), NOW()),
(1, 'Luna', 'Cat', 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713201589/Asana3808_Dashboard_Standard_ddko45.jpg', NOW(), NOW()),
(1, 'Bella', 'Dog', 'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1713201126/1200px-Labrador_Retriever_portrait_wfydld.jpg', NOW(), NOW());


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
