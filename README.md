```markdown
## Utilities

### `Calculator.js`

This module provides various mathematical calculation utilities.

#### `calculateDiscount(price, discountPercent)`

Calculates the final price after applying a specified percentage discount.

-   **`price`** (`number`): The original price before any discount.
-   **`discountPercent`** (`number`): The percentage of the discount to apply (e.g., `10` for a 10% discount).

**Returns:** (`number`) The final price after the discount has been applied.

**Example:**

```javascript
import { calculateDiscount } from './Calculator.js';

const itemPrice = 200;
const holidayDiscount = 25; // 25% discount

const finalPrice = calculateDiscount(itemPrice, holidayDiscount);
console.log(`Original Price: $${itemPrice}, Discounted Price: $${finalPrice}`);
// Expected output: Original Price: $200, Discounted Price: $150
```
```