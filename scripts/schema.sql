-- ============================================================================
-- Bansal Lawyers Melbourne — MySQL Production Database Schema
-- Optimized for Linux (Ubuntu / Debian / RHEL / CentOS) & MySQL 8.x / MariaDB
-- ============================================================================
-- The site uses the existing CRM database (contacts, appointments, and related
-- Laravel tables). No additional website-owned tables are created.

CREATE DATABASE IF NOT EXISTS bansal_lawyers_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE bansal_lawyers_db;
