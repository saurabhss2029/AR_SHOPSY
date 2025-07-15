import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
// import car from "../assets/models/car.glb";
// import ioscar from "../assets/models/car.usdz";
// import car1 from "../assets/models/Car1.glb";
// import ioscar1 from "../assets/models/Car1.usdz";
import OfficeChair from "../assets/models/OfficeChair.glb";
import OfficeChairUsdz from "../assets/models/OfficeChair.usdz";
import pot from "../assets/models/pot.glb";
import potUsdz from "../assets/models/pot.usdz";
import cloths from "../assets/models/cloths.glb";
import clothsUsdz from "../assets/models/cloths.usdz";
// import character from "../assets/models/character.glb";
// import characterUsdz from "../assets/models/Character.usdz";
import vase from "../assets/models/vase.glb";
import vaseUsdz from "../assets/models/Vase.usdz";
// import window_and_curtains from "../assets/models/window_and_curtains.glb";
// import window_and_curtainsUsdz from "../assets/models/Window_and_Curtains.usdz";
import window__wooden from "../assets/models/window__wooden.glb";
import window__woodenUsdz from "../assets/models/Window__Wooden.usdz";
import window from "../assets/models/window.glb";
import windowUsdz from "../assets/models/WINDOW.usdz"; 
import air_jordan_1 from "../assets/models/air_jordan_1.glb";
import air_jordan_1Usdz from "../assets/models/Air_Jordan_1.usdz"; 
import cowboy_hat from "../assets/models/cowboy_hat.glb";
import cowboy_hatUsdz from "../assets/models/Cowboy_Hat.usdz"; 
import glasses from "../assets/models/glasses.glb";
import glassesUsdz from "../assets/models/Glasses.usdz"; 
import jordan_shoes from "../assets/models/jordan_shoes.glb";
import jordan_shoesUsdz from "../assets/models/Jordan_shoes.usdz"; 
import leather_shoes from "../assets/models/leather_shoes.glb";
import leather_shoesUsdz from "../assets/models/Leather_shoes.usdz"; 
import men_2023_free_3d_model from "../assets/models/men_2023_free_3d_model.glb";
import men_2023_free_3d_modelUsdz from "../assets/models/Men_2023_free_3d_model.usdz"; 
import mens_caro_flannel_shirt from "../assets/models/mens_caro_flannel_shirt.glb";
import mens_caro_flannel_shirtUsdz from "../assets/models/mens_caro_flannel_shirt.usdz"; 
import mens_casual_shirt from "../assets/models/mens_casual_shirt.glb";
// import mens_casual_shirtUsdz from "../assets/models/Mens_casual_Shirt.usdz"; 
import mens_jacket from "../assets/models/mens_jacket.glb";
import mens_jacketUsdz from "../assets/models/Mens_Jacket.usdz"; 
import stool_flower_pot from "../assets/models/stool_flower_pot.glb";
import stool_flower_potUsdz from "../assets/models/Stool_Flower_Pot.usdz"; 
import sun_glasses from "../assets/models/sun_glasses.glb";
import sun_glassesUsdz from "../assets/models/Sun_Glasses.usdz"; 

