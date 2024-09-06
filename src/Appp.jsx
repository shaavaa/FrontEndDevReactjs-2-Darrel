import React, { useEffect, useState } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
import { text } from '@fortawesome/fontawesome-svg-core';

const App = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    const restaurants = [
        {
            id: 0,
            name: "ThaiNam",
            photos: ["https://www.travelista.co/wp-content/uploads/2020/12/thainam-8.jpg"],
            categories: ["Thai"],
            price_range: "$$",
            rating: 4,
            isOpen: true,
            text: "Thainam adalah restoran yang menyajikan hidangan otentik Thailand dan Vietnam, menggabungkan cita rasa khas dari kedua negara tersebut. Restoran ini menawarkan berbagai menu populer seperti **pad thai**, **pho**, **spring rolls**, serta hidangan berbumbu pedas dan segar yang menjadi ciri khas kuliner Thailand dan Vietnam. Dengan suasana yang nyaman dan ramah, Thainam menjadi tempat favorit bagi pengunjung yang ingin menikmati pengalaman kuliner Asia Tenggara. Sajian dengan bahan-bahan segar dan rempah pilihan menjadikan Thainam pilihan tepat untuk pecinta makanan dengan cita rasa yang kaya dan eksotis."
        },
        {
            id: 1,
            name: "Cut The Crab",
            photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCcDeNn8nEqwK7ZYKABGOdmGxlgnBAWyEIQ&s"],
            categories: ["Seafood"],
            price_range: "$",
            rating: 5,
            isOpen: false,
            text: "Cut The Crab adalah restoran seafood yang terkenal dengan sajian makanan laut segar, terutama kepiting, yang disajikan dengan cara unik dan berani. Mengusung konsep makan bersama di meja tanpa piring, hidangan seperti kepiting, udang, kerang, dan cumi disajikan langsung di atas meja yang dilapisi kertas. Restoran ini menyediakan berbagai pilihan saus khas dengan cita rasa kuat, seperti saus pedas atau manis. Cut The Crab menawarkan pengalaman bersantap yang kasual dan interaktif, menjadikannya pilihan populer bagi para pecinta seafood yang ingin menikmati hidangan laut secara santai dan menyenangkan."
        },
        {
            id: 2,
            name: "Marugame Udon",
            photos: ["https://ayomakan.oss-ap-southeast-5.aliyuncs.com/general/6fac7403a7a442cb4d198ff78a90476d.jpg"],
            categories: ["Japanese"],
            price_range: "$$$",
            rating: 5,
            isOpen: false,
            text: "Marugame Udon adalah jaringan restoran Jepang yang terkenal dengan sajian **udon**—mi tebal khas Jepang yang disajikan dalam kuah kaldu lezat—dan **tempura** yang renyah. Restoran ini menawarkan konsep dapur terbuka, di mana pelanggan dapat melihat langsung proses pembuatan udon secara segar setiap hari. Dengan suasana modern namun tetap bernuansa tradisional Jepang, Marugame Udon menghadirkan pengalaman bersantap yang autentik dan terjangkau. Selain udon dan tempura, restoran ini juga menyajikan berbagai lauk pendamping dan minuman khas Jepang, menjadikannya tempat favorit bagi pecinta kuliner Jepang."
        },
        {
            id: 3,
            name: "Signora Pasta",
            photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5zZVoeRNo1NdQKeq23CrP5O48ThHzfZrpJe0so3BH5mJMYqken-upwnXPMfmWHPS9p4&usqp=CAU"],
            categories: ["Italian"],
            price_range: "$",
            rating: 4,
            isOpen: false,
            text: "Signora Pasta adalah restoran yang terkenal dengan sajian autentik makanan Italia, terutama pasta. Restoran ini menawarkan berbagai pilihan hidangan khas Italia seperti spaghetti, lasagna, ravioli, dan pizza yang disiapkan dengan resep tradisional. Dengan suasana yang hangat dan nyaman, Signora Pasta menjadi pilihan populer bagi pecinta kuliner Italia yang ingin menikmati makanan otentik dengan cita rasa asli. Tempat ini sering dikunjungi oleh keluarga dan teman-teman untuk bersantap bersama, baik untuk makan siang maupun makan malam."
        },
        {
            id: 4,
            name: "Harmoni Cafe & Resto",
            photos: ["https://i0.wp.com/malangraya.blok-a.com/wp-content/uploads/sites/5/2024/05/20170708_153447.jpg?fit=680%2C383&ssl=1"],
            categories: ["Mexican"],
            price_range: "$",
            rating: 3.0,
            isOpen: true, 
            text: "Harmoni Cafe & Resto adalah sebuah restoran yang menawarkan suasana nyaman dan santai dengan beragam pilihan menu makanan dan minuman. Terkenal dengan hidangan lokal dan internasional, tempat ini sering menjadi tujuan favorit bagi pengunjung yang ingin menikmati makanan lezat dalam suasana yang tenang dan bersahabat. Harmoni Cafe & Resto juga sering menawarkan tempat untuk acara keluarga, pertemuan bisnis, atau sekedar bersantai dengan teman-teman. Dengan pelayanan yang ramah dan suasana yang menyenangkan, restoran ini menjadi pilihan populer di kalangan masyarakat setempat."
        },
        {
            id: 5,
            name: "Steak n Shake",
            photos: ["https://lh3.googleusercontent.com/p/AF1QipMcZ2Y4DnUZ2vAjp624Ye85Na1_c6kRriO99dIF=s1360-w1360-h1020"],
            categories: ["Steak House"],
            price_range: "$",
            rating: 3.0,
            isOpen: false,
            text: "Steak 'n Shake adalah jaringan restoran Amerika yang terkenal dengan spesialisasi dalam **steakburgers** dan **milkshakes**. Didirikan pada tahun 1934 di Normal, Illinois, Steak 'n Shake menggabungkan konsep diner klasik dengan menu yang menonjolkan burger yang terbuat dari daging steak, serta milkshake yang kental dan kaya rasa. Restoran ini menawarkan layanan dine-in, drive-thru, dan takeout, menjadikannya populer di kalangan pelanggan yang mencari makanan cepat saji berkualitas dengan suasana restoran kasual. Steak 'n Shake kini memiliki cabang di banyak lokasi di seluruh Amerika Serikat dan beberapa negara lainnya."
        },
        {
            id: 6,
            name: "Pizza Hut",
            photos: ["https://lh3.googleusercontent.com/p/AF1QipOudod6lsR6H1VyFep0jd-V3Q65Q3UKV78dDLcJ=s1360-w1360-h1020"],
            categories: ["American"],
            price_range: "$",
            rating: 3,
            isOpen: false,
            text: "Pizza Hut adalah salah satu jaringan restoran pizza terbesar dan paling terkenal di dunia. Didirikan pada tahun 1958 di Wichita, Kansas, Amerika Serikat, Pizza Hut dikenal karena menyajikan berbagai jenis pizza, pasta, dan hidangan sampingan seperti chicken wings dan garlic bread. Restoran ini menawarkan pilihan layanan dine-in, takeout, dan delivery, sehingga memudahkan pelanggan untuk menikmati makanan di tempat atau di rumah. Dengan variasi topping dan ukuran pizza, serta promosi yang sering berubah, Pizza Hut menjadi favorit di banyak negara, termasuk Indonesia."
        },
        {
            id: 7,
            name: "Ocean Garden",
            photos: ["https://lh3.googleusercontent.com/p/AF1QipMZpO-PjGflwP8FKf4L6Br2jO_Z_WzIaY-wbAYL=s1360-w1360-h1020"],
            categories: ["Seafood"],
            price_range: "$",
            rating: 4,
            isOpen: true,
            text: "Ocean Garden Malang adalah restoran populer di kota Malang, Indonesia, yang dikenal dengan spesialisasi hidangan laut (seafood) dan suasana yang nyaman untuk bersantap bersama keluarga atau teman. Restoran ini menawarkan beragam pilihan menu, mulai dari ikan, udang, cumi-cumi, hingga kepiting, yang disajikan dengan cita rasa khas Indonesia. Dengan ruang makan yang luas, Ocean Garden sering menjadi tempat pilihan bagi pengunjung yang ingin menikmati makanan laut segar di lingkungan yang santai. Lokasinya yang strategis membuatnya mudah diakses baik oleh warga lokal maupun wisatawan."
        }
    ];

    useEffect(() => {
        const id = window.location.href.split("/")[4];
        if (id) {
            setSelectedRestaurant(id)
        }
    }, [window.location.href])

    if (selectedRestaurant !== null) {
        return <RestaurantDetail restaurant={restaurants[selectedRestaurant]} />
    }

    return (
        <div className="App">
            <h1>Restaurants</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="horizontal-line"></div>
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default App;
