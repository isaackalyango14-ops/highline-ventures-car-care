export const businessLocation = {
  address: "14 Nabunya Road",
  city: "Kampala, Uganda",
  lat: 0.3027984,
  lng: 32.5584674,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=0.3027984,32.5584674",
  embedUrl: "https://www.google.com/maps?q=0.3027984,32.5584674&z=16&output=embed",
};

export const services = [
  {
    id: "car-wash",
    title: "Car Wash",
    icon: "Shower",
    description: "From a quick rinse to a comprehensive full-house wash, we treat every vehicle with precision and care.",
    features: ["Exterior Hand Wash", "Interior Vacuum", "Engine Bay Wash", "Underbody Rinse", "Window Cleaning"],
    duration: "20 - 90 min",
    category: "wash",
  },
  {
    id: "wheel-alignment",
    title: "Wheel Alignment",
    icon: "ArrowsLeftRight",
    description: "Computer-assisted 4-wheel alignment using professional-grade equipment to restore perfect handling.",
    features: ["4-Wheel Laser Alignment", "Steering Calibration", "Pre/Post Alignment Report", "Tyre Wear Inspection", "Road Test"],
    duration: "45 - 60 min",
    category: "wheel",
  },
  {
    id: "wheel-balancing",
    title: "Wheel Balancing",
    icon: "Gauge",
    description: "JohnBean 300L precision balancer eliminates vibration and extends tyre life significantly.",
    features: ["Dynamic Balancing", "Static Balancing", "Weight Placement", "Vibration Elimination", "All Tyre Sizes"],
    duration: "20 - 40 min",
    category: "wheel",
  },
  {
    id: "tyre-services",
    title: "Tyre Services",
    icon: "Circle",
    description: "Complete tyre solutions from fitting and rotation to inspection and replacement.",
    features: ["Tyre Fitting & Changing", "Tyre Rotation", "Puncture Repair", "Tyre Inspection", "Valve Replacement"],
    duration: "20 - 60 min",
    category: "tyre",
  },
  {
    id: "machine-polish",
    title: "Machine Polish",
    icon: "Sparkle",
    description: "Professional paint correction and machine polishing restores showroom-level gloss.",
    features: ["Paint Decontamination", "Machine Polishing", "Swirl Mark Removal", "Gloss Enhancement", "UV Protection"],
    duration: "3 - 6 hours",
    category: "detail",
  },
  {
    id: "full-detailing",
    title: "Pro Detailing",
    icon: "Star",
    description: "The complete package. A meticulous inside-out transformation for your vehicle.",
    features: ["Full Interior Detail", "Paint Correction", "Leather Conditioning", "Glass Treatment", "Engine Detail"],
    duration: "6 - 8 hours",
    category: "detail",
  },
  {
    id: "headlight-restore",
    title: "Headlight Restoration",
    icon: "Flashlight",
    description: "Restore yellowed or cloudy headlights to crystal clarity, improving visibility and appearance.",
    features: ["UV Film Removal", "Sand & Polish", "Clarity Restoration", "UV Sealant", "Per Set Pricing"],
    duration: "60 - 90 min",
    category: "detail",
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    icon: "Broom",
    description: "Deep extraction cleaning removes embedded dirt, stains, and odours from all interior fabrics.",
    features: ["Hot Water Extraction", "Stain Treatment", "Deodorising", "Seat Fabric Cleaning", "Mat Deep Clean"],
    duration: "2 - 3 hours",
    category: "interior",
  },
  {
    id: "fleet-washing",
    title: "Fleet Washing",
    icon: "Truck",
    description: "Bulk washing solutions for companies with multiple vehicles. Competitive fleet rates available.",
    features: ["Corporate Fleet Plans", "Bulk Discounts", "Scheduled Maintenance", "Priority Service", "Invoice Billing"],
    duration: "Varies",
    category: "wash",
  },
];

export const washPricingCar = [
  { name: "Wash & Go", price: 10000 },
  { name: "Wash & Dry", price: 15000 },
  { name: "Wash Dry Vac", price: 20000 },
  { name: "Pro Full House", price: 30000 },
  { name: "Pro Full House + Shine", price: 40000 },
  { name: "Pro Full House + Mag Rim", price: 50000 },
  { name: "Full Valet", price: 130000 },
  { name: "Machine Polish+", price: 130000 },
  { name: "Pro Detailer", price: 290000 },
];

export const washPricingSUV = [
  { name: "Wash & Go", price: 15000 },
  { name: "Wash & Dry", price: 25000 },
  { name: "Wash Dry Vac", price: 30000 },
  { name: "Pro Full House", price: 40000 },
  { name: "Pro Full House + Shine", price: 50000 },
  { name: "Pro Full House + Mag Rim", price: 60000 },
  { name: "Full Valet", price: 150000 },
  { name: "Machine Polish+", price: 170000 },
  { name: "Pro Detailer", price: 340000 },
];

