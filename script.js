// ===== Storage Keys =====
const STORAGE_KEYS = {
    CURRENT_LIST: 'shopping_current_list',
    HISTORY: 'shopping_history',
    ALL_ITEMS: 'shopping_all_items'
};

// ===== Complete Indian Groceries List with Emojis, Telugu Names & Telugu Script (Alphabetically Sorted) =====
const VEGETABLES = [
    // Vegetables
    { name: 'Amaranth / Totakura / తోటకూర', emoji: '🥬', category: 'Vegetable' },
    { name: 'Artichoke / Artichoke / ఆర్టిచోక్', emoji: '🌱', category: 'Vegetable' },
    { name: 'Ash Gourd / Budida Gummadi / బూడిద గుమ్మడి', emoji: '🥒', category: 'Vegetable' },
    { name: 'Asparagus / Asparagus / అస్పారాగస్', emoji: '🌱', category: 'Vegetable' },
    { name: 'Banana Flower / Arati Puvvu / అరటి పువ్వు', emoji: '🌺', category: 'Vegetable' },
    { name: 'Banana Stem / Arati Dumpa / అరటి దుంప', emoji: '🌱', category: 'Vegetable' },
    { name: 'Beetroot / Beetroot / బీట్రూట్', emoji: '🌱', category: 'Vegetable' },
    { name: 'Bell Pepper / Capsicum / బెల్ పెప్పర్', emoji: '🫑', category: 'Vegetable' },
    { name: 'Bitter Gourd / Kakarakaya / కాకరకాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Bottle Gourd / Sorakaya / సొరకాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Broad Beans / Chikkudu Kaya / చిక్కుడు కాయ', emoji: '🫘', category: 'Vegetable' },
    { name: 'Broccoli / Broccoli / బ్రోకలీ', emoji: '🥦', category: 'Vegetable' },
    { name: 'Brussels Sprouts / Brussels Sprouts / బ్రస్సెల్స్ స్ప్రౌట్స్', emoji: '🥬', category: 'Vegetable' },
    { name: 'Cabbage / Cabbage / క్యాబేజీ', emoji: '🥬', category: 'Vegetable' },
    { name: 'Carrot / Carrot / క్యారెట్', emoji: '🥕', category: 'Vegetable' },
    { name: 'Cauliflower / Cauliflower / కాలీఫ్లవర్', emoji: '🥦', category: 'Vegetable' },
    { name: 'Celery / Celery / సెలెరీ', emoji: '🥬', category: 'Vegetable' },
    { name: 'Chili Pepper / Mirchi / మిర్చి', emoji: '🌶️', category: 'Vegetable' },
    { name: 'Cluster Beans / Goruchikkudu / గోరుచిక్కుడు', emoji: '🫘', category: 'Vegetable' },
    { name: 'Colocasia / Chamadumpa / చామదుంప', emoji: '🥔', category: 'Vegetable' },
    { name: 'Coriander Leaves / Kothimeera / కొత్తిమీర', emoji: '🌿', category: 'Vegetable' },
    { name: 'Corn / Mokka Jonna / మొక్కజొన్న', emoji: '🌽', category: 'Vegetable' },
    { name: 'Cucumber / Dosakaya / దోసకాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Curry Leaves / Karivepaku / కరివేపాకు', emoji: '🌿', category: 'Vegetable' },
    { name: 'Drumstick / Munagakaya / మునగకాయ', emoji: '🌱', category: 'Vegetable' },
    { name: 'Eggplant / Vankaya / వంకాయ', emoji: '🍆', category: 'Vegetable' },
    { name: 'Elephant Yam / Kanda Dumpa / కంద దుంప', emoji: '🥔', category: 'Vegetable' },
    { name: 'Fenugreek Leaves / Menthikura / మెంతికూర', emoji: '🥬', category: 'Vegetable' },
    { name: 'Garlic / Vellulli / వెల్లుల్లి', emoji: '🧄', category: 'Vegetable' },
    { name: 'Ginger / Allam / అల్లం', emoji: '🫚', category: 'Vegetable' },
    { name: 'Green Beans / Chikkudu / చిక్కుడు', emoji: '🫘', category: 'Vegetable' },
    { name: 'Green Chili / Pacchi Mirchi / పచ్చి మిర్చి', emoji: '🌶️', category: 'Vegetable' },
    { name: 'Ivy Gourd / Dondakaya / దొండకాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Jackfruit / Panasa Kaya / పనస కాయ', emoji: '🥭', category: 'Vegetable' },
    { name: 'Kale / Kale / కేల్', emoji: '🥬', category: 'Vegetable' },
    { name: 'Knol Khol / Nool Kol / నూల్ కోల్', emoji: '🥬', category: 'Vegetable' },
    { name: 'Lady Finger / Bendakaya / బెండకాయ', emoji: '🌱', category: 'Vegetable' },
    { name: 'Leek / Leek / లీక్', emoji: '🌱', category: 'Vegetable' },
    { name: 'Lemon / Nimmakaya / నిమ్మకాయ', emoji: '🍋', category: 'Vegetable' },
    { name: 'Lettuce / Lettuce / లెట్యూస్', emoji: '🥬', category: 'Vegetable' },
    { name: 'Mint Leaves / Pudina / పుదీనా', emoji: '🌿', category: 'Vegetable' },
    { name: 'Mushroom / Gutti Vankaya / గుట్టి వంకాయ', emoji: '🍄', category: 'Vegetable' },
    { name: 'Mustard Greens / Avalu Kura / ఆవాలు కూర', emoji: '🥬', category: 'Vegetable' },
    { name: 'Onion / Ulli / ఉల్లి', emoji: '🧅', category: 'Vegetable' },
    { name: 'Peas / Batanilu / బఠానీలు', emoji: '🫛', category: 'Vegetable' },
    { name: 'Pointed Gourd / Potala Kaya / పోతల కాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Potato / Bangaladumpa / బంగాళాదుంప', emoji: '🥔', category: 'Vegetable' },
    { name: 'Pumpkin / Gummadikaya / గుమ్మడికాయ', emoji: '🎃', category: 'Vegetable' },
    { name: 'Radish / Mullangi / ముల్లంగి', emoji: '🌱', category: 'Vegetable' },
    { name: 'Raw Banana / Arati Kaya / అరటి కాయ', emoji: '🍌', category: 'Vegetable' },
    { name: 'Red Pumpkin / Erra Gummadi / ఎర్ర గుమ్మడి', emoji: '🎃', category: 'Vegetable' },
    { name: 'Ridge Gourd / Beerakaya / బీరకాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Snake Gourd / Potlakaya / పొట్లకాయ', emoji: '🥒', category: 'Vegetable' },
    { name: 'Spinach / Palakura / పాలకూర', emoji: '🥬', category: 'Vegetable' },
    { name: 'Spring Onion / Ulli Gaddalu / ఉల్లి గడ్డలు', emoji: '🧅', category: 'Vegetable' },
    { name: 'Sweet Potato / Chilaga Dumpa / చిలగడదుంప', emoji: '🍠', category: 'Vegetable' },
    { name: 'Tamarind / Chintapandu / చింతపండు', emoji: '🌰', category: 'Vegetable' },
    { name: 'Tomato / Tomato / టమాటో', emoji: '🍅', category: 'Vegetable' },
    { name: 'Turnip / Turnip / టర్నిప్', emoji: '🌱', category: 'Vegetable' },
    { name: 'Water Chestnut / Neeti Kaya / నీటి కాయ', emoji: '🌰', category: 'Vegetable' },
    { name: 'Yam / Chilaga Dumpa / చిలగడదుంప', emoji: '🥔', category: 'Vegetable' },
    { name: 'Zucchini / Zucchini / జుకీనీ', emoji: '🥒', category: 'Vegetable' },
    
    // Fruits
    { name: 'Apple / Apple / ఆపిల్', emoji: '🍎', category: 'Fruit' },
    { name: 'Banana / Arati Pandu / అరటి పండు', emoji: '🍌', category: 'Fruit' },
    { name: 'Grapes / Draksha / ద్రాక్ష', emoji: '🍇', category: 'Fruit' },
    { name: 'Guava / Jama / జామ', emoji: '🍈', category: 'Fruit' },
    { name: 'Mango / Mamidi / మామిడి', emoji: '🥭', category: 'Fruit' },
    { name: 'Orange / Orange / ఆరంజ్', emoji: '🍊', category: 'Fruit' },
    { name: 'Papaya / Boppayi / బొప్పాయి', emoji: '🍈', category: 'Fruit' },
    { name: 'Pineapple / Ananas / అనాస', emoji: '🍍', category: 'Fruit' },
    { name: 'Pomegranate / Danimma / దానిమ్మ', emoji: '🍎', category: 'Fruit' },
    { name: 'Watermelon / Puchakaya / పుచ్చకాయ', emoji: '🍉', category: 'Fruit' },
    
    // Pulses & Lentils
    { name: 'Bengal Gram / Senaga Pappu / శెనగ పప్పు', emoji: '🫘', category: 'Pulses & Lentils' },
    { name: 'Black Gram / Minapa Pappu / మినప పప్పు', emoji: '🫘', category: 'Pulses & Lentils' },
    { name: 'Green Gram / Pesara Pappu / పెసర పప్పు', emoji: '🫘', category: 'Pulses & Lentils' },
    { name: 'Kidney Beans / Rajma / రాజ్మా', emoji: '🫘', category: 'Pulses & Lentils' },
    { name: 'Lentils / Dal / దాల్', emoji: '🫘', category: 'Pulses & Lentils' },
    { name: 'Red Gram / Kandi Pappu / కంది పప్పు', emoji: '🫘', category: 'Pulses & Lentils' },
    { name: 'Split Chickpeas / Chana Dal / చనా దాల్', emoji: '🫘', category: 'Pulses & Lentils' },
    
    // Rice & Grains
    { name: 'Basmati Rice / Basmati Biyyam / బాస్మతి బియ్యం', emoji: '🍚', category: 'Rice & Grains' },
    { name: 'Brown Rice / Brown Rice / బ్రౌన్ రైస్', emoji: '🍚', category: 'Rice & Grains' },
    { name: 'Poha / Atukulu / అటుకులు', emoji: '🍚', category: 'Rice & Grains' },
    { name: 'Rava / Bombay Rava / బొంబాయి రవ్వ', emoji: '🌾', category: 'Rice & Grains' },
    { name: 'Rice / Biyyam / బియ్యం', emoji: '🍚', category: 'Rice & Grains' },
    { name: 'Wheat / Godhumalu / గోధుమలు', emoji: '🌾', category: 'Rice & Grains' },
    
    // Flours
    { name: 'Besan / Senaga Pindi / శెనగ పిండి', emoji: '🌾', category: 'Flour' },
    { name: 'Maida / Maida / మైదా', emoji: '🌾', category: 'Flour' },
    { name: 'Rice Flour / Biyyam Pindi / బియ్యం పిండి', emoji: '🌾', category: 'Flour' },
    { name: 'Wheat Flour / Atta / ఆట్టా', emoji: '🌾', category: 'Flour' },
    
    // Spices
    { name: 'Asafoetida / Inguva / ఇంగువ', emoji: '🧂', category: 'Spice' },
    { name: 'Bay Leaf / Biryani Aaku / బిర్యానీ ఆకు', emoji: '🍃', category: 'Spice' },
    { name: 'Black Pepper / Miriyalu / మిరియాలు', emoji: '🌶️', category: 'Spice' },
    { name: 'Cardamom / Elakulu / ఏలకులు', emoji: '🧂', category: 'Spice' },
    { name: 'Cinnamon / Dalchina Chekka / దాల్చిన చెక్క', emoji: '🧂', category: 'Spice' },
    { name: 'Cloves / Lavangalu / లవంగాలు', emoji: '🧂', category: 'Spice' },
    { name: 'Coriander Powder / Dhaniyalu Podi / ధనియాలు పొడి', emoji: '🧂', category: 'Spice' },
    { name: 'Coriander Seeds / Dhaniyalu / ధనియాలు', emoji: '🌾', category: 'Spice' },
    { name: 'Cumin Seeds / Jeelakarra / జీలకర్ర', emoji: '🧂', category: 'Spice' },
    { name: 'Fenugreek Seeds / Menthulu / మెంతులు', emoji: '🌾', category: 'Spice' },
    { name: 'Garam Masala / Garam Masala / గరం మసాలా', emoji: '🧂', category: 'Spice' },
    { name: 'Mustard Seeds / Avalu / ఆవాలు', emoji: '🌾', category: 'Spice' },
    { name: 'Red Chili Powder / Karam Podi / కారం పొడి', emoji: '🌶️', category: 'Spice' },
    { name: 'Turmeric Powder / Pasupu Podi / పసుపు పొడి', emoji: '🧂', category: 'Spice' },
    
    // Cooking Essentials
    { name: 'Cooking Oil / Nune / నూనె', emoji: '🫗', category: 'Cooking Essential' },
    { name: 'Ghee / Neyyi / నెయ్యి', emoji: '🧈', category: 'Cooking Essential' },
    { name: 'Mustard Oil / Avala Nune / ఆవాల నూనె', emoji: '🫗', category: 'Cooking Essential' },
    { name: 'Olive Oil / Olive Oil / ఆలివ్ ఆయిల్', emoji: '🫗', category: 'Cooking Essential' },
    { name: 'Salt / Uppu / ఉప్పు', emoji: '🧂', category: 'Cooking Essential' },
    { name: 'Sugar / Bellam / బెల్లం', emoji: '🍬', category: 'Cooking Essential' },
    { name: 'Vinegar / Vinegar / వినిగర్', emoji: '🫗', category: 'Cooking Essential' },
    
    // Dairy Products
    { name: 'Butter / Butter / బటర్', emoji: '🧈', category: 'Dairy' },
    { name: 'Buttermilk / Majjiga / మజ్జిగ', emoji: '🥛', category: 'Dairy' },
    { name: 'Cheese / Cheese / చీజ్', emoji: '🧀', category: 'Dairy' },
    { name: 'Curd / Perugu / పెరుగు', emoji: '🥛', category: 'Dairy' },
    { name: 'Milk / Palu / పాలు', emoji: '🥛', category: 'Dairy' },
    { name: 'Paneer / Paneer / పన్నీర్', emoji: '🧀', category: 'Dairy' },
    
    // Meat & Seafood
    { name: 'Chicken / Kodi / కోడి', emoji: '🍗', category: 'Meat & Seafood' },
    { name: 'Eggs / Gudlu / గుడ్లు', emoji: '🥚', category: 'Meat & Seafood' },
    { name: 'Fish / Chepa / చేప', emoji: '🐟', category: 'Meat & Seafood' },
    { name: 'Mutton / Meka / మేక', emoji: '🍖', category: 'Meat & Seafood' },
    { name: 'Prawns / Royyalu / రొయ్యలు', emoji: '🦐', category: 'Meat & Seafood' },
    
    // Snacks & Breakfast
    { name: 'Biscuits / Biscuits / బిస్కెట్లు', emoji: '🍪', category: 'Snacks & Breakfast' },
    { name: 'Bread / Bread / బ్రెడ్', emoji: '🍞', category: 'Snacks & Breakfast' },
    { name: 'Cornflakes / Cornflakes / కార్న్‌ఫ్లేక్స్', emoji: '🥣', category: 'Snacks & Breakfast' },
    { name: 'Idli Rava / Idli Rava / ఇడ్లీ రవ్వ', emoji: '🍚', category: 'Snacks & Breakfast' },
    { name: 'Namkeen / Mixture / మిక్చర్', emoji: '🥨', category: 'Snacks & Breakfast' },
    { name: 'Oats / Oats / ఓట్స్', emoji: '🥣', category: 'Snacks & Breakfast' },
    
    // Beverages
    { name: 'Coffee / Coffee / కాఫీ', emoji: '☕', category: 'Beverage' },
    { name: 'Tea / Tea / టీ', emoji: '🍵', category: 'Beverage' },
    
    // Household Items
    { name: 'Detergent / Washing Powder / వాషింగ్ పౌడర్', emoji: '🧼', category: 'Household' },
    { name: 'Dish Soap / Dish Soap / డిష్ సోప్', emoji: '🧴', category: 'Household' },
    { name: 'Hair Oil / Hair Oil / హెయిర్ ఆయిల్', emoji: '🧴', category: 'Household' },
    { name: 'Shampoo / Shampoo / షాంపూ', emoji: '🧴', category: 'Household' },
    { name: 'Soap / Soap / సబ్బు', emoji: '🧼', category: 'Household' },
    { name: 'Toilet Paper / Toilet Paper / టాయిలెట్ పేపర్', emoji: '🧻', category: 'Household' },
    { name: 'Toothpaste / Toothpaste / టూత్‌పేస్ట్', emoji: '🪥', category: 'Household' },
    
    // Dry Fruits & Nuts
    { name: 'Almonds / Badam / బాదం', emoji: '🌰', category: 'Dry Fruits & Nuts' },
    { name: 'Cashews / Kaju / కాజు', emoji: '🥜', category: 'Dry Fruits & Nuts' },
    { name: 'Dates / Khajur / ఖజూర్', emoji: '🍇', category: 'Dry Fruits & Nuts' },
    { name: 'Peanuts / Pallilu / పల్లీలు', emoji: '🥜', category: 'Dry Fruits & Nuts' },
    { name: 'Pistachios / Pista / పిస్తా', emoji: '🌰', category: 'Dry Fruits & Nuts' },
    { name: 'Raisins / Endu Draksha / ఎండు ద్రాక్ష', emoji: '🍇', category: 'Dry Fruits & Nuts' },
    { name: 'Walnuts / Walnut / వాల్‌నట్', emoji: '🌰', category: 'Dry Fruits & Nuts' }
];

