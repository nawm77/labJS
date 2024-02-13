function renderInfoByTemplate(city, population, area) {
    return `Town ${city} has population of ${population} and area ${area} square km.`
}

console.log(renderInfoByTemplate("Moscow", 122312312, 2561))