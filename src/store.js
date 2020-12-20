import React from 'react';

let products = [
    {
        id: "jaclyn-hill-eyeshadow-palette",
        name: "JACLYN HILL EYESHADOW PALETTE",
        brand: "MORPHE X JACLYN HILL",
        description: "This is not your average palette. That’d be boring. We (and most importantly, Jaclyn Hill) don’t do boring. This palette is a 2-year love affair. 35 OMG eyeshadows that Jaclyn whipped up, formulated, tested, re-tested, and perfected. They were created to deliver not only the best colour payoff but also amazing application. Mattes, shimmers, satins, foils, and glitter: all pressed to perfection...just the way Jaclyn wanted. Her dreamy colours are now your reality. So whether you’re pressed for time or have time to play, this palette is your bestie. Because a girl (and guy) needs to have options.\n(Finish: matte and shimmer)",
        application: "",
        price: "230",
        img1: "assets/img/product1/IMG_1.jpg",
        img2: "assets/img/product1/IMG_2.jpg"

    },
    {
        id: "soft-glam-eyeshadow-palette",
        name: "Soft Glam Eyeshadow Palette",
        brand: "Anastasia Beverly Hills",
        description: "Anastasia Beverly Hills Soft Glam Eyeshadow Palette is an everyday to night eyeshadow palette with 14 shades, including essential mattes and glamorous shimmers. This eye makeup collection features a highly pigmented, easy-to-blend formula, allowing you to create seamless neutral eyeshadow looks for both day and evening wear. Soft Glam Eyeshadow Palette includes 9 ultra-matte and 5 metallic eyeshadow finishes, a dual-ended makeup brush and a large mirror housed inside travel-friendly packaging.",
        application: "",
        price: "230",
        img1: "assets/img/product2/IMG_1.jpg",
        img2: "assets/img/product2/IMG_2.jpg"


    },
    {
        id: "riviera-palette",
        name: "Riviera Palette",
        brand: "Anastasia Beverly Hills",
        description: "Anastasia Beverly Hills Riviera Palette is an essential bright makeup palette that includes 14 all-new matte and metallic shades for eyes and face. The paradise-inspired springtime color collection features vibrant jewel tones and bright pops of color. Use the professional-quality makeup kit to create a wide range of vacation makeup looks. Riviera Palette includes 8 ultra-mattes, 4 metallics and 2 duo chromes plus a dual-ended makeup brush and a large mirror housed inside travel-friendly packaging.",
        application: "",
        price: "230",
        img1: "assets/img/product3/IMG_1.jpg",
        img2: "assets/img/product3/IMG_2.jpg"


    },
    {
        id: "legit-lashes-double-ended-mascara",
        name: "LEGIT Lashes Double-Ended Mascara",
        brand: "Huda Beauty",
        description: "2 Brushes, 2 Formulas, 1 LEGIT Mascara\n Featuring two full size mascaras in one dual-ended pack, these ultra-black formulas are clinically proven to volumize, lengthen, lift, and curl lashes. Legit Lashes Mascara glides smoothly onto lashes for an even, buildable, and clump-free application.",
        application: (
            <div>
                <div>
                    Side A - Volume: Short, volumizing fibers give an extreme volumizing effect for fuller, thicker lashes in just a few strokes.
                </div>
                <div>
                    Side B - Curl & Length: Gripping waxes and 5mm lengthening fibers give an immediate elongated effect while the brush curls and lengthens even the tiniest of lashes for a fluttery effect.
                </div>
            </div>
        ),
        note: "Cruelty-Free, Ophthalmologically Tested",
        price: "125",
        img1: "assets/img/product4/IMG_1.jpg",
        img2: "assets/img/product4/IMG_2.jpg"


    },
    {
        id: "lash-brag-volumizing-mascara",
        name: "Lash Brag Volumizing Mascara",
        brand: "Anastasia Beverly Hills",
        description: "Anastasia Beverly Hills Lash Brag Volumizing Mascara lets you achieve maximum lash volume and fullness you can’t stop bragging about. This voluminous mascara instantly creates the look of dramatic, full-bodied lashes with intense, jet-black color. The specially designed hourglass-shaped mascara wand separately coats each lash with the lush, full-pigment formula that glides on without weighing down lashes.\n With flexible polymers, this ultra-creamy mascara is designed to prevent clumping and create a long-lasting effect. Conditioning agents help smooth and soften lashes. Plus, Lash Brag’s unique blend of supple waxes gives lashes eye-catching definition, length and buildable, brag-worthy volume.",
        application: (
            <div>
                <div>
                    <span class="green">BRAG A LITTLE:</span> Just a single coat delivers the perfect amount of product, leaving you with voluptuously defined lashes that last all day.                </div>
                <div>
                    <span class="green">BRAG A LOT:</span> Apply 2 coats for extra length and thickness.
                </div>
                <div>
                    <span class="green">TOTAL BRAGGING RIGHTS:</span> Apply 3 coats for full-on extreme volume.
                </div>
            </div>
        ),
        price: "120",
        img1: "assets/img/product5/IMG_1.jpg",
        img2: "assets/img/product5/IMG_2.jpg"


    },
]

const getProducts = () => {
    return products;
}

const getProductById = id => {
    const index = products.findIndex(product => product.id === id)
    return products[index]
}

export { getProducts, getProductById }