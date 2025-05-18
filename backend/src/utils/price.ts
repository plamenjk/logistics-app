// backend/src/utils/price.ts
/**
 * Изчислява цената за доставка
 @param weightKg Тегло в килограми
 @param deliveryType 'to_office' | 'to_address'
 @returns цена в левове (две десетични)
 */
export function calculatePrice(
    weightKg: number,
    deliveryType: 'to_office' | 'to_address'
  ): number {
    const baseRatePerKg = 2.0;
    const officeDiscount = 0.8; // 20% off for office delivery
    let price = weightKg * baseRatePerKg;
    if (deliveryType === 'to_office') {
      price *= officeDiscount;
    }
    return parseFloat(price.toFixed(2));
  }
  