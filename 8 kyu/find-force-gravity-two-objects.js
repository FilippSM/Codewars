/* DESCRIPTION
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution */

// SOLUTION
solution = (arr_val, arr_unit) => {

    let valueM1 = getValueM(arr_val[0], arr_unit[0]);
    let valueM2 = getValueM(arr_val[1], arr_unit[1]);
    let valueR = getValueR(arr_val[2], arr_unit[2]);


    function getValueM(value, unit) {
        switch (unit) {
            case "kg":
                return value;
            case "g":
                return value / 1000;
            case "mg":
                return value / 1000000;
            case "μg":
                return value / 1000000000;
            case "lb":
                return value * 0.453592;
            default:
                return "Error";
        };
    };

    function getValueR(value, unit) {
        switch (unit) {
            case "m":
                return value;
            case "cm":
                return value / 100;
            case "mm":
                return value / 1000;
            case "μm":
                return value / 1000000;
            case "ft":
                return value * 0.3048;
            default:
                return "Error";
        };
    };

    const F = 6.67 * Math.pow(10, -11) * ((valueM1 * valueM2) / Math.pow(valueR, 2));
    return F;
};

console.log('solution: ', solution([1000, 1000, 100], ["g", "kg", "m"]));
console.log('solution: ', solution([1000, 1000, 100], ["kg", "kg", "m"]));
console.log('solution: ', solution([1000, 1000, 100], ["kg", "kg", "cm"]));