function countCategories(categories) {
  
    const categoryCounts = categories.reduce((acc, category) => {
      if (acc[category]) {
        acc[category] += 1
      } else {
        acc[category] = 1
      }
      return acc
    }, {})
  
   
    const sortedCategoryCounts = Object.entries(categoryCounts)
      .sort((a, b) => b[1] - a[1])  
      .reduce((acc, [category, count]) => {
        acc[category] = count
        return acc
      }, {})
  
    return sortedCategoryCounts
  }
  
  const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
  console.log(countCategories(categories))