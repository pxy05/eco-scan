// Asset mapping for all Figma-exported images
// Maps Figma asset hashes to local require() statements
// Updated to use actual filenames from assets/images folder

export const assets = {
  // Earth Mascot Images (3 total) - ALL FOUND ✓
  earthCute: require('../assets/images/earthcute.png'),
  earthOkay: require('../assets/images/neutralearth.png'),
  earthBad: require('../assets/images/sad_earth.png'),
  
  // Banner/Background Images (5 total)
  banner: require('../assets/images/market-shelves.png'), // Using market-shelves as fallback
  banner1: require('../assets/images/market-shelves.png'), // Using market-shelves as fallback
  banner2: require('../assets/images/market-shelves.png'), // Using market-shelves as fallback
  banner3: require('../assets/images/market-shelves.png'),
  banner4: require('../assets/images/market-shelves.png'), // Using market-shelves as fallback
  
  // Login/Auth Logos (2 total) - ALL FOUND ✓
  appleLogo: require('../assets/images/apple.png'),
  googleLogo: require('../assets/images/google.png'),
  
  // Other Images (12 total) - Using available images as placeholders
  // Note: apple-with-white-background.png, hand-with-plant.png, and bins.png are used for eco facts
  image17: require('../assets/images/chips.png'), // Placeholder
  image12: require('../assets/images/milk.png'), // Placeholder
  source: require('../assets/images/chips.png'), // Placeholder (hand-with-plant used for eco facts)
  image18: require('../assets/images/tea.png'), // Placeholder
  image24: require('../assets/images/chips.png'), // Placeholder (bins.png used for eco facts)
  earth: require('../assets/images/earthcute.png'), // Using earthCute as fallback
  image7: require('../assets/images/barbell-exercise.png'), // Placeholder
  image10: require('../assets/images/milk.png'), // Placeholder
  image21: require('../assets/images/tea.png'), // Placeholder
  image14: require('../assets/images/barbell-exercise.png'), // Placeholder
  image22: require('../assets/images/milk.png'), // Placeholder
  videoTutorial: require('../assets/images/market-shelves.png'), // Using market-shelves as fallback
  image20: require('../assets/images/tea.png'), // Placeholder (hand-with-plant used for eco facts)
  logo: require('../assets/images/earthcute.png'), // Using earthCute as fallback
};

// Helper function to get asset by hash (for backward compatibility)
export const getAssetByHash = (hash: string) => {
  const hashMap: Record<string, any> = {
    'afde586264834bcd046545c0d95a8cf848cc7628': assets.earthCute,
    '1e1834c9877633fb626b2a16bf5528fdb2987e7d': assets.earthOkay,
    '1ea02e27f6b43428c017efb0cfeaed32f7c36609': assets.earthBad,
    '606d5b783d2b7d8ffc5798d04d3698077704ec14': assets.banner3,
    '89a68d4d2e443dc9d128552198c6b4bb9fbaa707': assets.banner,
    'baf74e84966d0bf95bcc545f957ceb14388bfe31': assets.banner1,
    'aceea4457e0c859fef9cb441fa2f20b3764d426e': assets.banner2,
    'affb1a17a2441ae681c8cbc6824da03a495654e4': assets.banner4,
    'c63fba18206dca14439023ec44669018016f4c06': assets.appleLogo,
    'ba3866200fe28581a00f9748cde3c8d6caff1223': assets.googleLogo,
    '1a0b868082d3b796cbe0d8516b1740b032e89651': assets.image17,
    '1f839c4c277132ba5be0f2d22bbf6f2978f2b871': assets.image12,
    'd1383aa904aa2ac981060499065c97955d094d63': assets.source,
    '9b60cd096b2933c4b28eb21c79e473aaf2555234': assets.image18,
    '6d0226679e10092368049d71e8b97122b361e81e': assets.image24,
    '5c997bd5f58445fb5dcaf0042284dcb140cd3296': assets.earth,
    'bd895c19faff0c0e5107a0962486c409605ef59d': assets.image7,
    'a818736a91c445e4b9a23a120f5dd6e52921e818': assets.image10,
    '4d6ecffa2e6d72d4d2ec83886277afe1aa542341': assets.image21,
    'f54d585bacb2d0346422290b03ba7715bb1276fb': assets.image14,
    '7738ce515798cd0eebd6a58591d21cb89c7a9fb3': assets.image22,
    '854e416d028632fbfb1eb970935a074f612a2576': assets.videoTutorial,
    '53875ae10641d89650e5900baac83461110a7534': assets.image20,
    '92375b66cc5f6db228cbba4fabc2bd6032c970de': assets.logo,
  };
  return hashMap[hash] || null;
};

