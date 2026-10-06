-- ============================================================================
-- Bansal Lawyers Melbourne — MySQL Production Database Schema
-- Optimized for Linux (Ubuntu / Debian / RHEL / CentOS) & MySQL 8.x / MariaDB
-- ============================================================================

CREATE DATABASE IF NOT EXISTS bansal_lawyers_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bansal_lawyers_db;

-- ----------------------------------------------------------------------------
-- 1. Table: contact_enquiries
-- Stores every client enquiry submitted through the website contact forms.
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL COMMENT 'Full client name',
  email VARCHAR(255) NOT NULL COMMENT 'Client email address',
  phone VARCHAR(50) NOT NULL COMMENT 'Client telephone or mobile number',
  subject VARCHAR(200) NOT NULL COMMENT 'Enquiry subject line',
  matter_type VARCHAR(60) NOT NULL COMMENT 'Practice area slug: migration, family-law, criminal-law, commercial-law, property-law, civil-law, other',
  message TEXT NOT NULL COMMENT 'Detailed message or matter summary',
  ip_address VARCHAR(45) DEFAULT NULL COMMENT 'IPv4 / IPv6 of submitter for audit logs',
  user_agent VARCHAR(255) DEFAULT NULL COMMENT 'Browser user-agent string',
  status ENUM('new', 'in_review', 'contacted', 'closed') DEFAULT 'new' COMMENT 'Administrative workflow status',
  notes TEXT DEFAULT NULL COMMENT 'Internal notes by solicitor or intake team',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Submission timestamp (UTC)',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at DESC),
  INDEX idx_status (status),
  INDEX idx_matter_type (matter_type),
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- 2. Table: consultation_bookings
-- Supports formal consultation requests and appointment scheduling.
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  enquiry_id INT DEFAULT NULL COMMENT 'Optional reference to initial enquiry',
  client_name VARCHAR(120) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  matter_category VARCHAR(60) NOT NULL,
  preferred_date DATE DEFAULT NULL,
  preferred_time VARCHAR(30) DEFAULT NULL,
  appointment_type ENUM('in_person', 'phone', 'video') DEFAULT 'in_person',
  status ENUM('pending', 'confirmed', 'completed', 'cancelled') DEFAULT 'pending',
  solicitor_assigned VARCHAR(120) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (enquiry_id) REFERENCES contact_enquiries(id) ON DELETE SET NULL,
  INDEX idx_booking_date (preferred_date),
  INDEX idx_booking_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
