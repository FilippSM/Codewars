/* DESCRIPTION */
/* Switzerland has four official languages: German, French, Italian, and Romansh.1
When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4
When all three are native speakers of the same language, it also becomes their group's language.5a
When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b
When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c
The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6
Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8
Examples:9
The language for a group of three native French speakers is French: FFF → F
A group of two native Italian speakers and a Romansh speaker converses in Romansh: IIK → K
When three people meet whose native languages are German, French, and Romansh, the group language is Italian: DFK → I */

/* SOLUTION */
function trilingualDemocracy(str) {

    if (str[0] === str[1] && str[1] === str[2]) {
        return str[0];
    }
    if (str[0] !== str[1] && str[1] !== str[2] && str[0] !== str[2]) {
        if (str.indexOf('D') < 0) {
            return 'D';
        } else if (str.indexOf('F') < 0) {
            return 'F';
        } else if (str.indexOf('I') < 0) {
            return 'I';
        } else if (str.indexOf('K') < 0) {
            return 'K';
        }
    }
    else {
        const charCount = {};

        // Считаем количество вхождений каждого символа
        for (const char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Ищем символы, которые встречаются ровно один раз
        for (const char in charCount) {
            if (charCount[char] === 1) {
                return char; // Возвращаем первый уникальный символ
            }
        }

        return null; // Если нет уникальных символов
    }

}

console.log(trilingualDemocracy('KDK'));
console.log(trilingualDemocracy('FIK'));
console.log(trilingualDemocracy('FFK'));
console.log(trilingualDemocracy('KFF'));
console.log(trilingualDemocracy('III'));