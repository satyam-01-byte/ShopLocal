import bcrypt from "bcryptjs";

const stores = [
  {
    name: "Femina stores",
    email: "femina@gmail.com",
    password: bcrypt.hashSync("animef", 10),
    filename: "1.png",
    storeAddress: {
      address: "Near Chapra Post Office, Chapra, Bihar, 841302",
      city: "Chapra",
      state: "Bihar",
      country: "India",
      postal: 841302,
    },
    type: "Convenience store",
  },
  {
    name: "Rouza Milky Imambara",
    email: "rouza@gmail.com",
    password: bcrypt.hashSync("azour", 10),
    filename: "2.png",
    storeAddress: {
      address: "Near Devi Maa Mandir, Chapra, Bihar, 841302",
      city: "Chapra",
      state: "Bihar",
      country: "India",
      postal: 841302,
    },
    type: "Dairy store",
  },
  {
    name: "Jagdamba Kirana Bhandar",
    email: "raushan@gmail.com",
    password: bcrypt.hashSync("nahsuar", 10),
    filename: "1.png",
    storeAddress: {
      address: "Gudri",
      city: "Chapra",
      state: "Bihar",
      country: "India",
      postal: 841301,
    },
    type: "Covenience store",
  },
  {
    name: "Raju Kirana",
    email: "raju@gmail.com",
    password: bcrypt.hashSync("ujar", 10),
    filename: "3.png",
    storeAddress: {
      address: "Near Sadar Hospital, Chapra, Bihar, 841301",
      city: "Chapra",
      state: "Bihar",
      country: "India",
      postal: 841301,
    },
    type: "kirana store",
  },
  {
    name: "Mauhua stores",
    email: "mauhua@gmail.com",
    password: bcrypt.hashSync("auhuam", 10),
    filename: "4.png",
    storeAddress: {
      address: "Near Jinwar Nagar, Chapra, Bihar, 841301",
      city: "Chapra",
      state: "Bihar",
      country: "India",
      postal: 841301,
    },
    type: "Convenience store",
  },
  {
    name: "Alpine stores",
    email: "alpine@gmail.com",
    password: bcrypt.hashSync("enipla", 10),
    filename: "5.png",
    storeAddress: {
      address: "Botanical Garden road, Shibpur, Howrah, West Bengal, 711102",
      city: "Howrah",
      state: "West Bengal",
      country: "India",
      postal: 711102,
    },
    type: "Convenience store",
  },
  {
    name: "Ramesh Kirana Store",
    email: "ramesh@gmail.com",
    password: bcrypt.hashSync("hsemar", 10),
    filename: "6.png",
    storeAddress: {
      address: "Near Botanical Garden, Shibpur, Howrah, 711101",
      city: "Howrah",
      state: "West Bengal",
      country: "India",
      postal: 711101,
    },
    type: "kirana store",
  },
  {
    name: "Das Kirana Store",
    email: "das@gmail.com",
    password: bcrypt.hashSync("sad", 10),
    filename: "7.png",
    storeAddress: {
      address: "Near Rail Museum, Shibpur, Howrah, 711103",
      city: "Howrah",
      state: "West Bengal",
      country: "India",
      postal: 711103,
    },
    type: "kirana store",
  },
  {
    name: "Ray Milks",
    email: "ray@gmail.com",
    password: bcrypt.hashSync("yar", 10),
    filename: "8.png",
    storeAddress: {
      address: "Near Avani Mall, Shibpur, Howrah, 711103",
      city: "Howrah",
      state: "West Bengal",
      country: "India",
      postal: 711103,
    },
    type: "Dairy store",
  },
  {
    name: "KK Kirana",
    email: "kk@gmail.com",
    password: bcrypt.hashSync("kk", 10),
    filename: "9.png",
    storeAddress: {
      address: "Near Hooghly Bridge, Shibpur, Howrah, 711103",
      city: "Howrah",
      state: "West Bengal",
      country: "India",
      postal: 711103,
    },
    type: "kirana store",
  },
  {
    name: "Bobby stores",
    email: "bobby@gmail.com",
    password: bcrypt.hashSync("ybbob", 10),
    filename: "10.png",
    storeAddress: {
      address: "Near Jala Vihar, Hyderabad, Telangana, 500003",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      postal: 500003,
    },
    type: "Convenience store",
  },
  {
    name: "Nature stores",
    email: "nature@gmail.com",
    password: bcrypt.hashSync("erutan", 10),
    filename: "11.png",
    storeAddress: {
      address: "Near Birla Mandir, Hyderabad, Telangana, 500002",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      postal: 500002,
    },
    type: "Convenience store",
  },
  {
    name: "MD kiranas",
    email: "md@gmail.com",
    password: bcrypt.hashSync("dm", 10),
    filename: "12.png",
    storeAddress: {
      address: "Near Hussain Sagar Lake, Hyderabad, Telangana, 500002",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      postal: 500002,
    },
    type: "kirana store",
  },
  {
    name: "d-mart kiranas",
    email: "dmart@gmail.com",
    password: bcrypt.hashSync("tramd", 10),
    filename: "13.png",
    storeAddress: {
      address: "Near Ramoji Film City, Hyderabad, Telangana, 500001",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      postal: 500001,
    },
    type: "kirana store",
  },
  {
    name: "Rocky Dudhwala",
    email: "rocky@gmail.com",
    password: bcrypt.hashSync("ykcor", 10),
    filename: "14.png",
    storeAddress: {
      address: "Near Charminar, Hyderabad, Telangana, 500001",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      postal: 500001,
    },
    type: "Dairy store",
  },
];

export default stores;
