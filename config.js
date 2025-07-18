// Production Configuration
window.PRODUCTION_CONFIG = {
    // Supabase Configuration
    SUPABASE_URL: 'https://adhhsenlvelrohtetieb.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkaGhzZW5sdmVscm9odGV0aWViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MDA0MzUsImV4cCI6MjA2ODM3NjQzNX0.o1q8-BHycnHH4ycN-Qofw6ADw2djsA7iVO-xww68JZU',
    
    // Environment Detection
    IS_PRODUCTION: window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1',
    
    // API Endpoints
    API_BASE_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:8080' 
        : window.location.origin,
    
    // Real-time sync configuration
    SYNC_ENABLED: true,
    SYNC_INTERVAL: 2000, // 2 seconds
    
    // Debug mode
    DEBUG: window.location.hostname === 'localhost'
};

// Initialize configuration
console.log('🔧 Environment:', window.PRODUCTION_CONFIG.IS_PRODUCTION ? 'Production' : 'Development');
console.log('🌐 API Base URL:', window.PRODUCTION_CONFIG.API_BASE_URL);
console.log('🔗 Supabase URL:', window.PRODUCTION_CONFIG.SUPABASE_URL);
