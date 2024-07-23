import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, artisans, serviceTypes, creaArtisans, services, productCategories, productSubCategories, products, cards, cartItems, orders, contactUs, newsletters, appAssets, appSocialLinks, contactInfo, bannerSections } from '../lib/placeholder-data'
import { appName } from '../lib/constant';

const client = await db.connect();

async function seedUsers() {
  const tableName = appName + '_users';
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.query(`
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      phone VARCHAR(20),
      password TEXT NOT NULL,
      user_type VARCHAR(10) NOT NULL,
      account_status VARCHAR(10) NOT NULL
    );
  `);

  const inseredUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.query(
        `INSERT INTO ${tableName} 
        (id, name, last_name, email, phone, password, user_type, account_status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (id) DO NOTHING`,
        [user.id, user.name, user.last_name, user.email, user.phone, hashedPassword, user.user_type, user.account_status]
      );
    })
  );
  return inseredUsers;
}

const createTables = async () => {

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create Users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(20),
        password TEXT NOT NULL,
        user_type VARCHAR(10) NOT NULL,
        account_status VARCHAR(10) NOT NULL
      );
    `);

    // Create Artisans table
    await client.query(`
      CREATE TABLE IF NOT EXISTS artisans (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        sector VARCHAR(255),
        bio TEXT,
        city VARCHAR(255),
        place VARCHAR(255),
        location_lat DECIMAL,
        location_lon DECIMAL,
        sex VARCHAR(5),
        study_level VARCHAR(255),
        is_certif BOOLEAN,
        whatsapp_phone VARCHAR(20),
        average DECIMAL
      );
    `);

    // Create ServiceTypes table
    await client.query(`
      CREATE TABLE IF NOT EXISTS service_types (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        service_icon VARCHAR(255),
        is_active BOOLEAN
      );
    `);

    // Create CreaArtisans table
    await client.query(`
      CREATE TABLE IF NOT EXISTS crea_artisans (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        artisan_id UUID NOT NULL,
        image VARCHAR(255)
      );
    `);

    // Create Services table
    await client.query(`
      CREATE TABLE IF NOT EXISTS services (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        artisan_id UUID NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(10)
      );
    `);

    // Create ProductCategories table
    await client.query(`
      CREATE TABLE IF NOT EXISTS product_categories (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        icon VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create ProductSubCategories table
    await client.query(`
      CREATE TABLE IF NOT EXISTS product_subcategories (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        category_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create Products table
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        category_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        main_image VARCHAR(255),
        big_image VARCHAR(255),
        price DECIMAL,
        quantity INTEGER,
        return_delay INTEGER,
        status VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create Cards table
    await client.query(`
      CREATE TABLE IF NOT EXISTS cards (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL
      );
    `);

    // Create CartItems table
    await client.query(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        card_id UUID NOT NULL,
        product_id INTEGER REFERENCES products(id),
        quantity INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create Orders table
    await client.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        cart_id UUID NOT NULL,
        order_status VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create ContactUs table
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_us (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create Newsletter table
    await client.query(`
      CREATE TABLE IF NOT EXISTS newsletter (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create AppAssets table
    await client.query(`
      CREATE TABLE IF NOT EXISTS app_assets (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        app_icon VARCHAR(255),
        app_name VARCHAR(255),
        app_description TEXT,
        is_active BOOLEAN,
        app_primary_color VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create AppSocialLinks table
    await client.query(`
      CREATE TABLE IF NOT EXISTS app_social_links (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        social_icon VARCHAR(255),
        social_name VARCHAR(255),
        social_link VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create ContactInfo table
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_info (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        lat VARCHAR(20),
        long VARCHAR(20),
        email VARCHAR(255),
        phone VARCHAR(20),
        phone2 VARCHAR(20),
        fix VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

    // Create BannerSection table
    await client.query(`
      CREATE TABLE IF NOT EXISTS banner_section (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        banner_image VARCHAR(255),
        banner_title VARCHAR(255),
        banner_description TEXT,
        banner_font_color VARCHAR(20),
        is_harder_banner BOOLEAN,
        is_active BOOLEAN,
        link_action VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_deleted BOOLEAN
      );
    `);

  } catch (error) {
    console.error('Error creating tables', error);
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  } finally {
    console.log('In the finaly functon !')
  }
};


// export async function GET(){
//   await client.sql`BIGIN`
//   createTables();
//   await client.sql`COMMIT`;
//   return Response.json({ message: 'Database seeded successfully' });
// }

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();

    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

