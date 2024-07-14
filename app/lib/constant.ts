export const appName = "mon_artisan"

const showTableField = `
    SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
    WHERE table_name = 'mon_artisan_users';
    `

const addNewFieldOnTable = `ALTER TABLE mon_artisan_users
ADD COLUMN create_at TEXT,
ADD COLUMN update_at TEXT,
ADD COLUMN is_delete BOOLEAN;`