// ===== State Management =====
let currentListItems = [];
let historyLists = [];
let allItems = new Set();
let currentCharts = {}; // Store chart instances for cleanup

// ===== DOM Elements =====
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const currentListContainer = document.getElementById('currentList');
const currentDateElement = document.getElementById('currentDate');
const clearBtn = document.getElementById('clearBtn');
const listActions = document.getElementById('listActions');
const itemCount = document.getElementById('itemCount');
const suggestionsDropdown = document.getElementById('suggestions');
const historyContainer = document.getElementById('historyContainer');
const reportContent = document.getElementById('reportContent');

// ===== Initialize App =====
function initApp() {
    loadFromStorage();
    displayCurrentDate();
    renderCurrentList();
    renderHistory();
    setupEventListeners();
}

// ===== Storage Functions =====
function loadFromStorage() {
    // Load current list
    const savedCurrentList = localStorage.getItem(STORAGE_KEYS.CURRENT_LIST);
    if (savedCurrentList) {
        const parsed = JSON.parse(savedCurrentList);
        // Check if it's from today
        if (parsed.date === getTodayDate()) {
            currentListItems = parsed.items || [];
        } else {
            // Move to history if it's from a previous date
            if (parsed.items && parsed.items.length > 0) {
                saveToHistory(parsed.date, parsed.items);
            }
            currentListItems = [];
        }
    }

    // Load history
    const savedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (savedHistory) {
        historyLists = JSON.parse(savedHistory);
    }

    // Load all items for suggestions
    const savedAllItems = localStorage.getItem(STORAGE_KEYS.ALL_ITEMS);
    if (savedAllItems) {
        allItems = new Set(JSON.parse(savedAllItems));
    }
}

