// ENUMS

// variant 1

enum Membership {
    Simple,
    Standard,
    Premium,
}

const membership = Membership.Standard;
//reverse enum
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'vk',
    FB = 'FACEBOOK',
    INST = 'INSTAGRAM',
}

const social = SocialMedia.INST;
console.log(social);

