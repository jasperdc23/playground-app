export type Toilet = {
  id: number;
  name: string;
  type: string;
  distance: string;
  walkTime: string;
  carTime: string;
  rating: number;
  cleanliness: number;
  occupied: boolean;
  x: number; // % position on mock map
  y: number;
  description: string;
  amenities: string[];
  reviews: { user: string; avatar: string; rating: number; comment: string; time: string }[];
  adName?: string;
  adDesc?: string;
  adTag?: string;
};

export const toilets: Toilet[] = [
  {
    id: 1,
    name: "SM Mall Food Court",
    type: "Shopping Mall",
    distance: "120m",
    walkTime: "2 min",
    carTime: "1 min",
    rating: 4.2,
    cleanliness: 4,
    occupied: false,
    x: 48,
    y: 38,
    description: "Located near the food court on Level 2. Clean, spacious, and well-maintained with automatic flush.",
    amenities: ["Auto Flush", "Baby Changing", "Wheelchair Access", "Hand Dryer"],
    reviews: [
      { user: "john_d", avatar: "J", rating: 5, comment: "Super clean! Auto flush is a game changer 🙌", time: "2h ago" },
      { user: "maria_s", avatar: "M", rating: 4, comment: "Good but always busy during lunch. Go early!", time: "5h ago" },
      { user: "alex_r", avatar: "A", rating: 4, comment: "Decent. Smells like lavender which is a plus ✅", time: "1d ago" },
    ],
    adName: "Tokyo Tokyo",
    adDesc: "Right next door! Ramen & rice bowls.",
    adTag: "⭐ 4.5 · 30m away",
  },
  {
    id: 2,
    name: "Shell Gas Station",
    type: "Gas Station",
    distance: "280m",
    walkTime: "4 min",
    carTime: "2 min",
    rating: 3.8,
    cleanliness: 3,
    occupied: true,
    x: 22,
    y: 55,
    description: "Standard gas station restroom. Usually clean during daytime. Key available at counter.",
    amenities: ["Hand Soap", "Mirror"],
    reviews: [
      { user: "pete_c", avatar: "P", rating: 4, comment: "Not bad for a gas station tbh 😂", time: "1h ago" },
      { user: "lisa_m", avatar: "L", rating: 3, comment: "It's fine. Does the job. Don't expect luxury.", time: "3h ago" },
      { user: "dan_k", avatar: "D", rating: 4, comment: "Staff keeps it clean, impressed!", time: "2d ago" },
    ],
    adName: "Chowking",
    adDesc: "Congee & fried chicken nearby.",
    adTag: "⭐ 4.1 · 150m away",
  },
  {
    id: 3,
    name: "Jollibee Ermita",
    type: "Fast Food",
    distance: "95m",
    walkTime: "1 min",
    carTime: "1 min",
    rating: 4.5,
    cleanliness: 5,
    occupied: false,
    x: 62,
    y: 62,
    description: "Surprisingly spotless! Single-use private cubicles. Best fast food CR in the area by far.",
    amenities: ["Air Freshener", "Hand Soap", "Paper Towels", "Single Cubicle Privacy"],
    reviews: [
      { user: "nina_b", avatar: "N", rating: 5, comment: "Cleanest fast food CR I've ever seen 😭💯", time: "30m ago" },
      { user: "carl_v", avatar: "C", rating: 5, comment: "Private cubicle! 10/10 would recommend", time: "2h ago" },
      { user: "soph_t", avatar: "S", rating: 4, comment: "Clean but small. One cubicle only, might need to wait.", time: "4h ago" },
    ],
  },
  {
    id: 4,
    name: "Robinsons Place",
    type: "Shopping Mall",
    distance: "450m",
    walkTime: "6 min",
    carTime: "3 min",
    rating: 4.0,
    cleanliness: 4,
    occupied: false,
    x: 75,
    y: 28,
    description: "Located at basement level near the supermarket. Spacious with multiple stalls. Attendant on duty.",
    amenities: ["Attendant", "Baby Changing", "Wheelchair Access", "Bidet"],
    reviews: [
      { user: "marc_r", avatar: "M", rating: 4, comment: "Bidet available! That's the Filipino standard 🇵🇭", time: "1h ago" },
      { user: "jen_a", avatar: "J", rating: 4, comment: "Good but a bit of a walk from main entrance.", time: "6h ago" },
      { user: "toni_f", avatar: "T", rating: 4, comment: "Attendant keeps it super clean. Tip them!", time: "1d ago" },
    ],
    adName: "Pancake House",
    adDesc: "Classic Filipino breakfast spot.",
    adTag: "⭐ 4.3 · 80m away",
  },
  {
    id: 5,
    name: "McDonald's Luneta",
    type: "Fast Food",
    distance: "680m",
    walkTime: "9 min",
    carTime: "4 min",
    rating: 3.5,
    cleanliness: 3,
    occupied: false,
    x: 35,
    y: 72,
    description: "Standard McDonald's restroom. Can get busy during peak hours. Better in the mornings.",
    amenities: ["Hand Soap", "Mirror", "Air Freshener"],
    reviews: [
      { user: "kim_p", avatar: "K", rating: 3, comment: "Average. Goes downhill after 12nn 🥲", time: "3h ago" },
      { user: "ray_d", avatar: "R", rating: 4, comment: "Mornings only! Very clean before 10am.", time: "5h ago" },
      { user: "bea_s", avatar: "B", rating: 3, comment: "The usual McD's experience. Not bad not great.", time: "2d ago" },
    ],
  },
];

export const triviaCards = [
  { emoji: "💧", title: "Stay Hydrated", fact: "Drinking 8 glasses of water a day keeps things moving smoothly. Dehydration is the #1 cause of constipation.", tip: "Keep a water bottle on your desk!" },
  { emoji: "🥦", title: "Fiber is King", fact: "Adults need 25–38g of fiber daily. Most people only get 15g. Fruits, veggies, and whole grains are your best friends.", tip: "Add avocado or banana to breakfast." },
  { emoji: "🚶", title: "Move to Groove", fact: "Even a 10-minute walk after meals stimulates digestion and reduces bloating by up to 50%.", tip: "Take the stairs after lunch today." },
  { emoji: "⏰", title: "Your Body's Clock", fact: "Your colon is most active in the morning. Going at the same time each day trains your gut for regularity.", tip: "Try a warm drink right after waking up." },
  { emoji: "🧘", title: "Stress Less", fact: "The gut-brain connection is real. Stress directly affects digestion. Anxiety can cause both constipation and diarrhea.", tip: "5 deep breaths before meals helps." },
  { emoji: "🦠", title: "Gut Microbiome", fact: "You have 38 trillion bacteria in your gut. Diversity is key — eat a wide variety of plant foods to feed them.", tip: "Try adding yogurt or kimchi this week." },
];

export const badges = [
  { id: 1, icon: "🔥", name: "On A Roll", desc: "3-day streak", earned: true, color: "#f97316" },
  { id: 2, icon: "💪", name: "Regular Champ", desc: "7-day streak", earned: true, color: "#16a34a" },
  { id: 3, icon: "🗺️", name: "Explorer",      desc: "Checked 5 locations", earned: true, color: "#3b82f6" },
  { id: 4, icon: "⭐", name: "Top Reviewer",  desc: "Left 3 reviews", earned: false, color: "#f59e0b" },
  { id: 5, icon: "👑", name: "Poop Royalty",  desc: "30-day streak", earned: false, color: "#8b5cf6" },
  { id: 6, icon: "🌍", name: "World Traveler", desc: "Check in from 3 cities", earned: false, color: "#06b6d4" },
];