function saveCurrentList() {
    const data = {
        date: getTodayDate(),
        items: currentListItems
    };
    localStorage.setItem(STORAGE_KEYS.CURRENT_LIST, JSON.stringify(data));
}

function saveHistory() {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(historyLists));
}

function saveAllItems() {
    localStorage.setItem(STORAGE_KEYS.ALL_ITEMS, JSON.stringify([...allItems]));
}

function saveToHistory(date, items) {
    // Create a deep copy of items to prevent reference issues
    const itemsCopy = JSON.parse(JSON.stringify(items));
    
    // Check if date already exists in history
    const existingIndex = historyLists.findIndex(list => list.date === date);
    
    if (existingIndex !== -1) {
        // Append to existing entry instead of replacing
        historyLists[existingIndex].items = [...historyLists[existingIndex].items, ...itemsCopy];
    } else {
        // Add new entry
        historyLists.unshift({ date, items: itemsCopy });
    }
    
    // Don't limit history - keep all data for reports
    // Previously kept only 30 days, now keeping all
    
    saveHistory();
}

// ===== Date Functions =====
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const dateOnly = dateString;
    const todayOnly = today.toISOString().split('T')[0];
    const yesterdayOnly = yesterday.toISOString().split('T')[0];
    
    if (dateOnly === todayOnly) {
        return 'Today';
    } else if (dateOnly === yesterdayOnly) {
        return 'Yesterday';
    } else {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
}

