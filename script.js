
// ======================================
// AUTOVERSE - VEHICLE DATABASE
// ======================================

const cars = [

    {
        id: 1,
        name: "Porsche 911 GT3",
        brand: "Porsche",
        category: "Sports Car",
        year: 2025,
        body: "2-door sports coupe",
        engine: "4.0L Naturally Aspirated Flat-6",
        capacity: "3,996 cc",
        power: "502 hp",
        torque: "469 Nm",
        transmission: "6-speed manual / 7-speed PDK",
        drivetrain: "Rear-wheel drive",
        fuel: "Petrol",
        acceleration: "3.4 seconds",
        speed: "311 km/h",
        seats: "2",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000",
        description: "A track-focused sports car featuring a high-revving naturally aspirated flat-six engine, precision handling and advanced aerodynamics."
    },

    {
        id: 2,
        name: "Chevrolet Corvette Stingray",
        brand: "Chevrolet",
        category: "Sports Car",
        year: 2025,
        body: "2-door mid-engine coupe",
        engine: "6.2L Naturally Aspirated V8",
        capacity: "6,162 cc",
        power: "495 hp",
        torque: "637 Nm",
        transmission: "8-speed dual-clutch",
        drivetrain: "Rear-wheel drive",
        fuel: "Petrol",
        acceleration: "Approximately 2.9 seconds",
        speed: "Approximately 312 km/h",
        seats: "2",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000",
        description: "An American mid-engine sports car with a powerful V8 engine, sharp handling and impressive acceleration."
    },

    {
        id: 3,
        name: "Ferrari 296 GTB",
        brand: "Ferrari",
        category: "Supercar",
        year: 2025,
        body: "2-door supercar coupe",
        engine: "3.0L Twin-Turbo V6 Hybrid",
        capacity: "2,992 cc",
        power: "830 CV combined",
        torque: "740 Nm",
        transmission: "8-speed dual-clutch",
        drivetrain: "Rear-wheel drive",
        fuel: "Petrol / Electric",
        acceleration: "2.9 seconds",
        speed: "330 km/h",
        seats: "2",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000",
        description: "A Ferrari hybrid supercar combining a twin-turbocharged V6 engine with an electric motor for exceptional performance."
    },

    {
        id: 4,
        name: "Lamborghini Revuelto",
        brand: "Lamborghini",
        category: "Supercar",
        year: 2025,
        body: "2-door super sports coupe",
        engine: "6.5L Naturally Aspirated V12 Hybrid",
        capacity: "6,498 cc",
        power: "1,015 CV combined",
        torque: "725 Nm from V12 engine",
        transmission: "8-speed dual-clutch",
        drivetrain: "All-wheel drive",
        fuel: "Petrol / Electric",
        acceleration: "2.5 seconds",
        speed: "Over 350 km/h",
        seats: "2",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000",
        description: "A high-performance V12 hybrid supercar with three electric motors, advanced aerodynamics and all-wheel drive."
    },

    {
        id: 5,
        name: "BMW X5 M Competition",
        brand: "BMW",
        category: "SUV",
        year: 2025,
        body: "5-door performance SUV",
        engine: "4.4L Twin-Turbo V8",
        capacity: "4,395 cc",
        power: "625 hp",
        torque: "750 Nm",
        transmission: "8-speed automatic",
        drivetrain: "M xDrive AWD",
        fuel: "Petrol",
        acceleration: "3.9 seconds",
        speed: "250 km/h",
        seats: "5",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000",
        description: "A luxury performance SUV with a powerful twin-turbocharged V8 engine, advanced suspension and all-wheel drive."
    },

    {
        id: 6,
        name: "Mercedes-AMG G 63",
        brand: "Mercedes-Benz",
        category: "SUV",
        year: 2025,
        body: "5-door luxury SUV",
        engine: "4.0L Twin-Turbo V8",
        capacity: "3,982 cc",
        power: "585 hp",
        torque: "850 Nm",
        transmission: "9-speed automatic",
        drivetrain: "4MATIC AWD",
        fuel: "Petrol",
        acceleration: "4.4 seconds",
        speed: "220 km/h",
        seats: "5",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000",
        description: "A luxury off-road SUV combining a powerful V8 engine, premium interior, advanced technology and four-wheel-drive capability."
    },

    {
        id: 7,
        name: "Ford Bronco",
        brand: "Ford",
        category: "Off-road",
        year: 2025,
        body: "2-door / 4-door off-road SUV",
        engine: "2.7L EcoBoost Twin-Turbo V6",
        capacity: "2,694 cc",
        power: "330 hp",
        torque: "563 Nm",
        transmission: "10-speed automatic",
        drivetrain: "Advanced 4x4",
        fuel: "Petrol",
        acceleration: "Configuration dependent",
        speed: "Approximately 160 km/h",
        seats: "4 or 5",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000",
        description: "A rugged off-road vehicle equipped with four-wheel drive, terrain management modes and equipment for sand, mud and rocky trails."
    },

    {
        id: 8,
        name: "Toyota Land Cruiser 300",
        brand: "Toyota",
        category: "Off-road",
        year: 2025,
        body: "5-door full-size SUV",
        engine: "3.3L Twin-Turbo V6 Diesel",
        capacity: "3,346 cc",
        power: "309 hp",
        torque: "700 Nm",
        transmission: "10-speed automatic",
        drivetrain: "Full-time 4WD",
        fuel: "Diesel",
        acceleration: "Approximately 8 seconds",
        speed: "Approximately 210 km/h",
        seats: "5 or 7",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1000",
        description: "A durable four-wheel-drive SUV designed for demanding terrain, long-distance travel and off-road adventure."
    },

    {
        id: 9,
        name: "Volkswagen Golf R",
        brand: "Volkswagen",
        category: "Sport Hatchback",
        year: 2025,
        body: "5-door performance hatchback",
        engine: "2.0L Turbocharged Inline-4",
        capacity: "1,984 cc",
        power: "333 PS",
        torque: "420 Nm",
        transmission: "7-speed DSG",
        drivetrain: "4MOTION AWD",
        fuel: "Petrol",
        acceleration: "4.6 seconds",
        speed: "250 km/h",
        seats: "5",
        image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1000",
        description: "A practical performance hatchback featuring turbocharged power, all-wheel drive, sporty handling and modern technology."
    },

    {
        id: 10,
        name: "Honda Civic Type R",
        brand: "Honda",
        category: "Sport Hatchback",
        year: 2025,
        body: "5-door performance hatchback",
        engine: "2.0L Turbocharged Inline-4",
        capacity: "1,996 cc",
        power: "315 hp",
        torque: "420 Nm",
        transmission: "6-speed manual",
        drivetrain: "Front-wheel drive",
        fuel: "Petrol",
        acceleration: "Approximately 5.4 seconds",
        speed: "Approximately 275 km/h",
        seats: "4 or 5",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1000",
        description: "A performance hatchback with a turbocharged engine, manual transmission, limited-slip differential and track-focused handling."
    }

];