export const extrasCar = [
  { name: "Undercarriage", price: 10000 },
  { name: "Engine Wash", price: 20000 },
  { name: "Headlight Restore (per set)", price: 40000 },
  { name: "Carpet Cleaning", price: 85000 },
];

export const extrasSUV = [
  { name: "Undercarriage", price: 15000 },
  { name: "Engine Wash", price: 30000 },
  { name: "Headlight Restore (per set)", price: 40000 },
  { name: "Carpet Cleaning", price: 85000 },
];

export const testimonials = [
  {
    name: "David Ssemakula",
    role: "Toyota Land Cruiser Owner",
    location: "Kampala",
    text: "Best car wash in Kampala, hands down. My Land Cruiser came out looking like it just rolled off the showroom floor. The team is thorough, fast, and professional.",
    rating: 5,
  },
  {
    name: "Grace Nakato",
    role: "Fleet Manager, Logistics Co.",
    location: "Entebbe Road",
    text: "We manage 12 company vehicles and Highline Ventures handles all of them. Consistent quality, fair fleet pricing, and they always deliver on time.",
    rating: 5,
  },
  {
    name: "Robert Kiggundu",
    role: "Mercedes-Benz C200 Owner",
    location: "Ntinda",
    text: "Took my Merc for wheel alignment after noticing the steering pull. The team used proper computerised equipment and the difference is night and day.",
    rating: 5,
  },
  {
    name: "Amina Nabukenya",
    role: "Toyota RAV4 Owner",
    location: "Bugolobi",
    text: "The Pro Detailer package is absolutely worth every shilling. My RAV4 had been through a rough season and they brought it back to life completely.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How long does a car wash take?",
    answer: "It depends on the package. A Wash & Go takes about 20 minutes. A Pro Full House takes around 60-90 minutes. Our Pro Detailer is a full-day service of 6-8 hours for a thorough transformation.",
  },
  {
    question: "Do I need an appointment?",
    answer: "Walk-ins are always welcome. However, for detailing packages (Full Valet, Machine Polish, Pro Detailer) and wheel alignment, we recommend calling ahead to reserve your slot and avoid waiting.",
  },
  {
    question: "Can you service SUVs, pick-ups, and double-cabs?",
    answer: "Absolutely. We have dedicated pricing for Cars and SUV/DCABs (double cabs). Our equipment handles all vehicle types including large 4x4s and pick-up trucks.",
  },
  {
    question: "Do you accept Mobile Money?",
    answer: "Yes. We accept MTN Mobile Money (0792914253). You can also pay via cash. For fleet clients, invoice billing arrangements are available.",
  },
  {
    question: "Do you perform wheel alignment and balancing?",
    answer: "Yes. We have professional computerised wheel alignment equipment and a JohnBean 300L wheel balancer for precision work. Both services are offered for all vehicle sizes.",
  },
  {
    question: "What is the difference between wheel alignment and balancing?",
    answer: "Wheel alignment adjusts the angles of your tyres to ensure they are parallel and perpendicular to the road. Balancing ensures the weight of the wheel and tyre assembly is evenly distributed. Both services are important for tyre longevity and safe handling.",
  },
];

export const stats = [
  { value: 1000, suffix: "+", label: "Vehicles Serviced" },
  { value: 9, suffix: "", label: "Service Types" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
  { value: 1, suffix: "Year", label: "In Business" },
];

export const galleryImages = [
  { src: "/images/facility-panorama.jpg", alt: "Highline Ventures facility panoramic view", category: "Facility" },
  { src: "/images/facility-front.jpg", alt: "Highline Ventures Car Care front entrance", category: "Facility" },
  { src: "/images/price-board.jpg", alt: "Car wash service menu and pricing", category: "Facility" },
  { src: "/images/workshop-staff.jpg", alt: "Professional workshop staff at work", category: "Workshop" },
  { src: "/images/workshop-interior.jpg", alt: "Workshop interior with hydraulic lift and air compressor", category: "Workshop" },
  { src: "/images/alignment-pit.jpg", alt: "Wheel alignment pit with 4-post system", category: "Equipment" },
  { src: "/images/tyre-changer.jpg", alt: "Professional tyre changing machine", category: "Equipment" },
  { src: "/images/wheel-balancer.jpg", alt: "JohnBean 300L wheel balancer", category: "Equipment" },
  { src: "/images/alignment-machine.jpg", alt: "Hydraulic wheel alignment equipment", category: "Equipment" },
];
