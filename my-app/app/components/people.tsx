export interface Person {
  name: string;
  role: string;
  avatar: string; // image URL or filename
  location?: string;
  bio?: string;
}

export const peopleData: Person[] = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "New York, USA",
    bio: "Visionary leader driving company growth and innovation.",
  },
  {
    name: "Michael Lee",
    role: "Lead Engineer",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "San Francisco, USA",
    bio: "Expert in software architecture and scalable systems.",
  },
  {
    name: "Sophia Martinez",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "Austin, USA",
    bio: "Focused on delivering customer-centric products.",
  },
  {
    name: "devi Kim",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "Seattle, USA",
    bio: "Passionate about creating intuitive digital experiences.",
  },
];

// Helper function to get avatar URL.
// Here, if avatar is a full URL, return it directly.
// If it's a filename, construct a path to your public folder (adjust as needed).
export function getAvatarUrl(avatar: string, size: number = 400): string {
  if (avatar.startsWith("http")) return avatar;

  // Assuming local avatars stored in /public/avatars/
  return `/avatars/${avatar}?w=${size}&h=${size}`;
}
