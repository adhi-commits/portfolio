export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    images?: string[];
    link?: string;
    tech?: string[];
}

export const graphicDesignProjects: Project[] = [
    { id: "gd-1", title: "Graphic Design Work 1", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251126_020257_134.png" },
    { id: "gd-2", title: "Graphic Design Work 2", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251129_081108_782.png" },
    { id: "gd-3", title: "Graphic Design Work 3", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251211_175731_679.png" },
    { id: "gd-4", title: "Graphic Design Work 4", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251211_175745_833.png" },
    { id: "gd-5", title: "Graphic Design Work 5", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251211_195713_590.png" },
    { id: "gd-6", title: "Graphic Design Work 6", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251212_225627_517.png" },
    { id: "gd-7", title: "Graphic Design Work 7", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251214_195336_347.png" },
    { id: "gd-8", title: "Graphic Design Work 8", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251214_202400_477.png" },
    { id: "gd-9", title: "Graphic Design Work 9", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251216_084607_440.png" },
    { id: "gd-10", title: "Graphic Design Work 10", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251216_191816_311.png" },
    { id: "gd-11", title: "Graphic Design Work 11", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251216_221634_480.png" },
    { id: "gd-12", title: "Graphic Design Work 12", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251219_224822_738.png" },
    { id: "gd-13", title: "Graphic Design Work 13", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20260107_221617_452.png" },
    { id: "gd-14", title: "Graphic Design Work 14", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20260114_154810_892.png" },
    { id: "gd-15", title: "Graphic Design Work 15", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20260219_082319_693 (2).png" },
    { id: "gd-16", title: "Graphic Design Work 16", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20260222_021723_373.png" },
    { id: "gd-17", title: "Graphic Design Work 17", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_25-05-09_21-14-12-055.png" },
    { id: "gd-18", title: "Graphic Design Work 18", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_25-09-10_12-26-39-137.jpg" },
    { id: "gd-19", title: "Graphic Design Work 19", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_25-10-09_20-43-01-330.jpg" },
    { id: "gd-20", title: "Graphic Design Work 20", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_25-10-21_19-21-43-698.jpg" },
    { id: "gd-21", title: "Graphic Design Work 21", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_25-11-07_20-04-24-575.png" },
    { id: "gd-22", title: "Graphic Design Work 22", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_26-01-11_15-38-05-996.jpg" },
    { id: "gd-23", title: "Graphic Design Work 23", description: "Portfolio graphic design piece.", image: "/graphic_design/Picsart_26-01-27_00-20-22-199.jpg" },
    { id: "gd-24", title: "Graphic Design Work 24", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251124_121048_465.png" },
    { id: "gd-25", title: "Graphic Design Work 25", description: "Portfolio graphic design piece.", image: "/graphic_design/IMG_20251125_021319_988.png" },
];

export const photoManipulationProjects: Project[] = [
    { id: "pm-1", title: "Photo Manipulation Work 1", description: "Portfolio photo manipulation piece.", image: "/photo_manipulation/IMG_20251214_202402_254.png" },
    { id: "pm-2", title: "Photo Manipulation Work 2", description: "Portfolio photo manipulation piece.", image: "/photo_manipulation/IMG_20260116_214009_575.png" },
    { id: "pm-3", title: "Photo Manipulation Work 3", description: "Portfolio photo manipulation piece.", image: "/photo_manipulation/Picsart_25-11-02_11-54-49-436.jpg" },
    { id: "pm-4", title: "Photo Manipulation Work 4", description: "Portfolio photo manipulation piece.", image: "/photo_manipulation/Picsart_25-11-05_19-14-38-913 (2).jpg" },
    { id: "pm-5", title: "Photo Manipulation Work 5", description: "Portfolio photo manipulation piece.", image: "/photo_manipulation/Picsart_25-11-11_22-06-55-603 (2).jpg" },
    { id: "pm-6", title: "Photo Manipulation Work 6", description: "Portfolio photo manipulation piece.", image: "/photo_manipulation/Picsart_25-11-30_10-19-33-246.jpg" },
];

export const uiuxProjects: Project[] = [
    {
        id: "ui-1",
        title: "Music Player App Redesign",
        description: "",
        image: "/ui/Screenshot 2025-06-01 192856.png",
        images: [
            "/ui/Screenshot 2025-06-01 192856.png",
            "/ui/Screenshot 2025-06-02 185222.png",
            "/ui/Screenshot 2025-06-14 212906.png"
        ],
        tech: ["Figma", "Wireframing"]
    },
    {
        id: "ui-2",
        title: "E-Commerce Dashboard",
        description: "",
        image: "/ui/Screenshot 2025-06-30 203142.png",
        images: [
            "/ui/Screenshot 2025-06-30 203142.png",
            "/ui/Screenshot 2025-07-08 203045.png"
        ],
        tech: ["Figma", "Data Vis"]
    },
    {
        id: "ui-3",
        title: "Social Media Platform",
        description: "",
        image: "/ui/Screenshot 2025-07-09 225940.png",
        images: [
            "/ui/Screenshot 2025-07-09 225940.png",
            "/ui/Screenshot 2025-07-14 124953.png",
            "/ui/Screenshot 2025-07-14 190332.png"
        ],
        tech: ["UI Design", "Prototyping"]
    },
    {
        id: "ui-4",
        title: "Fitness Tracking App",
        description: "",
        image: "/ui/Screenshot 2025-07-15 122022.png",
        images: [
            "/ui/Screenshot 2025-07-15 122022.png",
            "/ui/Screenshot 2025-07-15 145746.png",
            "/ui/Screenshot 2025-07-22 155340.png"
        ],
        tech: ["UX Research", "Mobile Design"]
    },
    {
        id: "ui-5",
        title: "Fintech Mobile Banking",
        description: "",
        image: "/ui/Screenshot 2025-07-23 212516.png",
        images: [
            "/ui/Screenshot 2025-07-23 212516.png",
            "/ui/Screenshot 2025-07-23 212819.png"
        ],
        tech: ["Figma", "Interaction Design"]
    },
    {
        id: "ui-6",
        title: "Travel Booking Desktop & Mobile",
        description: "",
        image: "/ui/Screenshot 2025-08-20 215131.png",
        images: [
            "/ui/Screenshot 2025-08-20 215131.png",
            "/ui/Screenshot 2025-08-21 194420.png",
            "/ui/Screenshot 2025-08-21 221346.png",
            "/ui/Screenshot 2025-08-21 230651.png",
            "/ui/Screenshot 2025-08-21 230946.png"
        ],
        tech: ["Responsive Design", "UI/UX"]
    },
];

export const thumbnailProjects: Project[] = [
    { id: "tb-1", title: "Thumbnail Work 1", description: "Portfolio thumbnail design.", image: "/thumbnail/IMG_20251214_165503_664.png" },
    { id: "tb-2", title: "Thumbnail Work 2", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-05-25_13-20-40-515.jpg" },
    { id: "tb-3", title: "Thumbnail Work 3", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-07-02_00-34-16-780.jpg" },
    { id: "tb-4", title: "Thumbnail Work 4", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-07-18_19-26-23-202.jpg" },
    { id: "tb-5", title: "Thumbnail Work 5", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-07-20_12-07-23-256.jpg" },
    { id: "tb-6", title: "Thumbnail Work 6", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-07-23_00-21-39-143.jpg" },
    { id: "tb-7", title: "Thumbnail Work 7", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-07-27_19-44-04-708.jpg" },
    { id: "tb-8", title: "Thumbnail Work 8", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-08-13_14-12-11-576.jpg" },
    { id: "tb-9", title: "Thumbnail Work 9", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-09-29_18-54-51-279.jpg" },
    { id: "tb-10", title: "Thumbnail Work 10", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-09-29_19-12-59-559.jpg" },
    { id: "tb-11", title: "Thumbnail Work 11", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_25-11-09_19-46-50-375.jpg" },
    { id: "tb-12", title: "Thumbnail Work 12", description: "Portfolio thumbnail design.", image: "/thumbnail/Picsart_26-02-14_17-04-16-358.jpg" },
];
