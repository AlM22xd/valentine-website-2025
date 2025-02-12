// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Mimoza", // Your Valentine's name
    
    // Browser tab title
    pageTitle: "Will You Be My Valentine, princess? 💝",

    // Floating Background Elements
    floatingEmojis: {
        hearts: ['💕', '👸🏻', '💞', '💗', '👩🏻‍❤️‍💋‍👨🏻'], // Heart emojis in background
        bears: ['🐞', '🐛'] // Bear emojis in background
    },

    // Questions and Buttons
    questions: {
        first: {
            text: "Do you like me, (AKA your hubbeh?)", // First question
            yesBtn: "Yes", // Yes button text
            noBtn: "No", // No button text
            secretAnswer: "I don't like you, I love you, silly goose... 💕" // Hidden message
        },
        second: {
            text: "How much?", // Second question
            startText: "This much!", // Text before percentage
            nextBtn: "Next ❤️" // Next button text
        },
        third: {
            text: "Will you be my Valentine...?", // Final question
            yesBtn: "Yes!", // Yes button text
            noBtn: "No" // No button text
        }
    },

    // Love Meter Messages
    loveMessages: {
        extreme: " OH EM GEE as they say LOLOLOALALL LALALL LAOLOLOL XDDDD 🥰👩🏻‍❤️‍💋‍👨🏻", // Shows above 5000%
        high: " WOAHHH THATS SO MUCH??!!", // Shows above 1000%
        normal: "that's alot, but I don't think it's enough... " // Shows above 100%
    },

    // Final Celebration
    celebration: {
        title: " Thank you for making me the happiest man alive..", // Celebration title
        message: "Now come here and give me a kiss..", // Celebration message
        emojis: "🎉💕👩🏻‍❤️‍💋‍👨🏻" // Celebration emojis
    },

    // Website Colors
    colors: {
        backgroundStart: "#02075d", // Background gradient start
        backgroundEnd: "#DFC5FE", // Background gradient end
        buttonBackground: "#ff6b6b", // Button color
        buttonHover: "#ff8787", // Button hover color
        textColor: "#ff4757" // Text color
    },

    // Animation Settings
    animations: {
        floatDuration: "15s", // How long hearts float (10-20s)
        floatDistance: "50px", // Sideways movement (30-70px)
        bounceSpeed: "0.5s", // Bounce animation speed (0.3-0.7s)
        heartExplosionSize: 1.5 // Final heart explosion size (1.2-2.0)
    },

    // Music Settings
    music: {
        enabled: true, // Music feature is enabled
        autoplay: true, // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/duezs4vsz/video/upload/v1739366163/Cigarettes_After_Sex_-_Dark_Vacay_xoarab.mp3", // Paste your music URL here
        startText: "🎵 Play Music", // Button text to start music
        stopText: "🔇 Stop Music", // Button text to stop music
        volume: 0.5 // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