const productItems = [
  {
    id: 1,
    name: "Sheen Chair",
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "Furniture",
    color: "Orange",
    price: 8000, // Add price here
    rating: 4, // Add rating here
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 2,
    name: "Office Chair",
    modelSrc: OfficeChair,
    iOSSrc: OfficeChairUsdz,
    category: "Furniture",
    color: "black",
    price: 6000, // Add price here
    rating: 3, // Add rating here
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 3,
    name: "pot",
    modelSrc: pot,
    iOSSrc: potUsdz,
    category: "Environment",
    color: "Red",
    price: 5000, 
    rating: 4, 
    annotations: [
      {
        title: "pot-structure",
        slot: "hotspot-1",
         position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 4,
    name: "Painting",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
    price: 100000, 
    rating: 5, 
    annotations: [
      {
        title: "wooden-frame",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "pure-canvas",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  // {
  //   id: 5,
  //   name: "Car",
  //   modelSrc: car,
  //   iOSSrc: ioscar,
  //   category: "Vehicle",
  //   color: "Blue",
  //   price: 250000000, 
  //   rating: 5, 
  //   annotations: [
  //     {
  //       title: "plastic-structure",
  //       slot: "hotspot-1",
  //       position: "-0.0036662781627494825m 0.11165170707633758m 0.07931578568217246m",
  //       normal: "-0.007882343763611447m 0.9530143214961644m 0.30282267365571863m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     }, {
  //       title: "glossy-color",
  //       slot: "hotspot-2",
  //       position: "-0.09202904871903242m 0.05133736629679797m 0.0013477452825590153m",
  //       normal: "-0.9976942525197127m 0.061837681663106964m 0.027969261979253417m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     },
  //   ]
  // },
  // {
  //   id: 6,
  //   name: "Sport Car",
  //   modelSrc: car1,
  //   iOSSrc: ioscar1,
  //   category: "Vehicle",
  //   color: "Red",
  //   price: 20500000, 
  //   rating: 4, 
  //   annotations: [
  //     {
  //       title: "plastic-structure",
  //       slot: "hotspot-1",
  //       position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
  //       normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     }, {
  //       title: "glossy-color",
  //       slot: "hotspot-2",
  //       position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
  //       normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     },
  //   ]
  // },
  {
    id: 7,
    name: "Female-Cloth",
    modelSrc: cloths,
    iOSSrc: clothsUsdz,
    category: "Cloth",
    color: "Orange",
    price: 2000, 
    rating: 2, 
    annotations: [
      {
        title: "best-fabric",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "best-design",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  // {
  //   id: 8,
  //   name: "Male-Cloth",
  //   modelSrc: character,
  //   iOSSrc: characterUsdz,
  //   category: "Cloth",
  //   color: "Green",
  //   price: 500, 
  //   rating: 1, 
  //   annotations: [
  //     {
  //       title: "character-head",
  //       slot: "hotspot-1",
  //       position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
  //       normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     },
  //     {
  //       title: "character-body",
  //       slot: "hotspot-2",
  //       position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
  //       normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     },
  //   ]
  // },
  {
    id: 9,
    name: "Vase",
    modelSrc: vase,
    iOSSrc: vaseUsdz,
    category: "Art",
    color: "Purple",
    price: 200, 
    rating: 3, 
    annotations: [
      {
        title: "vase-body",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
      {
        title: "vase-decoration",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  // {
  //   id: 10,
  //   name: "Window and Curtains",
  //   modelSrc: window_and_curtains,
  //   iOSSrc: window_and_curtainsUsdz,
  //   category: "Furniture",
  //   color: "White",
  //   price: 15000,
  //   rating: 4,
  //   annotations: [
  //     {
  //       title: "curtain-material",
  //       slot: "hotspot-1",
  //       position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
  //       normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
  //       orbit: "10.89188deg 119.9775deg 0.03543022m",
  //       target: "-0.1053838m 0.01610652m 0.1076345m"
  //     },
  //   ]
  // },
  {
    id: 11,
    name: "Wooden Window",
    modelSrc: window__wooden,
    iOSSrc: window__woodenUsdz,
    category: "Furniture",
    color: "Brown",
    price: 7000,
    rating: 3,
    annotations: [
      {
        title: "wooden-frame",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 12,
    name: "Window",
    modelSrc: window,
    iOSSrc: windowUsdz,
    category: "Furniture",
    color: "Gray",
    price: 10000,
    rating: 4,
    annotations: [
      {
        title: "glass-material",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 13,
    name: "Air Jordan 1",
    modelSrc: air_jordan_1,
    iOSSrc: air_jordan_1Usdz,
    category: "Footwear",
    color: "Red/White",
    price: 15000,
    rating: 5,
    annotations: [
      {
        title: "premium-leather",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 14,
    name: "Cowboy Hat",
    modelSrc: cowboy_hat,
    iOSSrc: cowboy_hatUsdz,
    category: "Accessories",
    color: "Brown",
    price: 3000,
    rating: 4,
    annotations: [
      {
        title: "material-detail",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 15,
    name: "Glasses",
    modelSrc: glasses,
    iOSSrc: glassesUsdz,
    category: "Accessories",
    color: "Black",
    price: 2500,
    rating: 4,
    annotations: [
      {
        title: "frame-style",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 16,
    name: "Jordan Shoes",
    modelSrc: jordan_shoes,
    iOSSrc: jordan_shoesUsdz,
    category: "Footwear",
    color: "White/Red",
    price: 12000,
    rating: 5,
    annotations: [
      {
        title: "comfortable-sole",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 17,
    name: "Leather Shoes",
    modelSrc: leather_shoes,
    iOSSrc: leather_shoesUsdz,
    category: "Footwear",
    color: "Brown",
    price: 8000,
    rating: 5,
    annotations: [
      {
        title: "leather-quality",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 18,
    name: "Men's 2023 Free 3D Model",
    modelSrc: men_2023_free_3d_model,
    iOSSrc: men_2023_free_3d_modelUsdz,
    category: "Clothing",
    color: "Mixed",
    price: 12000,
    rating: 5,
    annotations: [
      {
        title: "detailed-fabric",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 19,
    name: "Men's Caro Flannel Shirt",
    modelSrc: mens_caro_flannel_shirt,
    iOSSrc: mens_caro_flannel_shirtUsdz,
    category: "Clothing",
    color: "Plaid",
    price: 3000,
    rating: 4,
    annotations: [
      {
        title: "fabric-texture",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 20,
    name: "Men's Casual Shirt",
    modelSrc: mens_casual_shirt,
    // iOSSrc: mens_casual_shirtUsdz,
    category: "Clothing",
    color: "Blue",
    price: 4000,
    rating: 4,
    annotations: [
      {
        title: "comfort-fit",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 21,
    name: "Men's Jacket",
    modelSrc: mens_jacket,
    iOSSrc: mens_jacketUsdz,
    category: "Clothing",
    color: "Black",
    price: 8000,
    rating: 5,
    annotations: [
      {
        title: "premium-fabric",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 22,
    name: "Stool Flower Pot",
    modelSrc: stool_flower_pot,
    iOSSrc: stool_flower_potUsdz,
    category: "Environment",
    color: "Grey",
    price: 5000,
    rating: 4,
    annotations: [
      {
        title: "unique-design",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 23,
    name: "Sunglasses",
    modelSrc: sun_glasses,
    iOSSrc: sun_glassesUsdz,
    category: "Accessories",
    color: "Black",
    price: 2500,
    rating: 4,
    annotations: [
      {
        title: "frame-design",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  }

];
export default productItems;