// ======================================
// APPLICATION VARIABLES
// ======================================

let currentCategory = "All";

const carGrid = document.getElementById("carGrid");
const searchInput = document.getElementById("searchInput");
const carModal = document.getElementById("carModal");

// ======================================
// DISPLAY CAR COLLECTION
// ======================================

function displayCars() {

    const searchText = searchInput.value.toLowerCase();

    const filteredCars = cars.filter(car => {

        const matchesCategory =
            currentCategory === "All" ||
            car.category === currentCategory;

        const matchesSearch =
            car.name.toLowerCase().includes(searchText) ||
            car.brand.toLowerCase().includes(searchText) ||
            car.category.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;

    });

    carGrid.innerHTML = "";

    if (filteredCars.length === 0) {

        carGrid.innerHTML =
            '<p class="no-results">No cars found. Try another search.</p>';

        return;
    }

    filteredCars.forEach(car => {

        const card = document.createElement("div");

        card.className = "car-card";

        card.innerHTML = `

            <img
                src="${car.image}"
                alt="${car.name}"
                loading="lazy"
                onerror="this.src='https://placehold.co/800x450/151a23/ffffff?text=Car+Image'"
            >

            <div class="car-info">

                <span class="category">
                    ${car.category}
                </span>

                <h3>${car.name}</h3>

                <p>${car.year} | ${car.body}</p>

                <div class="quick-specs">

                    <div>
                        <small>Engine</small>
                        <strong>${car.capacity}</strong>
                    </div>

                    <div>
                        <small>Power</small>
                        <strong>${car.power}</strong>
                    </div>

                    <div>
                        <small>0–100 km/h</small>
                        <strong>${car.acceleration}</strong>
                    </div>

                    <div>
                        <small>Top Speed</small>
                        <strong>${car.speed}</strong>
                    </div>

                </div>

                <button class="details-btn">
                    VIEW FULL DETAILS
                </button>

            </div>
        `;

        card.querySelector(".details-btn").addEventListener(
            "click",
            () => showCarDetails(car.id)
        );

        carGrid.appendChild(card);

    });

}

