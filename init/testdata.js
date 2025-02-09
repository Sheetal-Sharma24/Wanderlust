const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    des:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    img: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    loc: "Malibu",
    country: "United States",
    category: "Beach",
    review: [],  // Assuming the reference IDs will be inserted here
    owner: "", // Owner reference ID
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]  // [longitude, latitude]
    }
  },
  {
    title: "Modern Loft in Downtown",
    des:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    img: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    loc: "New York City",
    country: "United States",
    category: "Cities",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128] // [longitude, latitude]
    }
  },
  {
    title: "Mountain Retreat",
    des:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    img: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    loc: "Aspen",
    country: "United States",
    category: "Mountains",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911] // [longitude, latitude]
    }
  },
  {
    title: "Historic Villa in Tuscany",
    des:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    img: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    loc: "Florence",
    country: "Italy",
    category: "Farms",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696] // [longitude, latitude]
    }
  },
 
    {
      title: "Secluded Treehouse Getaway",
      des:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      img: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      loc: "Portland",
      country: "United States",
      category: "Camping",
      review: [],
      owner: "",
      geometry: {
        type: "Point",
        coordinates: [-122.6765, 45.5234]  // [longitude, latitude]
      }
    },
    {
      title: "Beachfront Paradise",
      des:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      img: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      loc: "Cancun",
      country: "Mexico",
      category: "Beach",
      review: [],
      owner: "",
      geometry: {
        type: "Point",
        coordinates: [-87.0461, 21.1743]  // [longitude, latitude]
      }
    },
    {
      title: "Rustic Cabin by the Lake",
      des:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      img: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      loc: "Lake Tahoe",
      country: "United States",
      category: "Lakes",
      review: [],
      owner: "",
      geometry: {
        type: "Point",
        coordinates: [-120.0324, 39.0968] // [longitude, latitude]
      }
    },
    {
      title: "Luxury Penthouse with City Views",
      des:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      img: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      loc: "Los Angeles",
      country: "United States",
      category: "Trending",
      review: [],
      owner: "",
      geometry: {
        type: "Point",
        coordinates: [-118.2437, 34.0522] // [longitude, latitude]
      }
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      des:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      img: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      loc: "Verbier",
      country: "Switzerland",
      category: "Arctic",
      review: [],
      owner: "",
      geometry: {
        type: "Point",
        coordinates: [7.2268, 46.0987] // [longitude, latitude]
      }
    },
    {
      title: "Safari Lodge in the Serengeti",
      des:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      img: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      loc: "Serengeti National Park",
      country: "Tanzania",
      category: "Pools",
      review: [],
      owner: "",
      geometry: {
        type: "Point",
        coordinates: [34.8888, -2.3333] // [longitude, latitude]
      }
    },

  {
    title: "Tropical Breakfast Retreat",
    des:
      "Start your day with a fresh breakfast in a beautiful tropical setting. Enjoy local delicacies while surrounded by lush greenery.",
    img: {
      filename: "listingimage",
      url : 'https://th.bing.com/th/id/OIP.slpBLpUpknHtilLgtodtTgHaEK?w=1024&h=576&rs=1&pid=ImgDetMain',
    },
    price: 600,
    loc: "Bali",
    country: "Indonesia",
    category: "Breakfast-lunch",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [115.2272, -8.3405] // [longitude, latitude]
    }
  },
  {
    title: "Sunny Beachfront Escape",
    des:
      "Step out into the sand from this stunning beachfront property. A perfect getaway for beach lovers!",
    img: {
      filename: "listingimage",
      url : 'https://wallpaperaccess.com/full/83937.jpg'   
    },
    price: 1500,
    loc: "Maldives",
    country: "Maldives",
    category: "Beach",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [73.5170, 4.2015] // [longitude, latitude]
    }
  },
  {
    title: "Adventure Playland",
    des:
      "A paradise for kids and families! Offering activities such as zip-lining, rock climbing, and obstacle courses.",
    img: {
      filename: "listingimage",
    url : "https://images.unsplash.com/photo-1519563073830-57146c547640?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    },
    price: 1000,
    loc: "Orlando",
    country: "United States",
    category: "Play",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-81.3792, 28.5383] // [longitude, latitude]
    }
  },
  {
    title: "Glamping Domes in the Desert",
    des:
      "Experience the stunning beauty of the desert in a luxurious dome tent with panoramic views and star-gazing opportunities.",
    img: {
      filename: "listingimage",
      url : 'https://wallpapercave.com/wp/wp2440586.jpg'
      },
    price: 1800,
    loc: "Joshua Tree",
    country: "United States",
    category: "Domes",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-115.7122, 33.8734] // [longitude, latitude]
    }
  },
  {
    title: "Beachfront Brunch and Relaxation",
    des:
      "Enjoy a leisurely brunch while gazing at the ocean waves in this beautiful beach house setting.",
    img: {
      filename: "listingimage",
      url : 'https://c4.wallpaperflare.com/wallpaper/624/380/1000/life-resort-hotel-resort-hotel-wallpaper-preview.jpg'   
       },
    price: 1300,
    loc: "Seychelles",
    country: "Seychelles",
    category: "Breakfast-lunch",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [55.4757, -4.5857] // [longitude, latitude]
    }
  },
  {
    title: "Seaside Play Retreat",
    des:
      "Enjoy the beach, water sports, and family fun at this playful seaside retreat with activities for all ages.",
    img: {
      filename: "listingimage",
      url : 'https://wallpapercave.com/wp/wp8937808.jpg',
    },
    price: 1600,
    loc: "Costa Rica",
    country: "Costa Rica",
    category: "Play",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-85.7672, 9.9324] // [longitude, latitude]
    }
  },
  {
    title: "Oceanfront Dome Getaway",
    des:
      "Stay in a stunning dome-shaped house right on the oceanfront, offering breathtaking views and luxury amenities.",
    img: {
      filename: "listingimage",
      url : 'https://c0.wallpaperflare.com/preview/253/954/418/camping-camp-adventure-the-stake.jpg',
    },
    price: 2500,
    loc: "New Zealand",
    country: "New Zealand",
    category: "Domes",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [174.7794, -40.9006] // [longitude, latitude]
    }
  },
  {
    title: "Tropical Beach Lunch",
    des:
      "Enjoy an unforgettable lunch right on the beach, with a stunning view of turquoise waters and the sound of the waves.",
    img: {
      filename: "listingimage",
      url : 'https://wallpapercave.com/wp/wp12082265.jpg',
    },
    price: 1400,
    loc: "Hawaii",
    country: "United States",
    category: "Breakfast-Lunch",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-155.5870, 19.8968] // [longitude, latitude]
    }
  },
  {
    title: "Luxury Beachfront Dome",
    des:
      "A stunning beachfront dome offering luxury amenities and panoramic views of the sea.",
    img: {
      filename: "listingimage",
      url : 'https://images5.alphacoders.com/432/432769.jpg',
    },
    price: 2200,
    loc: "Bora Bora",
    country: "French Polynesia",
    category: "Domes",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5000] // [longitude, latitude]
    }
  },
  {
    title: "Beach Play and Water Sports",
    des:
      "Dive into the water, try out water sports, or just lounge on the beach at this ultimate beachside playground.",
    img: {
      filename: "listingimage",
      url : 'https://cdn.decoist.com/wp-content/uploads/2021/03/106130296_1363983173790628_7649653681264127998_n-67381.jpeg',
    },
    price: 2000,
    loc: "Miami",
    country: "United States",
    category: "Play",
    review: [],
    owner: "",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617] // [longitude, latitude]
    }
  }

];

module.exports = { data: sampleListings };
