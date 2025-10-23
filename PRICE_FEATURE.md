# 💰 Price & Quantity Tracking Feature

## Overview
The shopping list application now includes a comprehensive price tracking system that allows you to track the cost of your groceries based on price per kilogram and quantity purchased.

## How It Works

### 1. **Adding Items with Price**
When you add a new item to your list, a modal automatically opens asking for:
- **Price per 1000g (1 Kg)**: Enter the price for 1 kilogram in rupees (₹)
- **Quantity (in grams)**: Enter how many grams you're buying

### 2. **Automatic Calculation**
The system automatically calculates the total price using the formula:
```
Total Price = (Price per Kg ÷ 1000) × Quantity in grams
```

**Example:**
- **Item**: Tomato / Tamatar / టమాటో
- **Price per Kg**: ₹100
- **Quantity**: 500 grams
- **Calculated Total**: ₹50.00

### 3. **Features**

#### Item Display
Each item in your list shows:
- Item name (with alternative names and Telugu)
- Price per Kg
- Quantity in grams
- Calculated total price for that item

#### List Total
At the bottom of your shopping list:
- Total number of items
- **Grand Total Price** summing all items

#### Edit Functionality
- Click the ✏️ (edit) icon on any item
- Update price or quantity
- See real-time calculation as you type
- Changes are saved instantly

#### History
Previous lists now show:
- Each item with its quantity and price
- Total cost for that shopping trip
- Helps track spending patterns over time

## User Interface

### Modal Dialog
When adding/editing prices:
```
┌─────────────────────────────────────┐
│  Edit Price & Quantity          ×   │
├─────────────────────────────────────┤
│  Item Name: Tomato / Tamatar        │
│                                     │
│  Price per 1000g (1 Kg) - ₹        │
│  [100.00]                           │
│  Enter the price for 1000 grams     │
│                                     │
│  Quantity (in grams)                │
│  [500]                              │
│  Enter the quantity you're buying   │
│                                     │
│  Calculated Total Price             │
│  ₹50.00                             │
│                                     │
│  [Cancel]  [Save]                   │
└─────────────────────────────────────┘
```

### Item Card Display
```
☐ Tomato / Tamatar / టమాటో          ✏️  🗑️
  Price/Kg: ₹100  Qty: 500g  Total: ₹50.00
```

### List Summary
```
[Clear All]          2 items   Total: ₹150.00
```

## Technical Details

### Data Structure
Each item now includes:
```javascript
{
    id: 1234567890,
    text: "Tomato / Tamatar / టమాటో",
    completed: false,
    pricePerKg: 100,        // Price for 1000g
    quantity: 500,          // Quantity in grams
    totalPrice: 50,         // Calculated total
    addedAt: "2025-10-22T..."
}
```

### Storage
- All price data is saved in local storage
- Persists across browser sessions
- Included in history lists for tracking

### Calculation Logic
```javascript
// Formula
totalPrice = (pricePerKg / 1000) * quantity

// Example
totalPrice = (100 / 1000) * 500
totalPrice = 0.1 * 500
totalPrice = 50
```

## Benefits

1. **Budget Tracking**: Know exactly how much you're spending
2. **Price Comparison**: Compare prices across different shopping trips
3. **Accurate Estimation**: Calculate costs before checkout
4. **Historical Data**: Review past purchases and spending
5. **Flexible Quantities**: Buy any amount, not just full kilograms
6. **Real-time Updates**: See calculations instantly as you type

## Usage Scenarios

### Scenario 1: Buying Vegetables
- Add "Potato / Aloo / బంగాళాదుంప"
- Price: ₹40/Kg
- Buying: 1500g (1.5 Kg)
- Total: ₹60.00

### Scenario 2: Multiple Items
- Tomatoes: 500g @ ₹100/Kg = ₹50
- Onions: 750g @ ₹60/Kg = ₹45
- Potatoes: 2000g @ ₹40/Kg = ₹80
- **Grand Total: ₹175.00**

### Scenario 3: Price Comparison
- **Today**: Tomatoes @ ₹100/Kg
- **Last Week** (from history): Tomatoes @ ₹90/Kg
- Track price changes over time!

## Future Enhancements

Potential additions to the price feature:
- Price alerts for expensive items
- Budget limits with warnings
- Price history charts
- Average price calculations
- Export price reports
- Multiple stores price comparison
- Discount calculations
- Tax calculations

---

**Note**: All prices are in Indian Rupees (₹) and quantities in grams for maximum flexibility and accuracy.