function displayCurrentDate() {
    currentDateElement.textContent = formatDate(getTodayDate());
}

// ===== Item Management =====
function addItem(itemText) {
    const trimmedText = itemText.trim();
    
    if (!trimmedText) {
        showNotification('Please enter an item', 'warning');
        return;
    }
    
    // Check for duplicates in current list
    const duplicate = currentListItems.find(
        item => item.text.toLowerCase() === trimmedText.toLowerCase()
    );
    
    if (duplicate) {
        showNotification('Item already in the list', 'warning');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        text: trimmedText,
        completed: false,
        pricePerKg: 0,
        quantity: 0,
        totalPrice: 0,
        addedAt: new Date().toISOString()
    };
    
    currentListItems.push(newItem);
    allItems.add(trimmedText);
    
    saveCurrentList();
    saveAllItems();
    renderCurrentList();
    
    itemInput.value = '';
    hideSuggestions();
    
    showNotification('Item added successfully', 'success');
}

function toggleItemComplete(id) {
    const item = currentListItems.find(item => item.id === id);
    if (item) {
        item.completed = !item.completed;
        saveCurrentList();
        renderCurrentList();
    }
}

function deleteItem(id) {
    currentListItems = currentListItems.filter(item => item.id !== id);
    saveCurrentList();
    renderCurrentList();
    showNotification('Item removed', 'success');
}

