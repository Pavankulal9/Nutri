export function calculateTotal(selectedItem) {
    // Initialize totals
    let carbohydrates_total_g = 0;
    let cholesterol_mg = 0;
    let fat_saturated_g = 0;
    let fat_total_g = 0;
    let fiber_g = 0;
    let protein_g = 0;
    let sodium_mg = 0;
    let sugar_g = 0;
  
    // Iterate through each item in the array
    selectedItem.forEach(item => {
     carbohydrates_total_g += item.carbohydrates_total_g || 0;
      cholesterol_mg += item.cholesterol_mg || 0;
      fat_saturated_g += item.fat_saturated_g || 0;
      fat_total_g += item.fat_total_g || 0;
      fiber_g += item.fiber_g || 0;
      protein_g += item.protein_g || 0;
      sodium_mg += item.sodium_mg || 0;
      sugar_g += item.sugar_g || 0;
    });
  
    // Return an object containing the calculated totals
    return {
      carbohydrates_total_g,
      cholesterol_mg,
      fat_saturated_g,
      fat_total_g,
      fiber_g,
      protein_g,
      sodium_mg,
      sugar_g
    };
  }