// ======================================
// CATEGORY FILTERING
// ======================================

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory = button.dataset.category;

        displayCars();

    });

});

// ======================================
// SEARCH FUNCTION
// ======================================

searchInput.addEventListener("input", displayCars);

// ======================================
// FULL VEHICLE SPECIFICATIONS
// ======================================

function showCarDetails(id) {

    const car = cars.find(vehicle => vehicle.id === id);

    if (!car) return;

    document.getElementById("modalImage").src = car.image;
    document.getElementById("modalImage").alt = car.name;

    document.getElementById("modalDetails").innerHTML = `

        <span class="category">${car.category}</span>

        <h2 style="margin:12px 0;">
            ${car.name}
        </h2>

        <p style="color:#aaa;">
            ${car.brand} | ${car.year}
        </p>

        <h3 style="margin-top:25px;">
            COMPLETE ENGINE SPECIFICATIONS
        </h3>

        <table class="spec-table">

            <tr>
                <td>Manufacturer</td>
                <td>${car.brand}</td>
            </tr>

            <tr>
                <td>Model Year</td>
                <td>${car.year}</td>
            </tr>

            <tr>
                <td>Category</td>
                <td>${car.category}</td>
            </tr>

            <tr>
                <td>Body Type</td>
                <td>${car.body}</td>
            </tr>

            <tr>
                <td>Engine</td>
                <td>${car.engine}</td>
            </tr>

            <tr>
                <td>Engine Capacity</td>
                <td>${car.capacity}</td>
            </tr>

            <tr>
                <td>Horsepower</td>
                <td>${car.power}</td>
            </tr>

            <tr>
                <td>Torque</td>
                <td>${car.torque}</td>
            </tr>

            <tr>
                <td>Transmission</td>
                <td>${car.transmission}</td>
            </tr>

            <tr>
                <td>Drivetrain</td>
                <td>${car.drivetrain}</td>
            </tr>

            <tr>
                <td>Fuel Type</td>
                <td>${car.fuel}</td>
            </tr>

            <tr>
                <td>Acceleration 0–100 km/h</td>
                <td>${car.acceleration}</td>
            </tr>

            <tr>
                <td>Maximum Speed</td>
                <td>${car.speed}</td>
            </tr>

            <tr>
                <td>Seating Capacity</td>
                <td>${car.seats}</td>
            </tr>

        </table>

        <h3>PERFORMANCE DESCRIPTION</h3>

        <p class="description">
            ${car.description}
        </p>

        <p class="description">
            Maximum speed is a claimed or approximate figure.
            Actual performance depends on the exact vehicle
            specification, tyres and driving conditions.
        </p>

    `;

    carModal.classList.add("show");

}

// ======================================
// CLOSE VEHICLE DETAILS
// ======================================

document.getElementById("closeModal").addEventListener(
    "click",
    () => {
        carModal.classList.remove("show");
    }
);

// Close when clicking outside the popup

carModal.addEventListener("click", event => {

    if (event.target === carModal) {
        carModal.classList.remove("show");
    }

});

// Close using ESC key

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        carModal.classList.remove("show");
    }

});

// ======================================
// INITIALIZE APPLICATION
// ======================================

document.getElementById("totalCars").textContent = cars.length;

displayCars();