function clearAllItems() {
    if (currentListItems.length === 0) {
        return;
    }
    
    if (confirm('Are you sure you want to clear all items?')) {
        // Save to history before clearing
        if (currentListItems.length > 0) {
            saveToHistory(getTodayDate(), currentListItems);
        }
        
        currentListItems = [];
        saveCurrentList();
        renderCurrentList();
        renderHistory();
        showNotification('List cleared', 'success');
    }
}

// ===== Rendering Functions =====
function renderCurrentList() {
    if (currentListItems.length === 0) {
        currentListContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📝</span>
                <p>Your shopping list is empty</p>
                <p class="empty-hint">Start adding items above</p>
            </div>
        `;
        listActions.style.display = 'none';
        return;
    }
    
    listActions.style.display = 'flex';
    itemCount.textContent = currentListItems.length;
    
    // Calculate total price
    const totalPrice = currentListItems.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
    
    currentListContainer.innerHTML = currentListItems
        .map(item => {
            const priceInfo = item.pricePerKg > 0 ? `
                <div class="item-price-info">
                    <span class="price-detail">
                        <span class="price-label">Price/Kg:</span>
                        <span class="price-value">₹${item.pricePerKg}</span>
                    </span>
                    <span class="price-detail">
                        <span class="price-label">Qty:</span>
                        <span class="price-value">${item.quantity}g</span>
                    </span>
                    <span class="price-detail item-total-price">
                        Total: ₹${item.totalPrice.toFixed(2)}
                    </span>
                </div>
            ` : '';
            
            return `
                <div class="item-card ${item.completed ? 'completed' : ''}">
                    <input 
                        type="checkbox" 
                        class="item-checkbox" 
                        ${item.completed ? 'checked' : ''}
                        onchange="toggleItemComplete(${item.id})"
                    >
                    <div class="item-info">
                        <span class="item-text">${escapeHtml(item.text)}</span>
                        ${priceInfo}
                    </div>
                    <div class="item-actions">
                        <button class="btn-icon-only" onclick="openEditModal(${item.id})" title="Edit price & quantity">
                            ✏️
                        </button>
                        <button class="btn-icon-only btn-delete" onclick="deleteItem(${item.id})" title="Delete item">
                            🗑️
                        </button>
                    </div>
                </div>
            `;
        })
        .join('');
}

function renderHistory() {
    if (historyLists.length === 0) {
        historyContainer.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📦</span>
                <p>No previous lists</p>
            </div>
        `;
        return;
    }
    
    historyContainer.innerHTML = historyLists
        .map((list, index) => {
            const listTotal = list.items.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
            const totalDisplay = listTotal > 0 ? ` • Total: ₹${listTotal.toFixed(2)}` : '';
            
            return `
                <div class="history-card">
                    <div class="history-header">
                        <span class="history-date">${formatDate(list.date)}</span>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span class="history-count">${list.items.length} items${totalDisplay}</span>
                            <button class="btn-delete-list" onclick="deleteHistoryList(${index})" title="Delete this list">
                                🗑️
                            </button>
                        </div>
                    </div>
                    <div class="history-items">
                        ${list.items.map(item => {
                            const priceDisplay = item.totalPrice > 0 
                                ? ` <span style="color: var(--primary-color); font-weight: 600;">(${item.quantity}g - ₹${item.totalPrice.toFixed(2)})</span>` 
                                : '';
                            return `
                                <div class="history-item">
                                    <span class="history-item-bullet"></span>
                                    <span class="history-item-text">${escapeHtml(item.text)}${priceDisplay}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        })
        .join('');
}

function deleteHistoryList(index) {
    if (confirm('Delete this list from history?')) {
        historyLists.splice(index, 1);
        saveHistory();
        renderHistory();
        showNotification('List deleted from history', 'success');
    }
}

// ===== Suggestion/Autocomplete Functions =====
function showSuggestions(searchText) {
    const trimmedSearch = searchText.trim().toLowerCase();
    
    if (!trimmedSearch) {
        hideSuggestions();
        return;
    }
    
    // Get matching items from predefined list (search in name including alternative names and Telugu)
    const matches = VEGETABLES.filter(item =>
        item.name.toLowerCase().includes(trimmedSearch)
    );
    
    if (matches.length === 0) {
        hideSuggestions();
        return;
    }
    
    // Sort by relevance (starts with search term first)
    matches.sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(trimmedSearch);
        const bStarts = b.name.toLowerCase().startsWith(trimmedSearch);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
    });
    
    // Limit to 8 suggestions
    const limitedMatches = matches.slice(0, 8);
    
    suggestionsDropdown.innerHTML = limitedMatches
        .map(item => `
            <div class="suggestion-item" onclick="selectSuggestion('${escapeHtml(item.name)}')">
                <span class="suggestion-icon">${item.emoji}</span>
                <span class="suggestion-text">${escapeHtml(item.name)}</span>
                <span class="suggestion-date">${item.category}</span>
            </div>
        `)
        .join('');
    
    suggestionsDropdown.classList.add('show');
}

function hideSuggestions() {
    suggestionsDropdown.classList.remove('show');
    suggestionsDropdown.innerHTML = '';
}

function selectSuggestion(itemText) {
    itemInput.value = itemText;
    hideSuggestions();
    itemInput.focus();
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Add item
    addBtn.addEventListener('click', () => {
        addItem(itemInput.value);
    });
    
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem(itemInput.value);
        }
    });
    
    // Suggestions
    itemInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-wrapper')) {
            hideSuggestions();
        }
    });
    
    // Clear all
    clearBtn.addEventListener('click', clearAllItems);
}

