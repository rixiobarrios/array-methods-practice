// ARRAY METHODS HW

// Welcome to Season 65 of the Bachelor! Our Bachelor, Kolton, needs your help remembering his beautiful contestants.
// You have received an array of objects representing data about the women competing for Kolton's heart. Follow
// the prompts to jog Kolton's memory using array methods.

var list1 = [
    {
        firstName: 'Katie',
        lastInitial: 'M.',
        city: 'Los Angeles',
        state: 'CA',
        age: 24,
        zodiacSign: 'Aries',
        signUpDate: 2011
    },
    {
        firstName: 'Lauren',
        lastInitial: 'K.',
        city: 'Philadelphia',
        state: 'PA',
        age: 26,
        zodiacSign: 'Gemini',
        signUpDate: 1994
    },
    {
        firstName: 'Sara',
        lastInitial: 'T.',
        city: 'Encinitas',
        state: 'CA',
        age: 28,
        zodiacSign: 'Scorpio',
        signUpDate: 2012
    },
    {
        firstName: 'Yasmein',
        lastInitial: 'A.',
        city: 'Santa Barbara',
        state: 'CA',
        age: 25,
        zodiacSign: 'Aries',
        signUpDate: 2001
    },
    {
        firstName: 'Danielle',
        lastInitial: 'R.',
        city: 'Boston',
        state: 'MA',
        age: 25,
        zodiacSign: 'Aries',
        signUpDate: 2008
    },
    {
        firstName: 'Marybeth',
        lastInitial: 'M.',
        city: 'New York',
        state: 'NY',
        age: 29,
        zodiacSign: 'Aquarius',
        signUpDate: 1999
    },
    {
        firstName: 'Jillian',
        lastInitial: 'L.',
        city: 'Grand Rapids',
        state: 'MI',
        age: 27,
        zodiacSign: 'Libra',
        signUpDate: 2000
    },
    {
        firstName: 'Krissy',
        lastInitial: 'M.',
        city: 'Raleigh',
        state: 'NC',
        age: 28,
        zodiacSign: 'Pisces',
        signUpDate: 2019
    }
];

// Prompt 1

// Kolton is from California and wants to know how many contestants are from his home state. Return the number of contestants
// from California.

// let obj = list1.filter(o => o.state === 'CA');
var obj1 = list1.filter(function(o) {
    return o.state === 'CA';
});

console.log(obj1);

// Prompt 2

// Kolton recently read in his horoscope that he is likely to match with an Aries. Return the number of contestants
// from California who are also an Aries.

var obj2 = list1.filter(function(z) {
    return z.zodiacSign === 'Aries' && z.state === 'CA';
});

console.log(obj2);

// Prompt 3

// Help Kolton out! The show has begun, and he needs to start a coversation with the contestants. Return an array
// where each object will have a new property 'icebreaker' with the following string value:

// Hi < firstName here >, what do you like the most about < city here >?
var icebreaker = list1.map(person => {
    return {
        icebreaker: `Hi ${person.firstName}, what do you like the most about ${person.city}?`,
        ...person
    };
});
console.log('icebreaker ===', icebreaker);

// Prompt 4

// Kolton is nervous that an old flame from Michigan has made it onto his season. Return:

// true if at least one contestant is from MI; or
// false if there will be no contestants from MI.

var obj3 = list1.some(function(c) {
    return c.state === 'MI';
});

console.log(obj3);

// Prompt 5

// Aries is of the most assertive astrological signs. Let's find out which Aries contestant signed up first,
// if there are any. Return one of the following strings:

// 'Hi, my name is < firstName here > < lastInitial here > from < city here >, and I was the first to sign up!'; or
// 'There will be no Aries contestants this season.' if there are no Aries contestants.

// var obj4 = list1.includes(singUpDate, 2001) {

// }
// var obj4 = list1.values().includes(2001);

// console.log(list1.includes('singUpDate', singUpdate));

// BONUS

// Kolton wants to know the breakdown of each astrological sign. Return an object which includes the count of each sign
// represented by the pool of contestants.

// Example: { Aries: 4, Libra: 1, Pisces: 1 }
var contestants = { Aries: 0, Libra: 0, Pisces: 0 };

list1.forEach(women => {
    if (women.zodiacSign === 'Aries') {
        contestants.Aries += 1;
    }
    if (women.zodiacSign === 'Libra') {
        contestants.Libra += 1;
    }
    if (women.zodiacSign === 'Pisces') {
        contestants.Pisces += 1;
    }
});
console.log('contestants', contestants);
