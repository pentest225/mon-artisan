export const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      last_name: 'LastName',
      email: 'user@nextmail.com',
      phone: '1234567890',
      password: 'hashed_password',
      user_type: 'customer',
      account_status: 'active',
    },
  ];
  
  export const artisans = [
    {
      id: '7207a5cb-7338-4ad2-bc6d-06a20be10a0f',
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      sector: 'Carpentry',
      bio: 'Experienced carpenter with over 10 years in the field.',
      city: 'New York',
      place: 'Brooklyn',
      location_lat: 40.6782,
      location_lon: -73.9442,
      sex: 'M',
      study_level: 'High School',
      is_certif: true,
      whatsapp_phone: '1234567890',
      average: 4.5,
    },
  ];
  
  export const serviceTypes = [
    {
      id: '7a8e5f4d-7e3f-42a1-8b35-12cba2b49095',
      name: 'Plumbing',
      description: 'All plumbing related services.',
      service_icon: 'plumbing_icon.png',
      is_active: true,
    },
  ];
  
  export const creaArtisans = [
    {
      id: '23b5eac6-24d9-4f7a-95b5-27313b6058e2',
      artisan_id: '7207a5cb-7338-4ad2-bc6d-06a20be10a0f',
      image: 'crea_artisan_image.png',
    },
  ];
  
  export const services = [
    {
      id: 'c5e9b1d3-8173-40d7-8d60-3e8462f6b45c',
      artisan_id: '7207a5cb-7338-4ad2-bc6d-06a20be10a0f',
      description: 'Fixing leaky faucets',
      created_at: new Date(),
      status: 'available',
    },
  ];
  
  export const productCategories = [
    {
      id: '3e5de5a9-d08d-4b2e-809e-5183a1f08c6f',
      name: 'Electronics',
      description: 'Electronic gadgets and devices.',
      icon: 'electronics_icon.png',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const productSubCategories = [
    {
      id: '485f8d9c-2fc0-4a7a-9dd6-7b3d2e6e8e0e',
      category_id: '3e5de5a9-d08d-4b2e-809e-5183a1f08c6f',
      name: 'Mobile Phones',
      description: 'All kinds of mobile phones.',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const products = [
    {
      id: '563fd62e-8d92-43c8-ae0a-7f2a6b6b6b5c',
      category_id: '3e5de5a9-d08d-4b2e-809e-5183a1f08c6f',
      name: 'iPhone 12',
      main_image: 'iphone12.png',
      big_image: 'iphone12_big.png',
      price: 999.99,
      quantity: 50,
      return_delay: 30,
      status: 'available',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const cards = [
    {
      id: '25d42e8f-5fbd-46d8-98d2-7f3a6b6a6d5e',
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    },
  ];
  
  export const cartItems = [
    {
      id: '36f62e9e-9d82-4d7a-bf0a-8f4a7b7b7d6f',
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      card_id: '25d42e8f-5fbd-46d8-98d2-7f3a6b6a6d5e',
      product_id: '563fd62e-8d92-43c8-ae0a-7f2a6b6b6b5c',
      quantity: 1,
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const orders = [
    {
      id: '74e82f9c-9c83-4f7b-af1a-9f5a8b8b8e7f',
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      cart_id: '25d42e8f-5fbd-46d8-98d2-7f3a6b6a6d5e',
      order_status: 'pending',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const contactUs = [
    {
      id: '85f93a8c-9d84-4f8b-bf2a-af6a9c9c9f8f',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      subject: 'Inquiry',
      message: 'I have an inquiry about your services.',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const newsletters = [
    {
      id: '96f04b9e-ad85-4f9b-cf3a-bf7a0d0d0f9f',
      email: 'newsletter@example.com',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const appAssets = [
    {
      id: 'a6f15c9f-bd86-4fab-df4a-cf8a1e1e1g0g',
      app_icon: 'app_icon.png',
      app_name: 'MyApp',
      app_description: 'This is my app description.',
      is_active: true,
      app_primary_color: '#ff5733',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const appSocialLinks = [
    {
      id: 'b7f26d9e-ce87-4fbc-ef5a-df9a2e2e2h1h',
      social_icon: 'facebook_icon.png',
      social_name: 'Facebook',
      social_link: 'https://facebook.com',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const contactInfo = [
    {
      id: 'c8f37e9f-df88-4fcd-ff6a-efa3e3e3i2i',
      lat: '40.7128',
      long: '-74.0060',
      email: 'contact@example.com',
      phone: '1234567890',
      phone2: '0987654321',
      fix: '1122334455',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  
  export const bannerSections = [
    {
      id: 'd9f48f9e-ef89-4fde-ff7a-f0a4e4e4j3j',
      banner_image: 'banner_image.png',
      banner_title: 'Welcome to Our Store',
      banner_description: 'Get the best products here.',
      banner_font_color: '#ffffff',
      is_harder_banner: true,
      is_active: true,
      link_action: 'https://example.com/shop',
      created_at: new Date(),
      updated_at: new Date(),
      is_deleted: false,
    },
  ];
  