// ===== Dashboard Tab Switching Functions =====
function switchDashboardTab(tabName) {
    // Remove active class from all nav items and tabs
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.dashboard-tab').forEach(tab => tab.classList.remove('active'));
    
    // Add active class to selected nav item and tab
    if (tabName === 'shopping') {
        document.getElementById('navShopping').classList.add('active');
        document.getElementById('shoppingContent').classList.add('active');
    } else if (tabName === 'history') {
        document.getElementById('navHistory').classList.add('active');
        document.getElementById('historyContent').classList.add('active');
    } else if (tabName === 'reports') {
        document.getElementById('navReports').classList.add('active');
        document.getElementById('reportsContent').classList.add('active');
        // Generate monthly report by default when switching to reports tab
        showReport('monthly');
    } else if (tabName === 'settings') {
        document.getElementById('navSettings').classList.add('active');
        document.getElementById('settingsContent').classList.add('active');
        // Update stats when switching to settings tab
        updateSettingsStats();
    }
}

// ===== Settings Functions =====
function updateSettingsStats() {
    // Update current items count
    document.getElementById('statCurrentItems').textContent = currentListItems.length;
    
    // Update history lists count
    document.getElementById('statHistoryLists').textContent = historyLists.length;
    
    // Update total unique items count
    document.getElementById('statTotalItems').textContent = allItems.size;
}

// ===== Price & Quantity Modal Functions =====
function openEditModal(itemId) {
    const item = currentListItems.find(i => i.id === itemId);
    if (!item) return;
    
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="editModal" onclick="closeEditModalOnOutsideClick(event)">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Edit Price & Quantity</h3>
                    <button class="modal-close" onclick="closeEditModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Item Name</label>
                        <input type="text" class="form-input" value="${escapeHtml(item.text)}" disabled>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Price per 1000g (1 Kg) - ₹</label>
                        <input 
                            type="number" 
                            id="pricePerKg" 
                            class="form-input" 
                            value="${item.pricePerKg || ''}"
                            placeholder="Enter price per kg"
                            min="0"
                            step="0.01"
                            oninput="calculateTotalPrice()"
                        >
                        <span class="form-hint">Enter the price for 1000 grams (1 kg)</span>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Quantity (in grams)</label>
                        <input 
                            type="number" 
                            id="quantity" 
                            class="form-input" 
                            value="${item.quantity || ''}"
                            placeholder="Enter quantity in grams"
                            min="0"
                            step="1"
                            oninput="calculateTotalPrice()"
                        >
                        <span class="form-hint">Enter the quantity you're buying in grams</span>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Calculated Total Price</label>
                        <div class="calculated-value" id="calculatedPrice">₹0.00</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-cancel" onclick="closeEditModal()">Cancel</button>
                    <button class="btn btn-primary btn-edit" onclick="saveItemPrice(${itemId})">Save</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Calculate initial price
    calculateTotalPrice();
    
    // Focus on price input
    setTimeout(() => document.getElementById('pricePerKg').focus(), 100);
}

function calculateTotalPrice() {
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    
    // Calculate: (pricePerKg / 1000) * quantity
    const totalPrice = (pricePerKg / 1000) * quantity;
    
    document.getElementById('calculatedPrice').textContent = `₹${totalPrice.toFixed(2)}`;
}

function saveItemPrice(itemId) {
    const item = currentListItems.find(i => i.id === itemId);
    if (!item) return;
    
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const totalPrice = (pricePerKg / 1000) * quantity;
    
    item.pricePerKg = pricePerKg;
    item.quantity = quantity;
    item.totalPrice = totalPrice;
    
    saveCurrentList();
    renderCurrentList();
    closeEditModal();
    
    showNotification('Price updated successfully', 'success');
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    if (modal) {
        modal.remove();
    }
}

function closeEditModalOnOutsideClick(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeEditModal();
    }
}

// ===== Reports Functions =====
function showReport(type) {
    // Update active tab
    document.querySelectorAll('.report-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    if (type === 'monthly') {
        generateMonthlyReport();
    } else if (type === 'quarterly') {
        generateQuarterlyReport();
    } else if (type === 'yearly') {
        generateYearlyReport();
    }
}

function generateMonthlyReport() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    
    // Generate month options for the selector
    const months = [];
    for (let i = 0; i < 12; i++) {
        const date = new Date(currentYear, currentMonth - i, 1);
        months.push({
            value: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`,
            label: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        });
    }
    
    const selectedMonth = months[0].value;
    
    reportContent.innerHTML = `
        <div class="report-period-selector">
            <select class="period-select" id="monthSelector" onchange="updateMonthlyReport(this.value)">
                ${months.map(m => `<option value="${m.value}">${m.label}</option>`).join('')}
            </select>
        </div>
        <div id="monthlyReportData"></div>
    `;
    
    updateMonthlyReport(selectedMonth);
}

function updateMonthlyReport(yearMonth) {
    const [year, month] = yearMonth.split('-');
    const monthData = historyLists.filter(list => {
        const listDate = new Date(list.date);
        return listDate.getFullYear() === parseInt(year) && 
               listDate.getMonth() + 1 === parseInt(month);
    });
    
    const stats = calculateStats(monthData);
    
    document.getElementById('monthlyReportData').innerHTML = `
        <div class="report-summary">
            <div class="report-card">
                <div class="report-card-title">Total Shopping Trips</div>
                <div class="report-card-value">${stats.tripCount}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Total Items</div>
                <div class="report-card-value">${stats.totalItems}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Total Spent</div>
                <div class="report-card-value">₹${stats.totalSpent.toFixed(2)}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Avg. per Trip</div>
                <div class="report-card-value">₹${stats.avgPerTrip.toFixed(2)}</div>
            </div>
        </div>
        ${renderCharts(stats.itemBreakdown)}
        ${renderItemBreakdown(stats.itemBreakdown)}
    `;
    
    // Render charts after DOM is updated
    setTimeout(() => createCharts(stats.itemBreakdown), 100);
}

function generateQuarterlyReport() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentQuarter = Math.floor(now.getMonth() / 3) + 1;
    
    // Generate quarter options
    const quarters = [];
    for (let y = currentYear; y >= currentYear - 2; y--) {
        for (let q = 4; q >= 1; q--) {
            if (y === currentYear && q > currentQuarter) continue;
            quarters.push({
                value: `${y}-Q${q}`,
                label: `Q${q} ${y}`
            });
            if (quarters.length >= 8) break;
        }
        if (quarters.length >= 8) break;
    }
    
    reportContent.innerHTML = `
        <div class="report-period-selector">
            <select class="period-select" id="quarterSelector" onchange="updateQuarterlyReport(this.value)">
                ${quarters.map(q => `<option value="${q.value}">${q.label}</option>`).join('')}
            </select>
        </div>
        <div id="quarterlyReportData"></div>
    `;
    
    updateQuarterlyReport(quarters[0].value);
}

function updateQuarterlyReport(yearQuarter) {
    const [year, quarter] = yearQuarter.split('-Q');
    const quarterNum = parseInt(quarter);
    const startMonth = (quarterNum - 1) * 3;
    const endMonth = startMonth + 3;
    
    const quarterData = historyLists.filter(list => {
        const listDate = new Date(list.date);
        const listYear = listDate.getFullYear();
        const listMonth = listDate.getMonth();
        return listYear === parseInt(year) && 
               listMonth >= startMonth && 
               listMonth < endMonth;
    });
    
    const stats = calculateStats(quarterData);
    
    document.getElementById('quarterlyReportData').innerHTML = `
        <div class="report-summary">
            <div class="report-card">
                <div class="report-card-title">Total Shopping Trips</div>
                <div class="report-card-value">${stats.tripCount}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Total Items</div>
                <div class="report-card-value">${stats.totalItems}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Total Spent</div>
                <div class="report-card-value">₹${stats.totalSpent.toFixed(2)}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Avg. per Trip</div>
                <div class="report-card-value">₹${stats.avgPerTrip.toFixed(2)}</div>
            </div>
        </div>
        ${renderCharts(stats.itemBreakdown)}
        ${renderItemBreakdown(stats.itemBreakdown)}
    `;
    
    // Render charts after DOM is updated
    setTimeout(() => createCharts(stats.itemBreakdown), 100);
}

function generateYearlyReport() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Generate year options
    const years = [];
    const earliestYear = historyLists.length > 0 
        ? Math.min(...historyLists.map(l => new Date(l.date).getFullYear()))
        : currentYear;
    
    for (let y = currentYear; y >= Math.max(earliestYear, currentYear - 5); y--) {
        years.push(y);
    }
    
    reportContent.innerHTML = `
        <div class="report-period-selector">
            <select class="period-select" id="yearSelector" onchange="updateYearlyReport(this.value)">
                ${years.map(y => `<option value="${y}">${y}</option>`).join('')}
            </select>
        </div>
        <div id="yearlyReportData"></div>
    `;
    
    updateYearlyReport(currentYear);
}

function updateYearlyReport(year) {
    const yearData = historyLists.filter(list => {
        const listDate = new Date(list.date);
        return listDate.getFullYear() === parseInt(year);
    });
    
    const stats = calculateStats(yearData);
    
    document.getElementById('yearlyReportData').innerHTML = `
        <div class="report-summary">
            <div class="report-card">
                <div class="report-card-title">Total Shopping Trips</div>
                <div class="report-card-value">${stats.tripCount}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Total Items</div>
                <div class="report-card-value">${stats.totalItems}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Total Spent</div>
                <div class="report-card-value">₹${stats.totalSpent.toFixed(2)}</div>
            </div>
            <div class="report-card">
                <div class="report-card-title">Avg. per Month</div>
                <div class="report-card-value">₹${(stats.totalSpent / 12).toFixed(2)}</div>
            </div>
        </div>
        ${renderCharts(stats.itemBreakdown)}
        ${renderItemBreakdown(stats.itemBreakdown)}
    `;
    
    // Render charts after DOM is updated
    setTimeout(() => createCharts(stats.itemBreakdown), 100);
}

function calculateStats(data) {
    let totalItems = 0;
    let totalSpent = 0;
    const itemMap = {};
    
    data.forEach(list => {
        list.items.forEach(item => {
            totalItems++;
            totalSpent += item.totalPrice || 0;
            
            // Aggregate items by name
            if (!itemMap[item.text]) {
                itemMap[item.text] = {
                    name: item.text,
                    count: 0,
                    totalQty: 0,
                    totalPrice: 0
                };
            }
            itemMap[item.text].count++;
            itemMap[item.text].totalQty += item.quantity || 0;
            itemMap[item.text].totalPrice += item.totalPrice || 0;
        });
    });
    
    const itemBreakdown = Object.values(itemMap).sort((a, b) => b.totalPrice - a.totalPrice);
    
    return {
        tripCount: data.length,
        totalItems,
        totalSpent,
        avgPerTrip: data.length > 0 ? totalSpent / data.length : 0,
        itemBreakdown
    };
}

function renderCharts(items) {
    if (items.length === 0) {
        return '';
    }
    
    return `
        <div class="charts-section">
            <h3 style="margin-bottom: 15px; color: var(--dark);">Visual Analytics</h3>
            <div class="charts-grid">
                <div class="chart-container">
                    <div class="chart-title">Spending Distribution (Pie Chart)</div>
                    <div class="chart-wrapper">
                        <canvas id="pieChart"></canvas>
                    </div>
                </div>
                <div class="chart-container">
                    <div class="chart-title">Top Items by Spending (Bar Chart)</div>
                    <div class="chart-wrapper">
                        <canvas id="barChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createCharts(items) {
    // Destroy existing charts
    if (currentCharts.pie) currentCharts.pie.destroy();
    if (currentCharts.bar) currentCharts.bar.destroy();
    
    if (items.length === 0) return;
    
    // Prepare data - top 10 items for better visualization
    const topItems = items.slice(0, 10);
    const labels = topItems.map(item => {
        // Shorten long names
        const name = item.name.split('/')[0].trim();
        return name.length > 20 ? name.substring(0, 17) + '...' : name;
    });
    const prices = topItems.map(item => item.totalPrice);
    
    // Generate vibrant colors
    const colors = [
        '#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444',
        '#8b5cf6', '#14b8a6', '#f97316', '#06b6d4', '#84cc16'
    ];
    
    // Create Pie Chart
    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        currentCharts.pie = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: prices,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                family: 'Poppins',
                                size: 11
                            },
                            boxWidth: 15,
                            boxHeight: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = topItems[context.dataIndex].name;
                                const value = context.parsed;
                                const total = prices.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ₹${value.toFixed(2)} (${percentage}%)`;
                            }
                        },
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: 'Poppins',
                            size: 13
                        },
                        bodyFont: {
                            family: 'Poppins',
                            size: 12
                        },
                        padding: 12,
                        cornerRadius: 8
                    }
                }
            }
        });
    }
    
    // Create Bar Chart
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        currentCharts.bar = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Amount Spent (₹)',
                    data: prices,
                    backgroundColor: colors.map(c => c + 'dd'),
                    borderColor: colors,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const item = topItems[context.dataIndex];
                                return [
                                    `Amount: ₹${context.parsed.y.toFixed(2)}`,
                                    `Quantity: ${item.totalQty}g`,
                                    `Times bought: ${item.count}x`
                                ];
                            }
                        },
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: 'Poppins',
                            size: 13
                        },
                        bodyFont: {
                            family: 'Poppins',
                            size: 12
                        },
                        padding: 12,
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value;
                            },
                            font: {
                                family: 'Poppins',
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: 'Poppins',
                                size: 11
                            },
                            maxRotation: 45,
                            minRotation: 45
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

function renderItemBreakdown(items) {
    if (items.length === 0) {
        return '<div class="empty-state"><p>No data available for this period</p></div>';
    }
    
    return `
        <div class="report-details">
            <h3 style="margin-bottom: 15px; color: var(--dark);">Item Breakdown</h3>
            ${items.map(item => {
                const avgQty = item.count > 0 ? (item.totalQty / item.count).toFixed(0) : 0;
                return `
                    <div class="report-item">
                        <div class="report-item-name">${escapeHtml(item.name)}</div>
                        <div class="report-item-stats">
                            <span class="report-item-qty">
                                ${item.count}x × ${avgQty}g = ${item.totalQty}g total
                            </span>
                            <span class="report-item-price">₹${item.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// ===== Utility Functions =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showNotification(message, type = 'success') {
    // Simple notification - you can enhance this with a toast library
    console.log(`[${type.toUpperCase()}] ${message}`);
    
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: Poppins, sans-serif;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Backup & Restore Functions =====
function exportData() {
    try {
        // Gather all data
        const backupData = {
            version: '1.0',
            exportDate: new Date().toISOString(),
            currentList: {
                date: getTodayDate(),
                items: currentListItems
            },
            history: historyLists,
            allItems: [...allItems]
        };
        
        // Convert to JSON
        const jsonString = JSON.stringify(backupData, null, 2);
        
        // Create blob and download
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `shopping-list-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        showNotification('✅ Backup downloaded successfully!', 'success');
    } catch (error) {
        console.error('Export error:', error);
        showNotification('❌ Failed to create backup', 'error');
    }
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backupData = JSON.parse(e.target.result);
            
            // Validate backup data
            if (!backupData.version || !backupData.currentList || !backupData.history) {
                throw new Error('Invalid backup file format');
            }
            
            // Confirm before restoring
            const confirmMsg = `This will replace all your current data with the backup from ${new Date(backupData.exportDate).toLocaleDateString()}.\n\nContinue?`;
            if (!confirm(confirmMsg)) {
                event.target.value = ''; // Reset file input
                return;
            }
            
            // Restore data
            currentListItems = backupData.currentList.items || [];
            historyLists = backupData.history || [];
            allItems = new Set(backupData.allItems || []);
            
            // Save to localStorage
            saveCurrentList();
            saveHistory();
            saveAllItems();
            
            // Refresh UI
            renderCurrentList();
            renderHistory();
            
            showNotification('✅ Data restored successfully!', 'success');
            
            // Reset file input
            event.target.value = '';
        } catch (error) {
            console.error('Import error:', error);
            showNotification('❌ Failed to restore backup. Invalid file format.', 'error');
            event.target.value = '';
        }
    };
    reader.readAsText(file);
}

// Add CSS animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', initApp);

