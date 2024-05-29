export enum EEmojiCategory {
    SmileysAndEmotion = "Smileys & Emotion",
    PeopleAndBody = "People & Body",
    AnimalsAndNature = "Animals & Nature",
    FoodAndDrink = "Food & Drink",
    TravelAndPlaces = "Travel & Places",
    Activities = "Activities",
    Objects = "Objects",
    Symbols = "Symbols",
    Flags = "Flags"
}

export type TEmojiCategory = {
    name: string;
    emojis: Array <{
        name: string;
        emoji: string;
        search: string;
        skin_tones?: boolean;
    }>;
};

export const emojiCategories: Record<EEmojiCategory, TEmojiCategory> = {
    [EEmojiCategory.SmileysAndEmotion]: {
        "name": "Smileys & Emotion",
        "emojis": [
            {
                "name": "grinning face",
                "emoji": "😀",
                "search": "grinning face smile happy"
            },
            {
                "name": "grinning face with big eyes",
                "emoji": "😃",
                "search": "grinning face with big eyes happy joy haha smiley"
            },
            {
                "name": "grinning face with smiling eyes",
                "emoji": "😄",
                "search": "grinning face with smiling eyes happy joy laugh pleased smile"
            },
            {
                "name": "beaming face with smiling eyes",
                "emoji": "😁",
                "search": "beaming face with smiling eyes grin"
            },
            {
                "name": "grinning squinting face",
                "emoji": "😆",
                "search": "grinning squinting face happy haha laughing satisfied"
            },
            {
                "name": "grinning face with sweat",
                "emoji": "😅",
                "search": "grinning face with sweat hot smile"
            },
            {
                "name": "rolling on the floor laughing",
                "emoji": "🤣",
                "search": "rolling on the floor laughing lol rofl"
            },
            {
                "name": "face with tears of joy",
                "emoji": "😂",
                "search": "face with tears of joy"
            },
            {
                "name": "slightly smiling face",
                "emoji": "🙂",
                "search": "slightly smiling face"
            },
            {
                "name": "upside-down face",
                "emoji": "🙃",
                "search": "upside-down face upside down"
            },
            {
                "name": "melting face",
                "emoji": "🫠",
                "search": "melting face sarcasm dread"
            },
            {
                "name": "winking face",
                "emoji": "😉",
                "search": "winking face flirt wink"
            },
            {
                "name": "smiling face with smiling eyes",
                "emoji": "😊",
                "search": "smiling face with eyes proud blush"
            },
            {
                "name": "smiling face with halo",
                "emoji": "😇",
                "search": "smiling face with halo angel innocent"
            },
            {
                "name": "smiling face with hearts",
                "emoji": "🥰",
                "search": "smiling face with hearts love three"
            },
            {
                "name": "smiling face with heart-eyes",
                "emoji": "😍",
                "search": "smiling face with heart-eyes love crush heart eyes"
            },
            {
                "name": "star-struck",
                "emoji": "🤩",
                "search": "star-struck eyes star struck"
            },
            {
                "name": "face blowing a kiss",
                "emoji": "😘",
                "search": "face blowing a kiss flirt kissing heart"
            },
            {
                "name": "kissing face",
                "emoji": "😗",
                "search": "kissing face"
            },
            {
                "name": "smiling face",
                "emoji": "☺️",
                "search": "smiling face blush pleased relaxed"
            },
            {
                "name": "kissing face with closed eyes",
                "emoji": "😚",
                "search": "kissing face with closed eyes"
            },
            {
                "name": "kissing face with smiling eyes",
                "emoji": "😙",
                "search": "kissing face with smiling eyes"
            },
            {
                "name": "smiling face with tear",
                "emoji": "🥲",
                "search": "smiling face with tear"
            },
            {
                "name": "face savoring food",
                "emoji": "😋",
                "search": "face savoring food tongue lick yum"
            },
            {
                "name": "face with tongue",
                "emoji": "😛",
                "search": "face with tongue stuck out"
            },
            {
                "name": "winking face with tongue",
                "emoji": "😜",
                "search": "winking face with tongue prank silly stuck out eye"
            },
            {
                "name": "zany face",
                "emoji": "🤪",
                "search": "zany face goofy wacky"
            },
            {
                "name": "squinting face with tongue",
                "emoji": "😝",
                "search": "squinting face with tongue prank stuck out closed eyes"
            },
            {
                "name": "money-mouth face",
                "emoji": "🤑",
                "search": "money-mouth face rich money mouth"
            },
            {
                "name": "smiling face with open hands",
                "emoji": "🤗",
                "search": "smiling face with open hands hugs"
            },
            {
                "name": "face with hand over mouth",
                "emoji": "🤭",
                "search": "face with hand over mouth quiet whoops"
            },
            {
                "name": "face with open eyes and hand over mouth",
                "emoji": "🫢",
                "search": "face with open eyes and hand over mouth gasp shock"
            },
            {
                "name": "face with peeking eye",
                "emoji": "🫣",
                "search": "face with peeking eye"
            },
            {
                "name": "shushing face",
                "emoji": "🤫",
                "search": "shushing face silence quiet"
            },
            {
                "name": "thinking face",
                "emoji": "🤔",
                "search": "thinking face"
            },
            {
                "name": "saluting face",
                "emoji": "🫡",
                "search": "saluting face respect"
            },
            {
                "name": "zipper-mouth face",
                "emoji": "🤐",
                "search": "zipper-mouth face silence hush zipper mouth"
            },
            {
                "name": "face with raised eyebrow",
                "emoji": "🤨",
                "search": "face with raised eyebrow suspicious"
            },
            {
                "name": "neutral face",
                "emoji": "😐",
                "search": "neutral face meh"
            },
            {
                "name": "expressionless face",
                "emoji": "😑",
                "search": "expressionless face"
            },
            {
                "name": "face without mouth",
                "emoji": "😶",
                "search": "face without mouth mute silence no"
            },
            {
                "name": "dotted line face",
                "emoji": "🫥",
                "search": "dotted line face invisible"
            },
            {
                "name": "face in clouds",
                "emoji": "😶‍🌫️",
                "search": "face in clouds"
            },
            {
                "name": "smirking face",
                "emoji": "😏",
                "search": "smirking face smug smirk"
            },
            {
                "name": "unamused face",
                "emoji": "😒",
                "search": "unamused face meh"
            },
            {
                "name": "face with rolling eyes",
                "emoji": "🙄",
                "search": "face with rolling eyes roll"
            },
            {
                "name": "grimacing face",
                "emoji": "😬",
                "search": "grimacing face"
            },
            {
                "name": "face exhaling",
                "emoji": "😮‍💨",
                "search": "face exhaling"
            },
            {
                "name": "lying face",
                "emoji": "🤥",
                "search": "lying face liar"
            },
            {
                "name": "shaking face",
                "emoji": "🫨",
                "search": "shaking face shock"
            },
            {
                "name": "relieved face",
                "emoji": "😌",
                "search": "relieved face whew"
            },
            {
                "name": "pensive face",
                "emoji": "😔",
                "search": "pensive face"
            },
            {
                "name": "sleepy face",
                "emoji": "😪",
                "search": "sleepy face tired"
            },
            {
                "name": "drooling face",
                "emoji": "🤤",
                "search": "drooling face"
            },
            {
                "name": "sleeping face",
                "emoji": "😴",
                "search": "sleeping face zzz"
            },
            {
                "name": "face with medical mask",
                "emoji": "😷",
                "search": "face with medical mask sick ill"
            },
            {
                "name": "face with thermometer",
                "emoji": "🤒",
                "search": "face with thermometer sick"
            },
            {
                "name": "face with head-bandage",
                "emoji": "🤕",
                "search": "face with head-bandage hurt head bandage"
            },
            {
                "name": "nauseated face",
                "emoji": "🤢",
                "search": "nauseated face sick barf disgusted"
            },
            {
                "name": "face vomiting",
                "emoji": "🤮",
                "search": "face vomiting barf sick"
            },
            {
                "name": "sneezing face",
                "emoji": "🤧",
                "search": "sneezing face achoo sick"
            },
            {
                "name": "hot face",
                "emoji": "🥵",
                "search": "hot face heat sweating"
            },
            {
                "name": "cold face",
                "emoji": "🥶",
                "search": "cold face freezing ice"
            },
            {
                "name": "woozy face",
                "emoji": "🥴",
                "search": "woozy face groggy"
            },
            {
                "name": "face with crossed-out eyes",
                "emoji": "😵",
                "search": "face with crossed-out eyes dizzy"
            },
            {
                "name": "face with spiral eyes",
                "emoji": "😵‍💫",
                "search": "face with spiral eyes"
            },
            {
                "name": "exploding head",
                "emoji": "🤯",
                "search": "exploding head mind blown"
            },
            {
                "name": "cowboy hat face",
                "emoji": "🤠",
                "search": "cowboy hat face"
            },
            {
                "name": "partying face",
                "emoji": "🥳",
                "search": "partying face celebration birthday"
            },
            {
                "name": "disguised face",
                "emoji": "🥸",
                "search": "disguised face"
            },
            {
                "name": "smiling face with sunglasses",
                "emoji": "😎",
                "search": "smiling face with sunglasses cool"
            },
            {
                "name": "nerd face",
                "emoji": "🤓",
                "search": "nerd face geek glasses"
            },
            {
                "name": "face with monocle",
                "emoji": "🧐",
                "search": "face with monocle"
            },
            {
                "name": "confused face",
                "emoji": "😕",
                "search": "confused face"
            },
            {
                "name": "face with diagonal mouth",
                "emoji": "🫤",
                "search": "face with diagonal mouth confused"
            },
            {
                "name": "worried face",
                "emoji": "😟",
                "search": "worried face nervous"
            },
            {
                "name": "slightly frowning face",
                "emoji": "🙁",
                "search": "slightly frowning face"
            },
            {
                "name": "frowning face",
                "emoji": "☹️",
                "search": "frowning face"
            },
            {
                "name": "face with open mouth",
                "emoji": "😮",
                "search": "face with open mouth surprise impressed wow"
            },
            {
                "name": "hushed face",
                "emoji": "😯",
                "search": "hushed face silence speechless"
            },
            {
                "name": "astonished face",
                "emoji": "😲",
                "search": "astonished face amazed gasp"
            },
            {
                "name": "flushed face",
                "emoji": "😳",
                "search": "flushed face"
            },
            {
                "name": "pleading face",
                "emoji": "🥺",
                "search": "pleading face puppy eyes"
            },
            {
                "name": "face holding back tears",
                "emoji": "🥹",
                "search": "face holding back tears gratitude"
            },
            {
                "name": "frowning face with open mouth",
                "emoji": "😦",
                "search": "frowning face with open mouth"
            },
            {
                "name": "anguished face",
                "emoji": "😧",
                "search": "anguished face stunned"
            },
            {
                "name": "fearful face",
                "emoji": "😨",
                "search": "fearful face scared shocked oops"
            },
            {
                "name": "anxious face with sweat",
                "emoji": "😰",
                "search": "anxious face with sweat nervous cold"
            },
            {
                "name": "sad but relieved face",
                "emoji": "😥",
                "search": "sad but relieved face phew sweat nervous disappointed"
            },
            {
                "name": "crying face",
                "emoji": "😢",
                "search": "crying face sad tear cry"
            },
            {
                "name": "loudly crying face",
                "emoji": "😭",
                "search": "loudly crying face sad cry bawling sob"
            },
            {
                "name": "face screaming in fear",
                "emoji": "😱",
                "search": "face screaming in fear horror shocked scream"
            },
            {
                "name": "confounded face",
                "emoji": "😖",
                "search": "confounded face"
            },
            {
                "name": "persevering face",
                "emoji": "😣",
                "search": "persevering face struggling persevere"
            },
            {
                "name": "disappointed face",
                "emoji": "😞",
                "search": "disappointed face sad"
            },
            {
                "name": "downcast face with sweat",
                "emoji": "😓",
                "search": "downcast face with sweat"
            },
            {
                "name": "weary face",
                "emoji": "😩",
                "search": "weary face tired"
            },
            {
                "name": "tired face",
                "emoji": "😫",
                "search": "tired face upset whine"
            },
            {
                "name": "yawning face",
                "emoji": "🥱",
                "search": "yawning face"
            },
            {
                "name": "face with steam from nose",
                "emoji": "😤",
                "search": "face with steam from nose smug triumph"
            },
            {
                "name": "enraged face",
                "emoji": "😡",
                "search": "enraged face angry rage pout"
            },
            {
                "name": "angry face",
                "emoji": "😠",
                "search": "angry face mad annoyed"
            },
            {
                "name": "face with symbols on mouth",
                "emoji": "🤬",
                "search": "face with symbols on mouth foul cursing"
            },
            {
                "name": "smiling face with horns",
                "emoji": "😈",
                "search": "smiling face with horns devil evil imp"
            },
            {
                "name": "angry face with horns",
                "emoji": "👿",
                "search": "angry face with horns devil evil imp"
            },
            {
                "name": "skull",
                "emoji": "💀",
                "search": "skull dead danger poison"
            },
            {
                "name": "skull and crossbones",
                "emoji": "☠️",
                "search": "skull and crossbones danger pirate"
            },
            {
                "name": "pile of poo",
                "emoji": "💩",
                "search": "pile of poo crap hankey poop shit"
            },
            {
                "name": "clown face",
                "emoji": "🤡",
                "search": "clown face"
            },
            {
                "name": "ogre",
                "emoji": "👹",
                "search": "ogre monster japanese"
            },
            {
                "name": "goblin",
                "emoji": "👺",
                "search": "goblin japanese"
            },
            {
                "name": "ghost",
                "emoji": "👻",
                "search": "ghost halloween"
            },
            {
                "name": "alien",
                "emoji": "👽",
                "search": "alien ufo"
            },
            {
                "name": "alien monster",
                "emoji": "👾",
                "search": "alien monster game retro space invader"
            },
            {
                "name": "robot",
                "emoji": "🤖",
                "search": "robot"
            },
            {
                "name": "grinning cat",
                "emoji": "😺",
                "search": "grinning cat smiley"
            },
            {
                "name": "grinning cat with smiling eyes",
                "emoji": "😸",
                "search": "grinning cat with smiling eyes smile"
            },
            {
                "name": "cat with tears of joy",
                "emoji": "😹",
                "search": "cat with tears of joy"
            },
            {
                "name": "smiling cat with heart-eyes",
                "emoji": "😻",
                "search": "smiling cat with heart-eyes heart eyes"
            },
            {
                "name": "cat with wry smile",
                "emoji": "😼",
                "search": "cat with wry smile smirk"
            },
            {
                "name": "kissing cat",
                "emoji": "😽",
                "search": "kissing cat"
            },
            {
                "name": "weary cat",
                "emoji": "🙀",
                "search": "weary cat horror scream"
            },
            {
                "name": "crying cat",
                "emoji": "😿",
                "search": "crying cat sad tear face"
            },
            {
                "name": "pouting cat",
                "emoji": "😾",
                "search": "pouting cat"
            },
            {
                "name": "see-no-evil monkey",
                "emoji": "🙈",
                "search": "see-no-evil monkey blind ignore see no evil"
            },
            {
                "name": "hear-no-evil monkey",
                "emoji": "🙉",
                "search": "hear-no-evil monkey deaf hear no evil"
            },
            {
                "name": "speak-no-evil monkey",
                "emoji": "🙊",
                "search": "speak-no-evil monkey mute hush speak no evil"
            },
            {
                "name": "love letter",
                "emoji": "💌",
                "search": "love letter email envelope"
            },
            {
                "name": "heart with arrow",
                "emoji": "💘",
                "search": "heart with arrow love cupid"
            },
            {
                "name": "heart with ribbon",
                "emoji": "💝",
                "search": "heart with ribbon chocolates gift"
            },
            {
                "name": "sparkling heart",
                "emoji": "💖",
                "search": "sparkling heart"
            },
            {
                "name": "growing heart",
                "emoji": "💗",
                "search": "growing heart heartpulse"
            },
            {
                "name": "beating heart",
                "emoji": "💓",
                "search": "beating heart heartbeat"
            },
            {
                "name": "revolving hearts",
                "emoji": "💞",
                "search": "revolving hearts"
            },
            {
                "name": "two hearts",
                "emoji": "💕",
                "search": "two hearts"
            },
            {
                "name": "heart decoration",
                "emoji": "💟",
                "search": "heart decoration"
            },
            {
                "name": "heart exclamation",
                "emoji": "❣️",
                "search": "heart exclamation heavy"
            },
            {
                "name": "broken heart",
                "emoji": "💔",
                "search": "broken heart"
            },
            {
                "name": "heart on fire",
                "emoji": "❤️‍🔥",
                "search": "heart on fire"
            },
            {
                "name": "mending heart",
                "emoji": "❤️‍🩹",
                "search": "mending heart"
            },
            {
                "name": "red heart",
                "emoji": "❤️",
                "search": "red heart love"
            },
            {
                "name": "pink heart",
                "emoji": "🩷",
                "search": "pink heart"
            },
            {
                "name": "orange heart",
                "emoji": "🧡",
                "search": "orange heart"
            },
            {
                "name": "yellow heart",
                "emoji": "💛",
                "search": "yellow heart"
            },
            {
                "name": "green heart",
                "emoji": "💚",
                "search": "green heart"
            },
            {
                "name": "blue heart",
                "emoji": "💙",
                "search": "blue heart"
            },
            {
                "name": "light blue heart",
                "emoji": "🩵",
                "search": "light blue heart"
            },
            {
                "name": "purple heart",
                "emoji": "💜",
                "search": "purple heart"
            },
            {
                "name": "brown heart",
                "emoji": "🤎",
                "search": "brown heart"
            },
            {
                "name": "black heart",
                "emoji": "🖤",
                "search": "black heart"
            },
            {
                "name": "grey heart",
                "emoji": "🩶",
                "search": "grey heart"
            },
            {
                "name": "white heart",
                "emoji": "🤍",
                "search": "white heart"
            },
            {
                "name": "kiss mark",
                "emoji": "💋",
                "search": "kiss mark lipstick"
            },
            {
                "name": "hundred points",
                "emoji": "💯",
                "search": "hundred points score perfect 100"
            },
            {
                "name": "anger symbol",
                "emoji": "💢",
                "search": "anger symbol angry"
            },
            {
                "name": "collision",
                "emoji": "💥",
                "search": "collision explode boom"
            },
            {
                "name": "dizzy",
                "emoji": "💫",
                "search": "dizzy star"
            },
            {
                "name": "sweat droplets",
                "emoji": "💦",
                "search": "sweat droplets water workout drops"
            },
            {
                "name": "dashing away",
                "emoji": "💨",
                "search": "dashing away wind blow fast dash"
            },
            {
                "name": "hole",
                "emoji": "🕳️",
                "search": "hole"
            },
            {
                "name": "speech balloon",
                "emoji": "💬",
                "search": "speech balloon comment"
            },
            {
                "name": "eye in speech bubble",
                "emoji": "👁️‍🗨️",
                "search": "eye in speech bubble"
            },
            {
                "name": "left speech bubble",
                "emoji": "🗨️",
                "search": "left speech bubble"
            },
            {
                "name": "right anger bubble",
                "emoji": "🗯️",
                "search": "right anger bubble"
            },
            {
                "name": "thought balloon",
                "emoji": "💭",
                "search": "thought balloon thinking"
            },
            {
                "name": "ZZZ",
                "emoji": "💤",
                "search": "zzz sleeping"
            }
        ]
    },
    [EEmojiCategory.PeopleAndBody]: {
        "name": "People & Body",
        "emojis": [
            {
                "name": "waving hand",
                "emoji": "👋",
                "search": "waving hand goodbye wave",
                "skin_tones": true
            },
            {
                "name": "raised back of hand",
                "emoji": "🤚",
                "search": "raised back of hand",
                "skin_tones": true
            },
            {
                "name": "hand with fingers splayed",
                "emoji": "🖐️",
                "search": "hand with fingers splayed raised",
                "skin_tones": true
            },
            {
                "name": "raised hand",
                "emoji": "✋",
                "search": "raised hand highfive stop",
                "skin_tones": true
            },
            {
                "name": "vulcan salute",
                "emoji": "🖖",
                "search": "vulcan salute prosper spock",
                "skin_tones": true
            },
            {
                "name": "rightwards hand",
                "emoji": "🫱",
                "search": "rightwards hand",
                "skin_tones": true
            },
            {
                "name": "leftwards hand",
                "emoji": "🫲",
                "search": "leftwards hand",
                "skin_tones": true
            },
            {
                "name": "palm down hand",
                "emoji": "🫳",
                "search": "palm down hand",
                "skin_tones": true
            },
            {
                "name": "palm up hand",
                "emoji": "🫴",
                "search": "palm up hand",
                "skin_tones": true
            },
            {
                "name": "leftwards pushing hand",
                "emoji": "🫷",
                "search": "leftwards pushing hand",
                "skin_tones": true
            },
            {
                "name": "rightwards pushing hand",
                "emoji": "🫸",
                "search": "rightwards pushing hand",
                "skin_tones": true
            },
            {
                "name": "OK hand",
                "emoji": "👌",
                "search": "ok hand",
                "skin_tones": true
            },
            {
                "name": "pinched fingers",
                "emoji": "🤌",
                "search": "pinched fingers",
                "skin_tones": true
            },
            {
                "name": "pinching hand",
                "emoji": "🤏",
                "search": "pinching hand",
                "skin_tones": true
            },
            {
                "name": "victory hand",
                "emoji": "✌️",
                "search": "victory hand peace v",
                "skin_tones": true
            },
            {
                "name": "crossed fingers",
                "emoji": "🤞",
                "search": "crossed fingers luck hopeful",
                "skin_tones": true
            },
            {
                "name": "hand with index finger and thumb crossed",
                "emoji": "🫰",
                "search": "hand with index finger and thumb crossed",
                "skin_tones": true
            },
            {
                "name": "love-you gesture",
                "emoji": "🤟",
                "search": "love-you gesture love you",
                "skin_tones": true
            },
            {
                "name": "sign of the horns",
                "emoji": "🤘",
                "search": "sign of the horns metal",
                "skin_tones": true
            },
            {
                "name": "call me hand",
                "emoji": "🤙",
                "search": "call me hand",
                "skin_tones": true
            },
            {
                "name": "backhand index pointing left",
                "emoji": "👈",
                "search": "backhand index pointing left point",
                "skin_tones": true
            },
            {
                "name": "backhand index pointing right",
                "emoji": "👉",
                "search": "backhand index pointing right point",
                "skin_tones": true
            },
            {
                "name": "backhand index pointing up",
                "emoji": "👆",
                "search": "backhand index pointing up point 2",
                "skin_tones": true
            },
            {
                "name": "middle finger",
                "emoji": "🖕",
                "search": "middle finger fu",
                "skin_tones": true
            },
            {
                "name": "backhand index pointing down",
                "emoji": "👇",
                "search": "backhand index pointing down point",
                "skin_tones": true
            },
            {
                "name": "index pointing up",
                "emoji": "☝️",
                "search": "index pointing up point",
                "skin_tones": true
            },
            {
                "name": "index pointing at the viewer",
                "emoji": "🫵",
                "search": "index pointing at the viewer",
                "skin_tones": true
            },
            {
                "name": "thumbs up",
                "emoji": "👍",
                "search": "thumbs up approve ok +1 thumbsup",
                "skin_tones": true
            },
            {
                "name": "thumbs down",
                "emoji": "👎",
                "search": "thumbs down disapprove bury -1 thumbsdown",
                "skin_tones": true
            },
            {
                "name": "raised fist",
                "emoji": "✊",
                "search": "raised fist power",
                "skin_tones": true
            },
            {
                "name": "oncoming fist",
                "emoji": "👊",
                "search": "oncoming fist attack facepunch punch",
                "skin_tones": true
            },
            {
                "name": "left-facing fist",
                "emoji": "🤛",
                "search": "left-facing fist left",
                "skin_tones": true
            },
            {
                "name": "right-facing fist",
                "emoji": "🤜",
                "search": "right-facing fist right",
                "skin_tones": true
            },
            {
                "name": "clapping hands",
                "emoji": "👏",
                "search": "clapping hands praise applause clap",
                "skin_tones": true
            },
            {
                "name": "raising hands",
                "emoji": "🙌",
                "search": "raising hands hooray raised",
                "skin_tones": true
            },
            {
                "name": "heart hands",
                "emoji": "🫶",
                "search": "heart hands love",
                "skin_tones": true
            },
            {
                "name": "open hands",
                "emoji": "👐",
                "search": "open hands",
                "skin_tones": true
            },
            {
                "name": "palms up together",
                "emoji": "🤲",
                "search": "palms up together",
                "skin_tones": true
            },
            {
                "name": "handshake",
                "emoji": "🤝",
                "search": "handshake deal",
                "skin_tones": true
            },
            {
                "name": "folded hands",
                "emoji": "🙏",
                "search": "folded hands please hope wish pray",
                "skin_tones": true
            },
            {
                "name": "writing hand",
                "emoji": "✍️",
                "search": "writing hand",
                "skin_tones": true
            },
            {
                "name": "nail polish",
                "emoji": "💅",
                "search": "nail polish beauty manicure care",
                "skin_tones": true
            },
            {
                "name": "selfie",
                "emoji": "🤳",
                "search": "selfie",
                "skin_tones": true
            },
            {
                "name": "flexed biceps",
                "emoji": "💪",
                "search": "flexed biceps flex bicep strong workout muscle",
                "skin_tones": true
            },
            {
                "name": "mechanical arm",
                "emoji": "🦾",
                "search": "mechanical arm"
            },
            {
                "name": "mechanical leg",
                "emoji": "🦿",
                "search": "mechanical leg"
            },
            {
                "name": "leg",
                "emoji": "🦵",
                "search": "leg",
                "skin_tones": true
            },
            {
                "name": "foot",
                "emoji": "🦶",
                "search": "foot",
                "skin_tones": true
            },
            {
                "name": "ear",
                "emoji": "👂",
                "search": "ear hear sound listen",
                "skin_tones": true
            },
            {
                "name": "ear with hearing aid",
                "emoji": "🦻",
                "search": "ear with hearing aid",
                "skin_tones": true
            },
            {
                "name": "nose",
                "emoji": "👃",
                "search": "nose smell",
                "skin_tones": true
            },
            {
                "name": "brain",
                "emoji": "🧠",
                "search": "brain"
            },
            {
                "name": "anatomical heart",
                "emoji": "🫀",
                "search": "anatomical heart"
            },
            {
                "name": "lungs",
                "emoji": "🫁",
                "search": "lungs"
            },
            {
                "name": "tooth",
                "emoji": "🦷",
                "search": "tooth"
            },
            {
                "name": "bone",
                "emoji": "🦴",
                "search": "bone"
            },
            {
                "name": "eyes",
                "emoji": "👀",
                "search": "eyes look see watch"
            },
            {
                "name": "eye",
                "emoji": "👁️",
                "search": "eye"
            },
            {
                "name": "tongue",
                "emoji": "👅",
                "search": "tongue taste"
            },
            {
                "name": "mouth",
                "emoji": "👄",
                "search": "mouth kiss lips"
            },
            {
                "name": "biting lip",
                "emoji": "🫦",
                "search": "biting lip"
            },
            {
                "name": "baby",
                "emoji": "👶",
                "search": "baby child newborn",
                "skin_tones": true
            },
            {
                "name": "child",
                "emoji": "🧒",
                "search": "child",
                "skin_tones": true
            },
            {
                "name": "boy",
                "emoji": "👦",
                "search": "boy child",
                "skin_tones": true
            },
            {
                "name": "girl",
                "emoji": "👧",
                "search": "girl child",
                "skin_tones": true
            },
            {
                "name": "person",
                "emoji": "🧑",
                "search": "person adult",
                "skin_tones": true
            },
            {
                "name": "person: blond hair",
                "emoji": "👱",
                "search": "person: blond hair haired person",
                "skin_tones": true
            },
            {
                "name": "man",
                "emoji": "👨",
                "search": "man mustache father dad",
                "skin_tones": true
            },
            {
                "name": "person: beard",
                "emoji": "🧔",
                "search": "person: beard bearded person",
                "skin_tones": true
            },
            {
                "name": "man: beard",
                "emoji": "🧔‍♂️",
                "search": "man: beard man",
                "skin_tones": true
            },
            {
                "name": "woman: beard",
                "emoji": "🧔‍♀️",
                "search": "woman: beard woman",
                "skin_tones": true
            },
            {
                "name": "man: red hair",
                "emoji": "👨‍🦰",
                "search": "man: red hair haired man",
                "skin_tones": true
            },
            {
                "name": "man: curly hair",
                "emoji": "👨‍🦱",
                "search": "man: curly hair haired man",
                "skin_tones": true
            },
            {
                "name": "man: white hair",
                "emoji": "👨‍🦳",
                "search": "man: white hair haired man",
                "skin_tones": true
            },
            {
                "name": "man: bald",
                "emoji": "👨‍🦲",
                "search": "man: bald man",
                "skin_tones": true
            },
            {
                "name": "woman",
                "emoji": "👩",
                "search": "woman girls",
                "skin_tones": true
            },
            {
                "name": "woman: red hair",
                "emoji": "👩‍🦰",
                "search": "woman: red hair haired woman",
                "skin_tones": true
            },
            {
                "name": "person: red hair",
                "emoji": "🧑‍🦰",
                "search": "person: red hair person",
                "skin_tones": true
            },
            {
                "name": "woman: curly hair",
                "emoji": "👩‍🦱",
                "search": "woman: curly hair haired woman",
                "skin_tones": true
            },
            {
                "name": "person: curly hair",
                "emoji": "🧑‍🦱",
                "search": "person: curly hair person",
                "skin_tones": true
            },
            {
                "name": "woman: white hair",
                "emoji": "👩‍🦳",
                "search": "woman: white hair haired woman",
                "skin_tones": true
            },
            {
                "name": "person: white hair",
                "emoji": "🧑‍🦳",
                "search": "person: white hair person",
                "skin_tones": true
            },
            {
                "name": "woman: bald",
                "emoji": "👩‍🦲",
                "search": "woman: bald woman",
                "skin_tones": true
            },
            {
                "name": "person: bald",
                "emoji": "🧑‍🦲",
                "search": "person: bald person",
                "skin_tones": true
            },
            {
                "name": "woman: blond hair",
                "emoji": "👱‍♀️",
                "search": "woman: blond hair haired woman blonde",
                "skin_tones": true
            },
            {
                "name": "man: blond hair",
                "emoji": "👱‍♂️",
                "search": "man: blond hair haired man",
                "skin_tones": true
            },
            {
                "name": "older person",
                "emoji": "🧓",
                "search": "older person adult",
                "skin_tones": true
            },
            {
                "name": "old man",
                "emoji": "👴",
                "search": "old man older",
                "skin_tones": true
            },
            {
                "name": "old woman",
                "emoji": "👵",
                "search": "old woman older",
                "skin_tones": true
            },
            {
                "name": "person frowning",
                "emoji": "🙍",
                "search": "person frowning",
                "skin_tones": true
            },
            {
                "name": "man frowning",
                "emoji": "🙍‍♂️",
                "search": "man frowning",
                "skin_tones": true
            },
            {
                "name": "woman frowning",
                "emoji": "🙍‍♀️",
                "search": "woman frowning",
                "skin_tones": true
            },
            {
                "name": "person pouting",
                "emoji": "🙎",
                "search": "person pouting face",
                "skin_tones": true
            },
            {
                "name": "man pouting",
                "emoji": "🙎‍♂️",
                "search": "man pouting",
                "skin_tones": true
            },
            {
                "name": "woman pouting",
                "emoji": "🙎‍♀️",
                "search": "woman pouting",
                "skin_tones": true
            },
            {
                "name": "person gesturing NO",
                "emoji": "🙅",
                "search": "person gesturing no stop halt denied good",
                "skin_tones": true
            },
            {
                "name": "man gesturing NO",
                "emoji": "🙅‍♂️",
                "search": "man gesturing no stop halt denied good ng",
                "skin_tones": true
            },
            {
                "name": "woman gesturing NO",
                "emoji": "🙅‍♀️",
                "search": "woman gesturing no stop halt denied good ng",
                "skin_tones": true
            },
            {
                "name": "person gesturing OK",
                "emoji": "🙆",
                "search": "person gesturing ok",
                "skin_tones": true
            },
            {
                "name": "man gesturing OK",
                "emoji": "🙆‍♂️",
                "search": "man gesturing ok",
                "skin_tones": true
            },
            {
                "name": "woman gesturing OK",
                "emoji": "🙆‍♀️",
                "search": "woman gesturing ok",
                "skin_tones": true
            },
            {
                "name": "person tipping hand",
                "emoji": "💁",
                "search": "person tipping hand information desk",
                "skin_tones": true
            },
            {
                "name": "man tipping hand",
                "emoji": "💁‍♂️",
                "search": "man tipping hand information sassy",
                "skin_tones": true
            },
            {
                "name": "woman tipping hand",
                "emoji": "💁‍♀️",
                "search": "woman tipping hand information sassy",
                "skin_tones": true
            },
            {
                "name": "person raising hand",
                "emoji": "🙋",
                "search": "person raising hand",
                "skin_tones": true
            },
            {
                "name": "man raising hand",
                "emoji": "🙋‍♂️",
                "search": "man raising hand",
                "skin_tones": true
            },
            {
                "name": "woman raising hand",
                "emoji": "🙋‍♀️",
                "search": "woman raising hand",
                "skin_tones": true
            },
            {
                "name": "deaf person",
                "emoji": "🧏",
                "search": "deaf person",
                "skin_tones": true
            },
            {
                "name": "deaf man",
                "emoji": "🧏‍♂️",
                "search": "deaf man",
                "skin_tones": true
            },
            {
                "name": "deaf woman",
                "emoji": "🧏‍♀️",
                "search": "deaf woman",
                "skin_tones": true
            },
            {
                "name": "person bowing",
                "emoji": "🙇",
                "search": "person bowing respect thanks bow",
                "skin_tones": true
            },
            {
                "name": "man bowing",
                "emoji": "🙇‍♂️",
                "search": "man bowing respect thanks",
                "skin_tones": true
            },
            {
                "name": "woman bowing",
                "emoji": "🙇‍♀️",
                "search": "woman bowing respect thanks",
                "skin_tones": true
            },
            {
                "name": "person facepalming",
                "emoji": "🤦",
                "search": "person facepalming facepalm",
                "skin_tones": true
            },
            {
                "name": "man facepalming",
                "emoji": "🤦‍♂️",
                "search": "man facepalming",
                "skin_tones": true
            },
            {
                "name": "woman facepalming",
                "emoji": "🤦‍♀️",
                "search": "woman facepalming",
                "skin_tones": true
            },
            {
                "name": "person shrugging",
                "emoji": "🤷",
                "search": "person shrugging shrug",
                "skin_tones": true
            },
            {
                "name": "man shrugging",
                "emoji": "🤷‍♂️",
                "search": "man shrugging",
                "skin_tones": true
            },
            {
                "name": "woman shrugging",
                "emoji": "🤷‍♀️",
                "search": "woman shrugging",
                "skin_tones": true
            },
            {
                "name": "health worker",
                "emoji": "🧑‍⚕️",
                "search": "health worker",
                "skin_tones": true
            },
            {
                "name": "man health worker",
                "emoji": "👨‍⚕️",
                "search": "man health worker doctor nurse",
                "skin_tones": true
            },
            {
                "name": "woman health worker",
                "emoji": "👩‍⚕️",
                "search": "woman health worker doctor nurse",
                "skin_tones": true
            },
            {
                "name": "student",
                "emoji": "🧑‍🎓",
                "search": "student",
                "skin_tones": true
            },
            {
                "name": "man student",
                "emoji": "👨‍🎓",
                "search": "man student graduation",
                "skin_tones": true
            },
            {
                "name": "woman student",
                "emoji": "👩‍🎓",
                "search": "woman student graduation",
                "skin_tones": true
            },
            {
                "name": "teacher",
                "emoji": "🧑‍🏫",
                "search": "teacher",
                "skin_tones": true
            },
            {
                "name": "man teacher",
                "emoji": "👨‍🏫",
                "search": "man teacher school professor",
                "skin_tones": true
            },
            {
                "name": "woman teacher",
                "emoji": "👩‍🏫",
                "search": "woman teacher school professor",
                "skin_tones": true
            },
            {
                "name": "judge",
                "emoji": "🧑‍⚖️",
                "search": "judge",
                "skin_tones": true
            },
            {
                "name": "man judge",
                "emoji": "👨‍⚖️",
                "search": "man judge justice",
                "skin_tones": true
            },
            {
                "name": "woman judge",
                "emoji": "👩‍⚖️",
                "search": "woman judge justice",
                "skin_tones": true
            },
            {
                "name": "farmer",
                "emoji": "🧑‍🌾",
                "search": "farmer",
                "skin_tones": true
            },
            {
                "name": "man farmer",
                "emoji": "👨‍🌾",
                "search": "man farmer",
                "skin_tones": true
            },
            {
                "name": "woman farmer",
                "emoji": "👩‍🌾",
                "search": "woman farmer",
                "skin_tones": true
            },
            {
                "name": "cook",
                "emoji": "🧑‍🍳",
                "search": "cook",
                "skin_tones": true
            },
            {
                "name": "man cook",
                "emoji": "👨‍🍳",
                "search": "man cook chef",
                "skin_tones": true
            },
            {
                "name": "woman cook",
                "emoji": "👩‍🍳",
                "search": "woman cook chef",
                "skin_tones": true
            },
            {
                "name": "mechanic",
                "emoji": "🧑‍🔧",
                "search": "mechanic",
                "skin_tones": true
            },
            {
                "name": "man mechanic",
                "emoji": "👨‍🔧",
                "search": "man mechanic",
                "skin_tones": true
            },
            {
                "name": "woman mechanic",
                "emoji": "👩‍🔧",
                "search": "woman mechanic",
                "skin_tones": true
            },
            {
                "name": "factory worker",
                "emoji": "🧑‍🏭",
                "search": "factory worker",
                "skin_tones": true
            },
            {
                "name": "man factory worker",
                "emoji": "👨‍🏭",
                "search": "man factory worker",
                "skin_tones": true
            },
            {
                "name": "woman factory worker",
                "emoji": "👩‍🏭",
                "search": "woman factory worker",
                "skin_tones": true
            },
            {
                "name": "office worker",
                "emoji": "🧑‍💼",
                "search": "office worker",
                "skin_tones": true
            },
            {
                "name": "man office worker",
                "emoji": "👨‍💼",
                "search": "man office worker business",
                "skin_tones": true
            },
            {
                "name": "woman office worker",
                "emoji": "👩‍💼",
                "search": "woman office worker business",
                "skin_tones": true
            },
            {
                "name": "scientist",
                "emoji": "🧑‍🔬",
                "search": "scientist",
                "skin_tones": true
            },
            {
                "name": "man scientist",
                "emoji": "👨‍🔬",
                "search": "man scientist research",
                "skin_tones": true
            },
            {
                "name": "woman scientist",
                "emoji": "👩‍🔬",
                "search": "woman scientist research",
                "skin_tones": true
            },
            {
                "name": "technologist",
                "emoji": "🧑‍💻",
                "search": "technologist",
                "skin_tones": true
            },
            {
                "name": "man technologist",
                "emoji": "👨‍💻",
                "search": "man technologist coder",
                "skin_tones": true
            },
            {
                "name": "woman technologist",
                "emoji": "👩‍💻",
                "search": "woman technologist coder",
                "skin_tones": true
            },
            {
                "name": "singer",
                "emoji": "🧑‍🎤",
                "search": "singer",
                "skin_tones": true
            },
            {
                "name": "man singer",
                "emoji": "👨‍🎤",
                "search": "man singer rockstar",
                "skin_tones": true
            },
            {
                "name": "woman singer",
                "emoji": "👩‍🎤",
                "search": "woman singer rockstar",
                "skin_tones": true
            },
            {
                "name": "artist",
                "emoji": "🧑‍🎨",
                "search": "artist",
                "skin_tones": true
            },
            {
                "name": "man artist",
                "emoji": "👨‍🎨",
                "search": "man artist painter",
                "skin_tones": true
            },
            {
                "name": "woman artist",
                "emoji": "👩‍🎨",
                "search": "woman artist painter",
                "skin_tones": true
            },
            {
                "name": "pilot",
                "emoji": "🧑‍✈️",
                "search": "pilot",
                "skin_tones": true
            },
            {
                "name": "man pilot",
                "emoji": "👨‍✈️",
                "search": "man pilot",
                "skin_tones": true
            },
            {
                "name": "woman pilot",
                "emoji": "👩‍✈️",
                "search": "woman pilot",
                "skin_tones": true
            },
            {
                "name": "astronaut",
                "emoji": "🧑‍🚀",
                "search": "astronaut",
                "skin_tones": true
            },
            {
                "name": "man astronaut",
                "emoji": "👨‍🚀",
                "search": "man astronaut space",
                "skin_tones": true
            },
            {
                "name": "woman astronaut",
                "emoji": "👩‍🚀",
                "search": "woman astronaut space",
                "skin_tones": true
            },
            {
                "name": "firefighter",
                "emoji": "🧑‍🚒",
                "search": "firefighter",
                "skin_tones": true
            },
            {
                "name": "man firefighter",
                "emoji": "👨‍🚒",
                "search": "man firefighter",
                "skin_tones": true
            },
            {
                "name": "woman firefighter",
                "emoji": "👩‍🚒",
                "search": "woman firefighter",
                "skin_tones": true
            },
            {
                "name": "police officer",
                "emoji": "👮",
                "search": "police officer law cop",
                "skin_tones": true
            },
            {
                "name": "man police officer",
                "emoji": "👮‍♂️",
                "search": "man police officer law cop policeman",
                "skin_tones": true
            },
            {
                "name": "woman police officer",
                "emoji": "👮‍♀️",
                "search": "woman police officer law cop policewoman",
                "skin_tones": true
            },
            {
                "name": "detective",
                "emoji": "🕵️",
                "search": "detective sleuth",
                "skin_tones": true
            },
            {
                "name": "man detective",
                "emoji": "🕵️‍♂️",
                "search": "man detective sleuth male",
                "skin_tones": true
            },
            {
                "name": "woman detective",
                "emoji": "🕵️‍♀️",
                "search": "woman detective sleuth female",
                "skin_tones": true
            },
            {
                "name": "guard",
                "emoji": "💂",
                "search": "guard",
                "skin_tones": true
            },
            {
                "name": "man guard",
                "emoji": "💂‍♂️",
                "search": "man guard guardsman",
                "skin_tones": true
            },
            {
                "name": "woman guard",
                "emoji": "💂‍♀️",
                "search": "woman guard guardswoman",
                "skin_tones": true
            },
            {
                "name": "ninja",
                "emoji": "🥷",
                "search": "ninja",
                "skin_tones": true
            },
            {
                "name": "construction worker",
                "emoji": "👷",
                "search": "construction worker helmet",
                "skin_tones": true
            },
            {
                "name": "man construction worker",
                "emoji": "👷‍♂️",
                "search": "man construction worker helmet",
                "skin_tones": true
            },
            {
                "name": "woman construction worker",
                "emoji": "👷‍♀️",
                "search": "woman construction worker helmet",
                "skin_tones": true
            },
            {
                "name": "person with crown",
                "emoji": "🫅",
                "search": "person with crown",
                "skin_tones": true
            },
            {
                "name": "prince",
                "emoji": "🤴",
                "search": "prince crown royal",
                "skin_tones": true
            },
            {
                "name": "princess",
                "emoji": "👸",
                "search": "princess crown royal",
                "skin_tones": true
            },
            {
                "name": "person wearing turban",
                "emoji": "👳",
                "search": "person wearing turban with",
                "skin_tones": true
            },
            {
                "name": "man wearing turban",
                "emoji": "👳‍♂️",
                "search": "man wearing turban with",
                "skin_tones": true
            },
            {
                "name": "woman wearing turban",
                "emoji": "👳‍♀️",
                "search": "woman wearing turban with",
                "skin_tones": true
            },
            {
                "name": "person with skullcap",
                "emoji": "👲",
                "search": "person with skullcap man gua pi mao",
                "skin_tones": true
            },
            {
                "name": "woman with headscarf",
                "emoji": "🧕",
                "search": "woman with headscarf hijab",
                "skin_tones": true
            },
            {
                "name": "person in tuxedo",
                "emoji": "🤵",
                "search": "person in tuxedo groom marriage wedding",
                "skin_tones": true
            },
            {
                "name": "man in tuxedo",
                "emoji": "🤵‍♂️",
                "search": "man in tuxedo",
                "skin_tones": true
            },
            {
                "name": "woman in tuxedo",
                "emoji": "🤵‍♀️",
                "search": "woman in tuxedo",
                "skin_tones": true
            },
            {
                "name": "person with veil",
                "emoji": "👰",
                "search": "person with veil marriage wedding",
                "skin_tones": true
            },
            {
                "name": "man with veil",
                "emoji": "👰‍♂️",
                "search": "man with veil",
                "skin_tones": true
            },
            {
                "name": "woman with veil",
                "emoji": "👰‍♀️",
                "search": "woman with veil bride",
                "skin_tones": true
            },
            {
                "name": "pregnant woman",
                "emoji": "🤰",
                "search": "pregnant woman",
                "skin_tones": true
            },
            {
                "name": "pregnant man",
                "emoji": "🫃",
                "search": "pregnant man",
                "skin_tones": true
            },
            {
                "name": "pregnant person",
                "emoji": "🫄",
                "search": "pregnant person",
                "skin_tones": true
            },
            {
                "name": "breast-feeding",
                "emoji": "🤱",
                "search": "breast-feeding nursing breast feeding",
                "skin_tones": true
            },
            {
                "name": "woman feeding baby",
                "emoji": "👩‍🍼",
                "search": "woman feeding baby",
                "skin_tones": true
            },
            {
                "name": "man feeding baby",
                "emoji": "👨‍🍼",
                "search": "man feeding baby",
                "skin_tones": true
            },
            {
                "name": "person feeding baby",
                "emoji": "🧑‍🍼",
                "search": "person feeding baby",
                "skin_tones": true
            },
            {
                "name": "baby angel",
                "emoji": "👼",
                "search": "baby angel",
                "skin_tones": true
            },
            {
                "name": "Santa Claus",
                "emoji": "🎅",
                "search": "santa claus christmas",
                "skin_tones": true
            },
            {
                "name": "Mrs. Claus",
                "emoji": "🤶",
                "search": "mrs. claus santa mrs",
                "skin_tones": true
            },
            {
                "name": "mx claus",
                "emoji": "🧑‍🎄",
                "search": "mx claus",
                "skin_tones": true
            },
            {
                "name": "superhero",
                "emoji": "🦸",
                "search": "superhero",
                "skin_tones": true
            },
            {
                "name": "man superhero",
                "emoji": "🦸‍♂️",
                "search": "man superhero",
                "skin_tones": true
            },
            {
                "name": "woman superhero",
                "emoji": "🦸‍♀️",
                "search": "woman superhero",
                "skin_tones": true
            },
            {
                "name": "supervillain",
                "emoji": "🦹",
                "search": "supervillain",
                "skin_tones": true
            },
            {
                "name": "man supervillain",
                "emoji": "🦹‍♂️",
                "search": "man supervillain",
                "skin_tones": true
            },
            {
                "name": "woman supervillain",
                "emoji": "🦹‍♀️",
                "search": "woman supervillain",
                "skin_tones": true
            },
            {
                "name": "mage",
                "emoji": "🧙",
                "search": "mage wizard",
                "skin_tones": true
            },
            {
                "name": "man mage",
                "emoji": "🧙‍♂️",
                "search": "man mage wizard",
                "skin_tones": true
            },
            {
                "name": "woman mage",
                "emoji": "🧙‍♀️",
                "search": "woman mage wizard",
                "skin_tones": true
            },
            {
                "name": "fairy",
                "emoji": "🧚",
                "search": "fairy",
                "skin_tones": true
            },
            {
                "name": "man fairy",
                "emoji": "🧚‍♂️",
                "search": "man fairy",
                "skin_tones": true
            },
            {
                "name": "woman fairy",
                "emoji": "🧚‍♀️",
                "search": "woman fairy",
                "skin_tones": true
            },
            {
                "name": "vampire",
                "emoji": "🧛",
                "search": "vampire",
                "skin_tones": true
            },
            {
                "name": "man vampire",
                "emoji": "🧛‍♂️",
                "search": "man vampire",
                "skin_tones": true
            },
            {
                "name": "woman vampire",
                "emoji": "🧛‍♀️",
                "search": "woman vampire",
                "skin_tones": true
            },
            {
                "name": "merperson",
                "emoji": "🧜",
                "search": "merperson",
                "skin_tones": true
            },
            {
                "name": "merman",
                "emoji": "🧜‍♂️",
                "search": "merman",
                "skin_tones": true
            },
            {
                "name": "mermaid",
                "emoji": "🧜‍♀️",
                "search": "mermaid",
                "skin_tones": true
            },
            {
                "name": "elf",
                "emoji": "🧝",
                "search": "elf",
                "skin_tones": true
            },
            {
                "name": "man elf",
                "emoji": "🧝‍♂️",
                "search": "man elf",
                "skin_tones": true
            },
            {
                "name": "woman elf",
                "emoji": "🧝‍♀️",
                "search": "woman elf",
                "skin_tones": true
            },
            {
                "name": "genie",
                "emoji": "🧞",
                "search": "genie"
            },
            {
                "name": "man genie",
                "emoji": "🧞‍♂️",
                "search": "man genie"
            },
            {
                "name": "woman genie",
                "emoji": "🧞‍♀️",
                "search": "woman genie"
            },
            {
                "name": "zombie",
                "emoji": "🧟",
                "search": "zombie"
            },
            {
                "name": "man zombie",
                "emoji": "🧟‍♂️",
                "search": "man zombie"
            },
            {
                "name": "woman zombie",
                "emoji": "🧟‍♀️",
                "search": "woman zombie"
            },
            {
                "name": "troll",
                "emoji": "🧌",
                "search": "troll"
            },
            {
                "name": "person getting massage",
                "emoji": "💆",
                "search": "person getting massage spa",
                "skin_tones": true
            },
            {
                "name": "man getting massage",
                "emoji": "💆‍♂️",
                "search": "man getting massage spa",
                "skin_tones": true
            },
            {
                "name": "woman getting massage",
                "emoji": "💆‍♀️",
                "search": "woman getting massage spa",
                "skin_tones": true
            },
            {
                "name": "person getting haircut",
                "emoji": "💇",
                "search": "person getting haircut beauty",
                "skin_tones": true
            },
            {
                "name": "man getting haircut",
                "emoji": "💇‍♂️",
                "search": "man getting haircut",
                "skin_tones": true
            },
            {
                "name": "woman getting haircut",
                "emoji": "💇‍♀️",
                "search": "woman getting haircut",
                "skin_tones": true
            },
            {
                "name": "person walking",
                "emoji": "🚶",
                "search": "person walking",
                "skin_tones": true
            },
            {
                "name": "man walking",
                "emoji": "🚶‍♂️",
                "search": "man walking",
                "skin_tones": true
            },
            {
                "name": "woman walking",
                "emoji": "🚶‍♀️",
                "search": "woman walking",
                "skin_tones": true
            },
            {
                "name": "person standing",
                "emoji": "🧍",
                "search": "person standing",
                "skin_tones": true
            },
            {
                "name": "man standing",
                "emoji": "🧍‍♂️",
                "search": "man standing",
                "skin_tones": true
            },
            {
                "name": "woman standing",
                "emoji": "🧍‍♀️",
                "search": "woman standing",
                "skin_tones": true
            },
            {
                "name": "person kneeling",
                "emoji": "🧎",
                "search": "person kneeling",
                "skin_tones": true
            },
            {
                "name": "man kneeling",
                "emoji": "🧎‍♂️",
                "search": "man kneeling",
                "skin_tones": true
            },
            {
                "name": "woman kneeling",
                "emoji": "🧎‍♀️",
                "search": "woman kneeling",
                "skin_tones": true
            },
            {
                "name": "person with white cane",
                "emoji": "🧑‍🦯",
                "search": "person with white cane probing",
                "skin_tones": true
            },
            {
                "name": "man with white cane",
                "emoji": "👨‍🦯",
                "search": "man with white cane probing",
                "skin_tones": true
            },
            {
                "name": "woman with white cane",
                "emoji": "👩‍🦯",
                "search": "woman with white cane probing",
                "skin_tones": true
            },
            {
                "name": "person in motorized wheelchair",
                "emoji": "🧑‍🦼",
                "search": "person in motorized wheelchair",
                "skin_tones": true
            },
            {
                "name": "man in motorized wheelchair",
                "emoji": "👨‍🦼",
                "search": "man in motorized wheelchair",
                "skin_tones": true
            },
            {
                "name": "woman in motorized wheelchair",
                "emoji": "👩‍🦼",
                "search": "woman in motorized wheelchair",
                "skin_tones": true
            },
            {
                "name": "person in manual wheelchair",
                "emoji": "🧑‍🦽",
                "search": "person in manual wheelchair",
                "skin_tones": true
            },
            {
                "name": "man in manual wheelchair",
                "emoji": "👨‍🦽",
                "search": "man in manual wheelchair",
                "skin_tones": true
            },
            {
                "name": "woman in manual wheelchair",
                "emoji": "👩‍🦽",
                "search": "woman in manual wheelchair",
                "skin_tones": true
            },
            {
                "name": "person running",
                "emoji": "🏃",
                "search": "person running exercise workout marathon runner",
                "skin_tones": true
            },
            {
                "name": "man running",
                "emoji": "🏃‍♂️",
                "search": "man running exercise workout marathon",
                "skin_tones": true
            },
            {
                "name": "woman running",
                "emoji": "🏃‍♀️",
                "search": "woman running exercise workout marathon",
                "skin_tones": true
            },
            {
                "name": "woman dancing",
                "emoji": "💃",
                "search": "woman dancing dress dancer",
                "skin_tones": true
            },
            {
                "name": "man dancing",
                "emoji": "🕺",
                "search": "man dancing dancer",
                "skin_tones": true
            },
            {
                "name": "person in suit levitating",
                "emoji": "🕴️",
                "search": "person in suit levitating business",
                "skin_tones": true
            },
            {
                "name": "people with bunny ears",
                "emoji": "👯",
                "search": "people with bunny ears dancers"
            },
            {
                "name": "men with bunny ears",
                "emoji": "👯‍♂️",
                "search": "men with bunny ears dancing"
            },
            {
                "name": "women with bunny ears",
                "emoji": "👯‍♀️",
                "search": "women with bunny ears dancing"
            },
            {
                "name": "person in steamy room",
                "emoji": "🧖",
                "search": "person in steamy room sauna",
                "skin_tones": true
            },
            {
                "name": "man in steamy room",
                "emoji": "🧖‍♂️",
                "search": "man in steamy room sauna",
                "skin_tones": true
            },
            {
                "name": "woman in steamy room",
                "emoji": "🧖‍♀️",
                "search": "woman in steamy room sauna",
                "skin_tones": true
            },
            {
                "name": "person climbing",
                "emoji": "🧗",
                "search": "person climbing bouldering",
                "skin_tones": true
            },
            {
                "name": "man climbing",
                "emoji": "🧗‍♂️",
                "search": "man climbing bouldering",
                "skin_tones": true
            },
            {
                "name": "woman climbing",
                "emoji": "🧗‍♀️",
                "search": "woman climbing bouldering",
                "skin_tones": true
            },
            {
                "name": "person fencing",
                "emoji": "🤺",
                "search": "person fencing"
            },
            {
                "name": "horse racing",
                "emoji": "🏇",
                "search": "horse racing",
                "skin_tones": true
            },
            {
                "name": "skier",
                "emoji": "⛷️",
                "search": "skier"
            },
            {
                "name": "snowboarder",
                "emoji": "🏂",
                "search": "snowboarder",
                "skin_tones": true
            },
            {
                "name": "person golfing",
                "emoji": "🏌️",
                "search": "person golfing",
                "skin_tones": true
            },
            {
                "name": "man golfing",
                "emoji": "🏌️‍♂️",
                "search": "man golfing",
                "skin_tones": true
            },
            {
                "name": "woman golfing",
                "emoji": "🏌️‍♀️",
                "search": "woman golfing",
                "skin_tones": true
            },
            {
                "name": "person surfing",
                "emoji": "🏄",
                "search": "person surfing surfer",
                "skin_tones": true
            },
            {
                "name": "man surfing",
                "emoji": "🏄‍♂️",
                "search": "man surfing",
                "skin_tones": true
            },
            {
                "name": "woman surfing",
                "emoji": "🏄‍♀️",
                "search": "woman surfing",
                "skin_tones": true
            },
            {
                "name": "person rowing boat",
                "emoji": "🚣",
                "search": "person rowing boat rowboat",
                "skin_tones": true
            },
            {
                "name": "man rowing boat",
                "emoji": "🚣‍♂️",
                "search": "man rowing boat",
                "skin_tones": true
            },
            {
                "name": "woman rowing boat",
                "emoji": "🚣‍♀️",
                "search": "woman rowing boat",
                "skin_tones": true
            },
            {
                "name": "person swimming",
                "emoji": "🏊",
                "search": "person swimming swimmer",
                "skin_tones": true
            },
            {
                "name": "man swimming",
                "emoji": "🏊‍♂️",
                "search": "man swimming",
                "skin_tones": true
            },
            {
                "name": "woman swimming",
                "emoji": "🏊‍♀️",
                "search": "woman swimming",
                "skin_tones": true
            },
            {
                "name": "person bouncing ball",
                "emoji": "⛹️",
                "search": "person bouncing ball basketball",
                "skin_tones": true
            },
            {
                "name": "man bouncing ball",
                "emoji": "⛹️‍♂️",
                "search": "man bouncing ball basketball",
                "skin_tones": true
            },
            {
                "name": "woman bouncing ball",
                "emoji": "⛹️‍♀️",
                "search": "woman bouncing ball basketball",
                "skin_tones": true
            },
            {
                "name": "person lifting weights",
                "emoji": "🏋️",
                "search": "person lifting weights gym workout weight",
                "skin_tones": true
            },
            {
                "name": "man lifting weights",
                "emoji": "🏋️‍♂️",
                "search": "man lifting weights gym workout weight",
                "skin_tones": true
            },
            {
                "name": "woman lifting weights",
                "emoji": "🏋️‍♀️",
                "search": "woman lifting weights gym workout weight",
                "skin_tones": true
            },
            {
                "name": "person biking",
                "emoji": "🚴",
                "search": "person biking bicyclist",
                "skin_tones": true
            },
            {
                "name": "man biking",
                "emoji": "🚴‍♂️",
                "search": "man biking",
                "skin_tones": true
            },
            {
                "name": "woman biking",
                "emoji": "🚴‍♀️",
                "search": "woman biking",
                "skin_tones": true
            },
            {
                "name": "person mountain biking",
                "emoji": "🚵",
                "search": "person mountain biking bicyclist",
                "skin_tones": true
            },
            {
                "name": "man mountain biking",
                "emoji": "🚵‍♂️",
                "search": "man mountain biking",
                "skin_tones": true
            },
            {
                "name": "woman mountain biking",
                "emoji": "🚵‍♀️",
                "search": "woman mountain biking",
                "skin_tones": true
            },
            {
                "name": "person cartwheeling",
                "emoji": "🤸",
                "search": "person cartwheeling",
                "skin_tones": true
            },
            {
                "name": "man cartwheeling",
                "emoji": "🤸‍♂️",
                "search": "man cartwheeling",
                "skin_tones": true
            },
            {
                "name": "woman cartwheeling",
                "emoji": "🤸‍♀️",
                "search": "woman cartwheeling",
                "skin_tones": true
            },
            {
                "name": "people wrestling",
                "emoji": "🤼",
                "search": "people wrestling"
            },
            {
                "name": "men wrestling",
                "emoji": "🤼‍♂️",
                "search": "men wrestling"
            },
            {
                "name": "women wrestling",
                "emoji": "🤼‍♀️",
                "search": "women wrestling"
            },
            {
                "name": "person playing water polo",
                "emoji": "🤽",
                "search": "person playing water polo",
                "skin_tones": true
            },
            {
                "name": "man playing water polo",
                "emoji": "🤽‍♂️",
                "search": "man playing water polo",
                "skin_tones": true
            },
            {
                "name": "woman playing water polo",
                "emoji": "🤽‍♀️",
                "search": "woman playing water polo",
                "skin_tones": true
            },
            {
                "name": "person playing handball",
                "emoji": "🤾",
                "search": "person playing handball",
                "skin_tones": true
            },
            {
                "name": "man playing handball",
                "emoji": "🤾‍♂️",
                "search": "man playing handball",
                "skin_tones": true
            },
            {
                "name": "woman playing handball",
                "emoji": "🤾‍♀️",
                "search": "woman playing handball",
                "skin_tones": true
            },
            {
                "name": "person juggling",
                "emoji": "🤹",
                "search": "person juggling",
                "skin_tones": true
            },
            {
                "name": "man juggling",
                "emoji": "🤹‍♂️",
                "search": "man juggling",
                "skin_tones": true
            },
            {
                "name": "woman juggling",
                "emoji": "🤹‍♀️",
                "search": "woman juggling",
                "skin_tones": true
            },
            {
                "name": "person in lotus position",
                "emoji": "🧘",
                "search": "person in lotus position meditation",
                "skin_tones": true
            },
            {
                "name": "man in lotus position",
                "emoji": "🧘‍♂️",
                "search": "man in lotus position meditation",
                "skin_tones": true
            },
            {
                "name": "woman in lotus position",
                "emoji": "🧘‍♀️",
                "search": "woman in lotus position meditation",
                "skin_tones": true
            },
            {
                "name": "person taking bath",
                "emoji": "🛀",
                "search": "person taking bath shower",
                "skin_tones": true
            },
            {
                "name": "person in bed",
                "emoji": "🛌",
                "search": "person in bed sleeping",
                "skin_tones": true
            },
            {
                "name": "people holding hands",
                "emoji": "🧑‍🤝‍🧑",
                "search": "people holding hands couple date",
                "skin_tones": true
            },
            {
                "name": "women holding hands",
                "emoji": "👭",
                "search": "women holding hands couple date two",
                "skin_tones": true
            },
            {
                "name": "woman and man holding hands",
                "emoji": "👫",
                "search": "woman and man holding hands date couple",
                "skin_tones": true
            },
            {
                "name": "men holding hands",
                "emoji": "👬",
                "search": "men holding hands couple date two",
                "skin_tones": true
            },
            {
                "name": "kiss",
                "emoji": "💏",
                "search": "kiss couplekiss",
                "skin_tones": true
            },
            {
                "name": "kiss: woman, man",
                "emoji": "👩‍❤️‍💋‍👨",
                "search": "kiss: woman, man couplekiss woman",
                "skin_tones": true
            },
            {
                "name": "kiss: man, man",
                "emoji": "👨‍❤️‍💋‍👨",
                "search": "kiss: man, man couplekiss",
                "skin_tones": true
            },
            {
                "name": "kiss: woman, woman",
                "emoji": "👩‍❤️‍💋‍👩",
                "search": "kiss: woman, woman couplekiss",
                "skin_tones": true
            },
            {
                "name": "couple with heart",
                "emoji": "💑",
                "search": "couple with heart",
                "skin_tones": true
            },
            {
                "name": "couple with heart: woman, man",
                "emoji": "👩‍❤️‍👨",
                "search": "couple with heart: woman, man heart woman",
                "skin_tones": true
            },
            {
                "name": "couple with heart: man, man",
                "emoji": "👨‍❤️‍👨",
                "search": "couple with heart: man, man heart",
                "skin_tones": true
            },
            {
                "name": "couple with heart: woman, woman",
                "emoji": "👩‍❤️‍👩",
                "search": "couple with heart: woman, woman heart",
                "skin_tones": true
            },
            {
                "name": "family",
                "emoji": "👪",
                "search": "family home parents child"
            },
            {
                "name": "family: man, woman, boy",
                "emoji": "👨‍👩‍👦",
                "search": "family: man, woman, boy family man woman"
            },
            {
                "name": "family: man, woman, girl",
                "emoji": "👨‍👩‍👧",
                "search": "family: man, woman, girl family man woman"
            },
            {
                "name": "family: man, woman, girl, boy",
                "emoji": "👨‍👩‍👧‍👦",
                "search": "family: man, woman, girl, boy family man woman girl"
            },
            {
                "name": "family: man, woman, boy, boy",
                "emoji": "👨‍👩‍👦‍👦",
                "search": "family: man, woman, boy, boy family man woman"
            },
            {
                "name": "family: man, woman, girl, girl",
                "emoji": "👨‍👩‍👧‍👧",
                "search": "family: man, woman, girl, girl family man woman"
            },
            {
                "name": "family: man, man, boy",
                "emoji": "👨‍👨‍👦",
                "search": "family: man, boy family man"
            },
            {
                "name": "family: man, man, girl",
                "emoji": "👨‍👨‍👧",
                "search": "family: man, girl family man"
            },
            {
                "name": "family: man, man, girl, boy",
                "emoji": "👨‍👨‍👧‍👦",
                "search": "family: man, girl, boy family man girl"
            },
            {
                "name": "family: man, man, boy, boy",
                "emoji": "👨‍👨‍👦‍👦",
                "search": "family: man, boy, boy family man"
            },
            {
                "name": "family: man, man, girl, girl",
                "emoji": "👨‍👨‍👧‍👧",
                "search": "family: man, girl, girl family man"
            },
            {
                "name": "family: woman, woman, boy",
                "emoji": "👩‍👩‍👦",
                "search": "family: woman, boy family woman"
            },
            {
                "name": "family: woman, woman, girl",
                "emoji": "👩‍👩‍👧",
                "search": "family: woman, girl family woman"
            },
            {
                "name": "family: woman, woman, girl, boy",
                "emoji": "👩‍👩‍👧‍👦",
                "search": "family: woman, girl, boy family woman girl"
            },
            {
                "name": "family: woman, woman, boy, boy",
                "emoji": "👩‍👩‍👦‍👦",
                "search": "family: woman, boy, boy family woman"
            },
            {
                "name": "family: woman, woman, girl, girl",
                "emoji": "👩‍👩‍👧‍👧",
                "search": "family: woman, girl, girl family woman"
            },
            {
                "name": "family: man, boy",
                "emoji": "👨‍👦",
                "search": "family: man, boy family man"
            },
            {
                "name": "family: man, boy, boy",
                "emoji": "👨‍👦‍👦",
                "search": "family: man, boy, boy family man"
            },
            {
                "name": "family: man, girl",
                "emoji": "👨‍👧",
                "search": "family: man, girl family man"
            },
            {
                "name": "family: man, girl, boy",
                "emoji": "👨‍👧‍👦",
                "search": "family: man, girl, boy family man girl"
            },
            {
                "name": "family: man, girl, girl",
                "emoji": "👨‍👧‍👧",
                "search": "family: man, girl, girl family man"
            },
            {
                "name": "family: woman, boy",
                "emoji": "👩‍👦",
                "search": "family: woman, boy family woman"
            },
            {
                "name": "family: woman, boy, boy",
                "emoji": "👩‍👦‍👦",
                "search": "family: woman, boy, boy family woman"
            },
            {
                "name": "family: woman, girl",
                "emoji": "👩‍👧",
                "search": "family: woman, girl family woman"
            },
            {
                "name": "family: woman, girl, boy",
                "emoji": "👩‍👧‍👦",
                "search": "family: woman, girl, boy family woman girl"
            },
            {
                "name": "family: woman, girl, girl",
                "emoji": "👩‍👧‍👧",
                "search": "family: woman, girl, girl family woman"
            },
            {
                "name": "speaking head",
                "emoji": "🗣️",
                "search": "speaking head"
            },
            {
                "name": "bust in silhouette",
                "emoji": "👤",
                "search": "bust in silhouette user"
            },
            {
                "name": "busts in silhouette",
                "emoji": "👥",
                "search": "busts in silhouette users group team"
            },
            {
                "name": "people hugging",
                "emoji": "🫂",
                "search": "people hugging"
            },
            {
                "name": "footprints",
                "emoji": "👣",
                "search": "footprints feet tracks"
            }
        ]
    },
    [EEmojiCategory.AnimalsAndNature]: {
        "name": "Animals & Nature",
        "emojis": [
            {
                "name": "monkey face",
                "emoji": "🐵",
                "search": "monkey face"
            },
            {
                "name": "monkey",
                "emoji": "🐒",
                "search": "monkey"
            },
            {
                "name": "gorilla",
                "emoji": "🦍",
                "search": "gorilla"
            },
            {
                "name": "orangutan",
                "emoji": "🦧",
                "search": "orangutan"
            },
            {
                "name": "dog face",
                "emoji": "🐶",
                "search": "dog face pet"
            },
            {
                "name": "dog",
                "emoji": "🐕",
                "search": "dog dog2"
            },
            {
                "name": "guide dog",
                "emoji": "🦮",
                "search": "guide dog"
            },
            {
                "name": "service dog",
                "emoji": "🐕‍🦺",
                "search": "service dog"
            },
            {
                "name": "poodle",
                "emoji": "🐩",
                "search": "poodle dog"
            },
            {
                "name": "wolf",
                "emoji": "🐺",
                "search": "wolf"
            },
            {
                "name": "fox",
                "emoji": "🦊",
                "search": "fox face"
            },
            {
                "name": "raccoon",
                "emoji": "🦝",
                "search": "raccoon"
            },
            {
                "name": "cat face",
                "emoji": "🐱",
                "search": "cat face pet"
            },
            {
                "name": "cat",
                "emoji": "🐈",
                "search": "cat cat2"
            },
            {
                "name": "black cat",
                "emoji": "🐈‍⬛",
                "search": "black cat"
            },
            {
                "name": "lion",
                "emoji": "🦁",
                "search": "lion"
            },
            {
                "name": "tiger face",
                "emoji": "🐯",
                "search": "tiger face"
            },
            {
                "name": "tiger",
                "emoji": "🐅",
                "search": "tiger tiger2"
            },
            {
                "name": "leopard",
                "emoji": "🐆",
                "search": "leopard"
            },
            {
                "name": "horse face",
                "emoji": "🐴",
                "search": "horse face"
            },
            {
                "name": "moose",
                "emoji": "🫎",
                "search": "moose canada"
            },
            {
                "name": "donkey",
                "emoji": "🫏",
                "search": "donkey mule"
            },
            {
                "name": "horse",
                "emoji": "🐎",
                "search": "horse speed racehorse"
            },
            {
                "name": "unicorn",
                "emoji": "🦄",
                "search": "unicorn"
            },
            {
                "name": "zebra",
                "emoji": "🦓",
                "search": "zebra"
            },
            {
                "name": "deer",
                "emoji": "🦌",
                "search": "deer"
            },
            {
                "name": "bison",
                "emoji": "🦬",
                "search": "bison"
            },
            {
                "name": "cow face",
                "emoji": "🐮",
                "search": "cow face"
            },
            {
                "name": "ox",
                "emoji": "🐂",
                "search": "ox"
            },
            {
                "name": "water buffalo",
                "emoji": "🐃",
                "search": "water buffalo"
            },
            {
                "name": "cow",
                "emoji": "🐄",
                "search": "cow cow2"
            },
            {
                "name": "pig face",
                "emoji": "🐷",
                "search": "pig face"
            },
            {
                "name": "pig",
                "emoji": "🐖",
                "search": "pig pig2"
            },
            {
                "name": "boar",
                "emoji": "🐗",
                "search": "boar"
            },
            {
                "name": "pig nose",
                "emoji": "🐽",
                "search": "pig nose"
            },
            {
                "name": "ram",
                "emoji": "🐏",
                "search": "ram"
            },
            {
                "name": "ewe",
                "emoji": "🐑",
                "search": "ewe sheep"
            },
            {
                "name": "goat",
                "emoji": "🐐",
                "search": "goat"
            },
            {
                "name": "camel",
                "emoji": "🐪",
                "search": "camel desert dromedary"
            },
            {
                "name": "two-hump camel",
                "emoji": "🐫",
                "search": "two-hump camel"
            },
            {
                "name": "llama",
                "emoji": "🦙",
                "search": "llama"
            },
            {
                "name": "giraffe",
                "emoji": "🦒",
                "search": "giraffe"
            },
            {
                "name": "elephant",
                "emoji": "🐘",
                "search": "elephant"
            },
            {
                "name": "mammoth",
                "emoji": "🦣",
                "search": "mammoth"
            },
            {
                "name": "rhinoceros",
                "emoji": "🦏",
                "search": "rhinoceros"
            },
            {
                "name": "hippopotamus",
                "emoji": "🦛",
                "search": "hippopotamus"
            },
            {
                "name": "mouse face",
                "emoji": "🐭",
                "search": "mouse face"
            },
            {
                "name": "mouse",
                "emoji": "🐁",
                "search": "mouse mouse2"
            },
            {
                "name": "rat",
                "emoji": "🐀",
                "search": "rat"
            },
            {
                "name": "hamster",
                "emoji": "🐹",
                "search": "hamster pet"
            },
            {
                "name": "rabbit face",
                "emoji": "🐰",
                "search": "rabbit face bunny"
            },
            {
                "name": "rabbit",
                "emoji": "🐇",
                "search": "rabbit rabbit2"
            },
            {
                "name": "chipmunk",
                "emoji": "🐿️",
                "search": "chipmunk"
            },
            {
                "name": "beaver",
                "emoji": "🦫",
                "search": "beaver"
            },
            {
                "name": "hedgehog",
                "emoji": "🦔",
                "search": "hedgehog"
            },
            {
                "name": "bat",
                "emoji": "🦇",
                "search": "bat"
            },
            {
                "name": "bear",
                "emoji": "🐻",
                "search": "bear"
            },
            {
                "name": "polar bear",
                "emoji": "🐻‍❄️",
                "search": "polar bear"
            },
            {
                "name": "koala",
                "emoji": "🐨",
                "search": "koala"
            },
            {
                "name": "panda",
                "emoji": "🐼",
                "search": "panda face"
            },
            {
                "name": "sloth",
                "emoji": "🦥",
                "search": "sloth"
            },
            {
                "name": "otter",
                "emoji": "🦦",
                "search": "otter"
            },
            {
                "name": "skunk",
                "emoji": "🦨",
                "search": "skunk"
            },
            {
                "name": "kangaroo",
                "emoji": "🦘",
                "search": "kangaroo"
            },
            {
                "name": "badger",
                "emoji": "🦡",
                "search": "badger"
            },
            {
                "name": "paw prints",
                "emoji": "🐾",
                "search": "paw prints feet"
            },
            {
                "name": "turkey",
                "emoji": "🦃",
                "search": "turkey thanksgiving"
            },
            {
                "name": "chicken",
                "emoji": "🐔",
                "search": "chicken"
            },
            {
                "name": "rooster",
                "emoji": "🐓",
                "search": "rooster"
            },
            {
                "name": "hatching chick",
                "emoji": "🐣",
                "search": "hatching chick"
            },
            {
                "name": "baby chick",
                "emoji": "🐤",
                "search": "baby chick"
            },
            {
                "name": "front-facing baby chick",
                "emoji": "🐥",
                "search": "front-facing baby chick hatched"
            },
            {
                "name": "bird",
                "emoji": "🐦",
                "search": "bird"
            },
            {
                "name": "penguin",
                "emoji": "🐧",
                "search": "penguin"
            },
            {
                "name": "dove",
                "emoji": "🕊️",
                "search": "dove peace"
            },
            {
                "name": "eagle",
                "emoji": "🦅",
                "search": "eagle"
            },
            {
                "name": "duck",
                "emoji": "🦆",
                "search": "duck"
            },
            {
                "name": "swan",
                "emoji": "🦢",
                "search": "swan"
            },
            {
                "name": "owl",
                "emoji": "🦉",
                "search": "owl"
            },
            {
                "name": "dodo",
                "emoji": "🦤",
                "search": "dodo"
            },
            {
                "name": "feather",
                "emoji": "🪶",
                "search": "feather"
            },
            {
                "name": "flamingo",
                "emoji": "🦩",
                "search": "flamingo"
            },
            {
                "name": "peacock",
                "emoji": "🦚",
                "search": "peacock"
            },
            {
                "name": "parrot",
                "emoji": "🦜",
                "search": "parrot"
            },
            {
                "name": "wing",
                "emoji": "🪽",
                "search": "wing fly"
            },
            {
                "name": "black bird",
                "emoji": "🐦‍⬛",
                "search": "black bird"
            },
            {
                "name": "goose",
                "emoji": "🪿",
                "search": "goose honk"
            },
            {
                "name": "frog",
                "emoji": "🐸",
                "search": "frog"
            },
            {
                "name": "crocodile",
                "emoji": "🐊",
                "search": "crocodile"
            },
            {
                "name": "turtle",
                "emoji": "🐢",
                "search": "turtle slow"
            },
            {
                "name": "lizard",
                "emoji": "🦎",
                "search": "lizard"
            },
            {
                "name": "snake",
                "emoji": "🐍",
                "search": "snake"
            },
            {
                "name": "dragon face",
                "emoji": "🐲",
                "search": "dragon face"
            },
            {
                "name": "dragon",
                "emoji": "🐉",
                "search": "dragon"
            },
            {
                "name": "sauropod",
                "emoji": "🦕",
                "search": "sauropod dinosaur"
            },
            {
                "name": "T-Rex",
                "emoji": "🦖",
                "search": "t-rex dinosaur"
            },
            {
                "name": "spouting whale",
                "emoji": "🐳",
                "search": "spouting whale sea"
            },
            {
                "name": "whale",
                "emoji": "🐋",
                "search": "whale whale2"
            },
            {
                "name": "dolphin",
                "emoji": "🐬",
                "search": "dolphin flipper"
            },
            {
                "name": "seal",
                "emoji": "🦭",
                "search": "seal"
            },
            {
                "name": "fish",
                "emoji": "🐟",
                "search": "fish"
            },
            {
                "name": "tropical fish",
                "emoji": "🐠",
                "search": "tropical fish"
            },
            {
                "name": "blowfish",
                "emoji": "🐡",
                "search": "blowfish"
            },
            {
                "name": "shark",
                "emoji": "🦈",
                "search": "shark"
            },
            {
                "name": "octopus",
                "emoji": "🐙",
                "search": "octopus"
            },
            {
                "name": "spiral shell",
                "emoji": "🐚",
                "search": "spiral shell sea beach"
            },
            {
                "name": "coral",
                "emoji": "🪸",
                "search": "coral"
            },
            {
                "name": "jellyfish",
                "emoji": "🪼",
                "search": "jellyfish"
            },
            {
                "name": "snail",
                "emoji": "🐌",
                "search": "snail slow"
            },
            {
                "name": "butterfly",
                "emoji": "🦋",
                "search": "butterfly"
            },
            {
                "name": "bug",
                "emoji": "🐛",
                "search": "bug"
            },
            {
                "name": "ant",
                "emoji": "🐜",
                "search": "ant"
            },
            {
                "name": "honeybee",
                "emoji": "🐝",
                "search": "honeybee bee"
            },
            {
                "name": "beetle",
                "emoji": "🪲",
                "search": "beetle"
            },
            {
                "name": "lady beetle",
                "emoji": "🐞",
                "search": "lady beetle bug"
            },
            {
                "name": "cricket",
                "emoji": "🦗",
                "search": "cricket"
            },
            {
                "name": "cockroach",
                "emoji": "🪳",
                "search": "cockroach"
            },
            {
                "name": "spider",
                "emoji": "🕷️",
                "search": "spider"
            },
            {
                "name": "spider web",
                "emoji": "🕸️",
                "search": "spider web"
            },
            {
                "name": "scorpion",
                "emoji": "🦂",
                "search": "scorpion"
            },
            {
                "name": "mosquito",
                "emoji": "🦟",
                "search": "mosquito"
            },
            {
                "name": "fly",
                "emoji": "🪰",
                "search": "fly"
            },
            {
                "name": "worm",
                "emoji": "🪱",
                "search": "worm"
            },
            {
                "name": "microbe",
                "emoji": "🦠",
                "search": "microbe germ"
            },
            {
                "name": "bouquet",
                "emoji": "💐",
                "search": "bouquet flowers"
            },
            {
                "name": "cherry blossom",
                "emoji": "🌸",
                "search": "cherry blossom flower spring"
            },
            {
                "name": "white flower",
                "emoji": "💮",
                "search": "white flower"
            },
            {
                "name": "lotus",
                "emoji": "🪷",
                "search": "lotus"
            },
            {
                "name": "rosette",
                "emoji": "🏵️",
                "search": "rosette"
            },
            {
                "name": "rose",
                "emoji": "🌹",
                "search": "rose flower"
            },
            {
                "name": "wilted flower",
                "emoji": "🥀",
                "search": "wilted flower"
            },
            {
                "name": "hibiscus",
                "emoji": "🌺",
                "search": "hibiscus"
            },
            {
                "name": "sunflower",
                "emoji": "🌻",
                "search": "sunflower"
            },
            {
                "name": "blossom",
                "emoji": "🌼",
                "search": "blossom"
            },
            {
                "name": "tulip",
                "emoji": "🌷",
                "search": "tulip flower"
            },
            {
                "name": "hyacinth",
                "emoji": "🪻",
                "search": "hyacinth"
            },
            {
                "name": "seedling",
                "emoji": "🌱",
                "search": "seedling plant"
            },
            {
                "name": "potted plant",
                "emoji": "🪴",
                "search": "potted plant"
            },
            {
                "name": "evergreen tree",
                "emoji": "🌲",
                "search": "evergreen tree wood"
            },
            {
                "name": "deciduous tree",
                "emoji": "🌳",
                "search": "deciduous tree wood"
            },
            {
                "name": "palm tree",
                "emoji": "🌴",
                "search": "palm tree"
            },
            {
                "name": "cactus",
                "emoji": "🌵",
                "search": "cactus"
            },
            {
                "name": "sheaf of rice",
                "emoji": "🌾",
                "search": "sheaf of rice ear"
            },
            {
                "name": "herb",
                "emoji": "🌿",
                "search": "herb"
            },
            {
                "name": "shamrock",
                "emoji": "☘️",
                "search": "shamrock"
            },
            {
                "name": "four leaf clover",
                "emoji": "🍀",
                "search": "four leaf clover luck"
            },
            {
                "name": "maple leaf",
                "emoji": "🍁",
                "search": "maple leaf canada"
            },
            {
                "name": "fallen leaf",
                "emoji": "🍂",
                "search": "fallen leaf autumn"
            },
            {
                "name": "leaf fluttering in wind",
                "emoji": "🍃",
                "search": "leaf fluttering in wind leaves"
            },
            {
                "name": "empty nest",
                "emoji": "🪹",
                "search": "empty nest"
            },
            {
                "name": "nest with eggs",
                "emoji": "🪺",
                "search": "nest with eggs"
            },
            {
                "name": "mushroom",
                "emoji": "🍄",
                "search": "mushroom fungus"
            }
        ]
    },
    [EEmojiCategory.FoodAndDrink]: {
        "name": "Food & Drink",
        "emojis": [
            {
                "name": "grapes",
                "emoji": "🍇",
                "search": "grapes"
            },
            {
                "name": "melon",
                "emoji": "🍈",
                "search": "melon"
            },
            {
                "name": "watermelon",
                "emoji": "🍉",
                "search": "watermelon"
            },
            {
                "name": "tangerine",
                "emoji": "🍊",
                "search": "tangerine orange mandarin"
            },
            {
                "name": "lemon",
                "emoji": "🍋",
                "search": "lemon"
            },
            {
                "name": "banana",
                "emoji": "🍌",
                "search": "banana fruit"
            },
            {
                "name": "pineapple",
                "emoji": "🍍",
                "search": "pineapple"
            },
            {
                "name": "mango",
                "emoji": "🥭",
                "search": "mango"
            },
            {
                "name": "red apple",
                "emoji": "🍎",
                "search": "red apple"
            },
            {
                "name": "green apple",
                "emoji": "🍏",
                "search": "green apple fruit"
            },
            {
                "name": "pear",
                "emoji": "🍐",
                "search": "pear"
            },
            {
                "name": "peach",
                "emoji": "🍑",
                "search": "peach"
            },
            {
                "name": "cherries",
                "emoji": "🍒",
                "search": "cherries fruit"
            },
            {
                "name": "strawberry",
                "emoji": "🍓",
                "search": "strawberry fruit"
            },
            {
                "name": "blueberries",
                "emoji": "🫐",
                "search": "blueberries"
            },
            {
                "name": "kiwi fruit",
                "emoji": "🥝",
                "search": "kiwi fruit"
            },
            {
                "name": "tomato",
                "emoji": "🍅",
                "search": "tomato"
            },
            {
                "name": "olive",
                "emoji": "🫒",
                "search": "olive"
            },
            {
                "name": "coconut",
                "emoji": "🥥",
                "search": "coconut"
            },
            {
                "name": "avocado",
                "emoji": "🥑",
                "search": "avocado"
            },
            {
                "name": "eggplant",
                "emoji": "🍆",
                "search": "eggplant aubergine"
            },
            {
                "name": "potato",
                "emoji": "🥔",
                "search": "potato"
            },
            {
                "name": "carrot",
                "emoji": "🥕",
                "search": "carrot"
            },
            {
                "name": "ear of corn",
                "emoji": "🌽",
                "search": "ear of corn"
            },
            {
                "name": "hot pepper",
                "emoji": "🌶️",
                "search": "hot pepper spicy"
            },
            {
                "name": "bell pepper",
                "emoji": "🫑",
                "search": "bell pepper"
            },
            {
                "name": "cucumber",
                "emoji": "🥒",
                "search": "cucumber"
            },
            {
                "name": "leafy green",
                "emoji": "🥬",
                "search": "leafy green"
            },
            {
                "name": "broccoli",
                "emoji": "🥦",
                "search": "broccoli"
            },
            {
                "name": "garlic",
                "emoji": "🧄",
                "search": "garlic"
            },
            {
                "name": "onion",
                "emoji": "🧅",
                "search": "onion"
            },
            {
                "name": "peanuts",
                "emoji": "🥜",
                "search": "peanuts"
            },
            {
                "name": "beans",
                "emoji": "🫘",
                "search": "beans"
            },
            {
                "name": "chestnut",
                "emoji": "🌰",
                "search": "chestnut"
            },
            {
                "name": "ginger root",
                "emoji": "🫚",
                "search": "ginger root"
            },
            {
                "name": "pea pod",
                "emoji": "🫛",
                "search": "pea pod"
            },
            {
                "name": "bread",
                "emoji": "🍞",
                "search": "bread toast"
            },
            {
                "name": "croissant",
                "emoji": "🥐",
                "search": "croissant"
            },
            {
                "name": "baguette bread",
                "emoji": "🥖",
                "search": "baguette bread"
            },
            {
                "name": "flatbread",
                "emoji": "🫓",
                "search": "flatbread"
            },
            {
                "name": "pretzel",
                "emoji": "🥨",
                "search": "pretzel"
            },
            {
                "name": "bagel",
                "emoji": "🥯",
                "search": "bagel"
            },
            {
                "name": "pancakes",
                "emoji": "🥞",
                "search": "pancakes"
            },
            {
                "name": "waffle",
                "emoji": "🧇",
                "search": "waffle"
            },
            {
                "name": "cheese wedge",
                "emoji": "🧀",
                "search": "cheese wedge"
            },
            {
                "name": "meat on bone",
                "emoji": "🍖",
                "search": "meat on bone"
            },
            {
                "name": "poultry leg",
                "emoji": "🍗",
                "search": "poultry leg meat chicken"
            },
            {
                "name": "cut of meat",
                "emoji": "🥩",
                "search": "cut of meat"
            },
            {
                "name": "bacon",
                "emoji": "🥓",
                "search": "bacon"
            },
            {
                "name": "hamburger",
                "emoji": "🍔",
                "search": "hamburger burger"
            },
            {
                "name": "french fries",
                "emoji": "🍟",
                "search": "french fries"
            },
            {
                "name": "pizza",
                "emoji": "🍕",
                "search": "pizza"
            },
            {
                "name": "hot dog",
                "emoji": "🌭",
                "search": "hot dog hotdog"
            },
            {
                "name": "sandwich",
                "emoji": "🥪",
                "search": "sandwich"
            },
            {
                "name": "taco",
                "emoji": "🌮",
                "search": "taco"
            },
            {
                "name": "burrito",
                "emoji": "🌯",
                "search": "burrito"
            },
            {
                "name": "tamale",
                "emoji": "🫔",
                "search": "tamale"
            },
            {
                "name": "stuffed flatbread",
                "emoji": "🥙",
                "search": "stuffed flatbread"
            },
            {
                "name": "falafel",
                "emoji": "🧆",
                "search": "falafel"
            },
            {
                "name": "egg",
                "emoji": "🥚",
                "search": "egg"
            },
            {
                "name": "cooking",
                "emoji": "🍳",
                "search": "cooking breakfast fried egg"
            },
            {
                "name": "shallow pan of food",
                "emoji": "🥘",
                "search": "shallow pan of food paella curry"
            },
            {
                "name": "pot of food",
                "emoji": "🍲",
                "search": "pot of food stew"
            },
            {
                "name": "fondue",
                "emoji": "🫕",
                "search": "fondue"
            },
            {
                "name": "bowl with spoon",
                "emoji": "🥣",
                "search": "bowl with spoon"
            },
            {
                "name": "green salad",
                "emoji": "🥗",
                "search": "green salad"
            },
            {
                "name": "popcorn",
                "emoji": "🍿",
                "search": "popcorn"
            },
            {
                "name": "butter",
                "emoji": "🧈",
                "search": "butter"
            },
            {
                "name": "salt",
                "emoji": "🧂",
                "search": "salt"
            },
            {
                "name": "canned food",
                "emoji": "🥫",
                "search": "canned food"
            },
            {
                "name": "bento box",
                "emoji": "🍱",
                "search": "bento box"
            },
            {
                "name": "rice cracker",
                "emoji": "🍘",
                "search": "rice cracker"
            },
            {
                "name": "rice ball",
                "emoji": "🍙",
                "search": "rice ball"
            },
            {
                "name": "cooked rice",
                "emoji": "🍚",
                "search": "cooked rice"
            },
            {
                "name": "curry rice",
                "emoji": "🍛",
                "search": "curry rice"
            },
            {
                "name": "steaming bowl",
                "emoji": "🍜",
                "search": "steaming bowl noodle ramen"
            },
            {
                "name": "spaghetti",
                "emoji": "🍝",
                "search": "spaghetti pasta"
            },
            {
                "name": "roasted sweet potato",
                "emoji": "🍠",
                "search": "roasted sweet potato"
            },
            {
                "name": "oden",
                "emoji": "🍢",
                "search": "oden"
            },
            {
                "name": "sushi",
                "emoji": "🍣",
                "search": "sushi"
            },
            {
                "name": "fried shrimp",
                "emoji": "🍤",
                "search": "fried shrimp tempura"
            },
            {
                "name": "fish cake with swirl",
                "emoji": "🍥",
                "search": "fish cake with swirl"
            },
            {
                "name": "moon cake",
                "emoji": "🥮",
                "search": "moon cake"
            },
            {
                "name": "dango",
                "emoji": "🍡",
                "search": "dango"
            },
            {
                "name": "dumpling",
                "emoji": "🥟",
                "search": "dumpling"
            },
            {
                "name": "fortune cookie",
                "emoji": "🥠",
                "search": "fortune cookie"
            },
            {
                "name": "takeout box",
                "emoji": "🥡",
                "search": "takeout box"
            },
            {
                "name": "crab",
                "emoji": "🦀",
                "search": "crab"
            },
            {
                "name": "lobster",
                "emoji": "🦞",
                "search": "lobster"
            },
            {
                "name": "shrimp",
                "emoji": "🦐",
                "search": "shrimp"
            },
            {
                "name": "squid",
                "emoji": "🦑",
                "search": "squid"
            },
            {
                "name": "oyster",
                "emoji": "🦪",
                "search": "oyster"
            },
            {
                "name": "soft ice cream",
                "emoji": "🍦",
                "search": "soft ice cream icecream"
            },
            {
                "name": "shaved ice",
                "emoji": "🍧",
                "search": "shaved ice"
            },
            {
                "name": "ice cream",
                "emoji": "🍨",
                "search": "ice cream"
            },
            {
                "name": "doughnut",
                "emoji": "🍩",
                "search": "doughnut"
            },
            {
                "name": "cookie",
                "emoji": "🍪",
                "search": "cookie"
            },
            {
                "name": "birthday cake",
                "emoji": "🎂",
                "search": "birthday cake party"
            },
            {
                "name": "shortcake",
                "emoji": "🍰",
                "search": "shortcake dessert cake"
            },
            {
                "name": "cupcake",
                "emoji": "🧁",
                "search": "cupcake"
            },
            {
                "name": "pie",
                "emoji": "🥧",
                "search": "pie"
            },
            {
                "name": "chocolate bar",
                "emoji": "🍫",
                "search": "chocolate bar"
            },
            {
                "name": "candy",
                "emoji": "🍬",
                "search": "candy sweet"
            },
            {
                "name": "lollipop",
                "emoji": "🍭",
                "search": "lollipop"
            },
            {
                "name": "custard",
                "emoji": "🍮",
                "search": "custard"
            },
            {
                "name": "honey pot",
                "emoji": "🍯",
                "search": "honey pot"
            },
            {
                "name": "baby bottle",
                "emoji": "🍼",
                "search": "baby bottle milk"
            },
            {
                "name": "glass of milk",
                "emoji": "🥛",
                "search": "glass of milk"
            },
            {
                "name": "hot beverage",
                "emoji": "☕",
                "search": "hot beverage cafe espresso coffee"
            },
            {
                "name": "teapot",
                "emoji": "🫖",
                "search": "teapot"
            },
            {
                "name": "teacup without handle",
                "emoji": "🍵",
                "search": "teacup without handle green breakfast tea"
            },
            {
                "name": "sake",
                "emoji": "🍶",
                "search": "sake"
            },
            {
                "name": "bottle with popping cork",
                "emoji": "🍾",
                "search": "bottle with popping cork bubbly celebration champagne"
            },
            {
                "name": "wine glass",
                "emoji": "🍷",
                "search": "wine glass"
            },
            {
                "name": "cocktail glass",
                "emoji": "🍸",
                "search": "cocktail glass drink"
            },
            {
                "name": "tropical drink",
                "emoji": "🍹",
                "search": "tropical drink summer vacation"
            },
            {
                "name": "beer mug",
                "emoji": "🍺",
                "search": "beer mug drink"
            },
            {
                "name": "clinking beer mugs",
                "emoji": "🍻",
                "search": "clinking beer mugs drinks beers"
            },
            {
                "name": "clinking glasses",
                "emoji": "🥂",
                "search": "clinking glasses cheers toast"
            },
            {
                "name": "tumbler glass",
                "emoji": "🥃",
                "search": "tumbler glass whisky"
            },
            {
                "name": "pouring liquid",
                "emoji": "🫗",
                "search": "pouring liquid"
            },
            {
                "name": "cup with straw",
                "emoji": "🥤",
                "search": "cup with straw"
            },
            {
                "name": "bubble tea",
                "emoji": "🧋",
                "search": "bubble tea"
            },
            {
                "name": "beverage box",
                "emoji": "🧃",
                "search": "beverage box"
            },
            {
                "name": "mate",
                "emoji": "🧉",
                "search": "mate"
            },
            {
                "name": "ice",
                "emoji": "🧊",
                "search": "ice cube"
            },
            {
                "name": "chopsticks",
                "emoji": "🥢",
                "search": "chopsticks"
            },
            {
                "name": "fork and knife with plate",
                "emoji": "🍽️",
                "search": "fork and knife with plate dining dinner cutlery"
            },
            {
                "name": "fork and knife",
                "emoji": "🍴",
                "search": "fork and knife cutlery"
            },
            {
                "name": "spoon",
                "emoji": "🥄",
                "search": "spoon"
            },
            {
                "name": "kitchen knife",
                "emoji": "🔪",
                "search": "kitchen knife cut chop hocho"
            },
            {
                "name": "jar",
                "emoji": "🫙",
                "search": "jar"
            },
            {
                "name": "amphora",
                "emoji": "🏺",
                "search": "amphora"
            }
        ]
    },
    [EEmojiCategory.TravelAndPlaces]: {
        "name": "Travel & Places",
        "emojis": [
            {
                "name": "globe showing Europe-Africa",
                "emoji": "🌍",
                "search": "globe showing europe-africa world international earth africa"
            },
            {
                "name": "globe showing Americas",
                "emoji": "🌎",
                "search": "globe showing americas world international earth"
            },
            {
                "name": "globe showing Asia-Australia",
                "emoji": "🌏",
                "search": "globe showing asia-australia world international earth asia"
            },
            {
                "name": "globe with meridians",
                "emoji": "🌐",
                "search": "globe with meridians world global international"
            },
            {
                "name": "world map",
                "emoji": "🗺️",
                "search": "world map travel"
            },
            {
                "name": "map of Japan",
                "emoji": "🗾",
                "search": "map of japan"
            },
            {
                "name": "compass",
                "emoji": "🧭",
                "search": "compass"
            },
            {
                "name": "snow-capped mountain",
                "emoji": "🏔️",
                "search": "snow-capped mountain snow"
            },
            {
                "name": "mountain",
                "emoji": "⛰️",
                "search": "mountain"
            },
            {
                "name": "volcano",
                "emoji": "🌋",
                "search": "volcano"
            },
            {
                "name": "mount fuji",
                "emoji": "🗻",
                "search": "mount fuji"
            },
            {
                "name": "camping",
                "emoji": "🏕️",
                "search": "camping"
            },
            {
                "name": "beach with umbrella",
                "emoji": "🏖️",
                "search": "beach with umbrella"
            },
            {
                "name": "desert",
                "emoji": "🏜️",
                "search": "desert"
            },
            {
                "name": "desert island",
                "emoji": "🏝️",
                "search": "desert island"
            },
            {
                "name": "national park",
                "emoji": "🏞️",
                "search": "national park"
            },
            {
                "name": "stadium",
                "emoji": "🏟️",
                "search": "stadium"
            },
            {
                "name": "classical building",
                "emoji": "🏛️",
                "search": "classical building"
            },
            {
                "name": "building construction",
                "emoji": "🏗️",
                "search": "building construction"
            },
            {
                "name": "brick",
                "emoji": "🧱",
                "search": "brick bricks"
            },
            {
                "name": "rock",
                "emoji": "🪨",
                "search": "rock"
            },
            {
                "name": "wood",
                "emoji": "🪵",
                "search": "wood"
            },
            {
                "name": "hut",
                "emoji": "🛖",
                "search": "hut"
            },
            {
                "name": "houses",
                "emoji": "🏘️",
                "search": "houses"
            },
            {
                "name": "derelict house",
                "emoji": "🏚️",
                "search": "derelict house"
            },
            {
                "name": "house",
                "emoji": "🏠",
                "search": "house"
            },
            {
                "name": "house with garden",
                "emoji": "🏡",
                "search": "house with garden"
            },
            {
                "name": "office building",
                "emoji": "🏢",
                "search": "office building"
            },
            {
                "name": "Japanese post office",
                "emoji": "🏣",
                "search": "japanese post office"
            },
            {
                "name": "post office",
                "emoji": "🏤",
                "search": "post office european"
            },
            {
                "name": "hospital",
                "emoji": "🏥",
                "search": "hospital"
            },
            {
                "name": "bank",
                "emoji": "🏦",
                "search": "bank"
            },
            {
                "name": "hotel",
                "emoji": "🏨",
                "search": "hotel"
            },
            {
                "name": "love hotel",
                "emoji": "🏩",
                "search": "love hotel"
            },
            {
                "name": "convenience store",
                "emoji": "🏪",
                "search": "convenience store"
            },
            {
                "name": "school",
                "emoji": "🏫",
                "search": "school"
            },
            {
                "name": "department store",
                "emoji": "🏬",
                "search": "department store"
            },
            {
                "name": "factory",
                "emoji": "🏭",
                "search": "factory"
            },
            {
                "name": "Japanese castle",
                "emoji": "🏯",
                "search": "japanese castle"
            },
            {
                "name": "castle",
                "emoji": "🏰",
                "search": "castle european"
            },
            {
                "name": "wedding",
                "emoji": "💒",
                "search": "wedding marriage"
            },
            {
                "name": "Tokyo tower",
                "emoji": "🗼",
                "search": "tokyo tower"
            },
            {
                "name": "Statue of Liberty",
                "emoji": "🗽",
                "search": "statue of liberty"
            },
            {
                "name": "church",
                "emoji": "⛪",
                "search": "church"
            },
            {
                "name": "mosque",
                "emoji": "🕌",
                "search": "mosque"
            },
            {
                "name": "hindu temple",
                "emoji": "🛕",
                "search": "hindu temple"
            },
            {
                "name": "synagogue",
                "emoji": "🕍",
                "search": "synagogue"
            },
            {
                "name": "shinto shrine",
                "emoji": "⛩️",
                "search": "shinto shrine"
            },
            {
                "name": "kaaba",
                "emoji": "🕋",
                "search": "kaaba"
            },
            {
                "name": "fountain",
                "emoji": "⛲",
                "search": "fountain"
            },
            {
                "name": "tent",
                "emoji": "⛺",
                "search": "tent camping"
            },
            {
                "name": "foggy",
                "emoji": "🌁",
                "search": "foggy karl"
            },
            {
                "name": "night with stars",
                "emoji": "🌃",
                "search": "night with stars"
            },
            {
                "name": "cityscape",
                "emoji": "🏙️",
                "search": "cityscape skyline"
            },
            {
                "name": "sunrise over mountains",
                "emoji": "🌄",
                "search": "sunrise over mountains"
            },
            {
                "name": "sunrise",
                "emoji": "🌅",
                "search": "sunrise"
            },
            {
                "name": "cityscape at dusk",
                "emoji": "🌆",
                "search": "cityscape at dusk city sunset"
            },
            {
                "name": "sunset",
                "emoji": "🌇",
                "search": "sunset city sunrise"
            },
            {
                "name": "bridge at night",
                "emoji": "🌉",
                "search": "bridge at night"
            },
            {
                "name": "hot springs",
                "emoji": "♨️",
                "search": "hot springs hotsprings"
            },
            {
                "name": "carousel horse",
                "emoji": "🎠",
                "search": "carousel horse"
            },
            {
                "name": "playground slide",
                "emoji": "🛝",
                "search": "playground slide"
            },
            {
                "name": "ferris wheel",
                "emoji": "🎡",
                "search": "ferris wheel"
            },
            {
                "name": "roller coaster",
                "emoji": "🎢",
                "search": "roller coaster"
            },
            {
                "name": "barber pole",
                "emoji": "💈",
                "search": "barber pole"
            },
            {
                "name": "circus tent",
                "emoji": "🎪",
                "search": "circus tent"
            },
            {
                "name": "locomotive",
                "emoji": "🚂",
                "search": "locomotive train steam"
            },
            {
                "name": "railway car",
                "emoji": "🚃",
                "search": "railway car"
            },
            {
                "name": "high-speed train",
                "emoji": "🚄",
                "search": "high-speed train bullettrain side"
            },
            {
                "name": "bullet train",
                "emoji": "🚅",
                "search": "bullet train bullettrain front"
            },
            {
                "name": "train",
                "emoji": "🚆",
                "search": "train train2"
            },
            {
                "name": "metro",
                "emoji": "🚇",
                "search": "metro"
            },
            {
                "name": "light rail",
                "emoji": "🚈",
                "search": "light rail"
            },
            {
                "name": "station",
                "emoji": "🚉",
                "search": "station"
            },
            {
                "name": "tram",
                "emoji": "🚊",
                "search": "tram"
            },
            {
                "name": "monorail",
                "emoji": "🚝",
                "search": "monorail"
            },
            {
                "name": "mountain railway",
                "emoji": "🚞",
                "search": "mountain railway"
            },
            {
                "name": "tram car",
                "emoji": "🚋",
                "search": "tram car train"
            },
            {
                "name": "bus",
                "emoji": "🚌",
                "search": "bus"
            },
            {
                "name": "oncoming bus",
                "emoji": "🚍",
                "search": "oncoming bus"
            },
            {
                "name": "trolleybus",
                "emoji": "🚎",
                "search": "trolleybus"
            },
            {
                "name": "minibus",
                "emoji": "🚐",
                "search": "minibus"
            },
            {
                "name": "ambulance",
                "emoji": "🚑",
                "search": "ambulance"
            },
            {
                "name": "fire engine",
                "emoji": "🚒",
                "search": "fire engine"
            },
            {
                "name": "police car",
                "emoji": "🚓",
                "search": "police car"
            },
            {
                "name": "oncoming police car",
                "emoji": "🚔",
                "search": "oncoming police car"
            },
            {
                "name": "taxi",
                "emoji": "🚕",
                "search": "taxi"
            },
            {
                "name": "oncoming taxi",
                "emoji": "🚖",
                "search": "oncoming taxi"
            },
            {
                "name": "automobile",
                "emoji": "🚗",
                "search": "automobile car red"
            },
            {
                "name": "oncoming automobile",
                "emoji": "🚘",
                "search": "oncoming automobile"
            },
            {
                "name": "sport utility vehicle",
                "emoji": "🚙",
                "search": "sport utility vehicle blue car"
            },
            {
                "name": "pickup truck",
                "emoji": "🛻",
                "search": "pickup truck"
            },
            {
                "name": "delivery truck",
                "emoji": "🚚",
                "search": "delivery truck"
            },
            {
                "name": "articulated lorry",
                "emoji": "🚛",
                "search": "articulated lorry"
            },
            {
                "name": "tractor",
                "emoji": "🚜",
                "search": "tractor"
            },
            {
                "name": "racing car",
                "emoji": "🏎️",
                "search": "racing car"
            },
            {
                "name": "motorcycle",
                "emoji": "🏍️",
                "search": "motorcycle"
            },
            {
                "name": "motor scooter",
                "emoji": "🛵",
                "search": "motor scooter"
            },
            {
                "name": "manual wheelchair",
                "emoji": "🦽",
                "search": "manual wheelchair"
            },
            {
                "name": "motorized wheelchair",
                "emoji": "🦼",
                "search": "motorized wheelchair"
            },
            {
                "name": "auto rickshaw",
                "emoji": "🛺",
                "search": "auto rickshaw"
            },
            {
                "name": "bicycle",
                "emoji": "🚲",
                "search": "bicycle bike"
            },
            {
                "name": "kick scooter",
                "emoji": "🛴",
                "search": "kick scooter"
            },
            {
                "name": "skateboard",
                "emoji": "🛹",
                "search": "skateboard"
            },
            {
                "name": "roller skate",
                "emoji": "🛼",
                "search": "roller skate"
            },
            {
                "name": "bus stop",
                "emoji": "🚏",
                "search": "bus stop busstop"
            },
            {
                "name": "motorway",
                "emoji": "🛣️",
                "search": "motorway"
            },
            {
                "name": "railway track",
                "emoji": "🛤️",
                "search": "railway track"
            },
            {
                "name": "oil drum",
                "emoji": "🛢️",
                "search": "oil drum"
            },
            {
                "name": "fuel pump",
                "emoji": "⛽",
                "search": "fuel pump fuelpump"
            },
            {
                "name": "wheel",
                "emoji": "🛞",
                "search": "wheel"
            },
            {
                "name": "police car light",
                "emoji": "🚨",
                "search": "police car light 911 emergency rotating"
            },
            {
                "name": "horizontal traffic light",
                "emoji": "🚥",
                "search": "horizontal traffic light"
            },
            {
                "name": "vertical traffic light",
                "emoji": "🚦",
                "search": "vertical traffic light semaphore"
            },
            {
                "name": "stop sign",
                "emoji": "🛑",
                "search": "stop sign"
            },
            {
                "name": "construction",
                "emoji": "🚧",
                "search": "construction wip"
            },
            {
                "name": "anchor",
                "emoji": "⚓",
                "search": "anchor ship"
            },
            {
                "name": "ring buoy",
                "emoji": "🛟",
                "search": "ring buoy life preserver"
            },
            {
                "name": "sailboat",
                "emoji": "⛵",
                "search": "sailboat boat"
            },
            {
                "name": "canoe",
                "emoji": "🛶",
                "search": "canoe"
            },
            {
                "name": "speedboat",
                "emoji": "🚤",
                "search": "speedboat ship"
            },
            {
                "name": "passenger ship",
                "emoji": "🛳️",
                "search": "passenger ship cruise"
            },
            {
                "name": "ferry",
                "emoji": "⛴️",
                "search": "ferry"
            },
            {
                "name": "motor boat",
                "emoji": "🛥️",
                "search": "motor boat"
            },
            {
                "name": "ship",
                "emoji": "🚢",
                "search": "ship"
            },
            {
                "name": "airplane",
                "emoji": "✈️",
                "search": "airplane flight"
            },
            {
                "name": "small airplane",
                "emoji": "🛩️",
                "search": "small airplane flight"
            },
            {
                "name": "airplane departure",
                "emoji": "🛫",
                "search": "airplane departure flight"
            },
            {
                "name": "airplane arrival",
                "emoji": "🛬",
                "search": "airplane arrival flight"
            },
            {
                "name": "parachute",
                "emoji": "🪂",
                "search": "parachute"
            },
            {
                "name": "seat",
                "emoji": "💺",
                "search": "seat"
            },
            {
                "name": "helicopter",
                "emoji": "🚁",
                "search": "helicopter"
            },
            {
                "name": "suspension railway",
                "emoji": "🚟",
                "search": "suspension railway"
            },
            {
                "name": "mountain cableway",
                "emoji": "🚠",
                "search": "mountain cableway"
            },
            {
                "name": "aerial tramway",
                "emoji": "🚡",
                "search": "aerial tramway"
            },
            {
                "name": "satellite",
                "emoji": "🛰️",
                "search": "satellite orbit space artificial"
            },
            {
                "name": "rocket",
                "emoji": "🚀",
                "search": "rocket ship launch"
            },
            {
                "name": "flying saucer",
                "emoji": "🛸",
                "search": "flying saucer ufo"
            },
            {
                "name": "bellhop bell",
                "emoji": "🛎️",
                "search": "bellhop bell"
            },
            {
                "name": "luggage",
                "emoji": "🧳",
                "search": "luggage"
            },
            {
                "name": "hourglass done",
                "emoji": "⌛",
                "search": "hourglass done time"
            },
            {
                "name": "hourglass not done",
                "emoji": "⏳",
                "search": "hourglass not done time flowing sand"
            },
            {
                "name": "watch",
                "emoji": "⌚",
                "search": "watch time"
            },
            {
                "name": "alarm clock",
                "emoji": "⏰",
                "search": "alarm clock morning"
            },
            {
                "name": "stopwatch",
                "emoji": "⏱️",
                "search": "stopwatch"
            },
            {
                "name": "timer clock",
                "emoji": "⏲️",
                "search": "timer clock"
            },
            {
                "name": "mantelpiece clock",
                "emoji": "🕰️",
                "search": "mantelpiece clock"
            },
            {
                "name": "twelve o’clock",
                "emoji": "🕛",
                "search": "twelve o’clock clock12"
            },
            {
                "name": "twelve-thirty",
                "emoji": "🕧",
                "search": "twelve-thirty clock1230"
            },
            {
                "name": "one o’clock",
                "emoji": "🕐",
                "search": "one o’clock clock1"
            },
            {
                "name": "one-thirty",
                "emoji": "🕜",
                "search": "one-thirty clock130"
            },
            {
                "name": "two o’clock",
                "emoji": "🕑",
                "search": "two o’clock clock2"
            },
            {
                "name": "two-thirty",
                "emoji": "🕝",
                "search": "two-thirty clock230"
            },
            {
                "name": "three o’clock",
                "emoji": "🕒",
                "search": "three o’clock clock3"
            },
            {
                "name": "three-thirty",
                "emoji": "🕞",
                "search": "three-thirty clock330"
            },
            {
                "name": "four o’clock",
                "emoji": "🕓",
                "search": "four o’clock clock4"
            },
            {
                "name": "four-thirty",
                "emoji": "🕟",
                "search": "four-thirty clock430"
            },
            {
                "name": "five o’clock",
                "emoji": "🕔",
                "search": "five o’clock clock5"
            },
            {
                "name": "five-thirty",
                "emoji": "🕠",
                "search": "five-thirty clock530"
            },
            {
                "name": "six o’clock",
                "emoji": "🕕",
                "search": "six o’clock clock6"
            },
            {
                "name": "six-thirty",
                "emoji": "🕡",
                "search": "six-thirty clock630"
            },
            {
                "name": "seven o’clock",
                "emoji": "🕖",
                "search": "seven o’clock clock7"
            },
            {
                "name": "seven-thirty",
                "emoji": "🕢",
                "search": "seven-thirty clock730"
            },
            {
                "name": "eight o’clock",
                "emoji": "🕗",
                "search": "eight o’clock clock8"
            },
            {
                "name": "eight-thirty",
                "emoji": "🕣",
                "search": "eight-thirty clock830"
            },
            {
                "name": "nine o’clock",
                "emoji": "🕘",
                "search": "nine o’clock clock9"
            },
            {
                "name": "nine-thirty",
                "emoji": "🕤",
                "search": "nine-thirty clock930"
            },
            {
                "name": "ten o’clock",
                "emoji": "🕙",
                "search": "ten o’clock clock10"
            },
            {
                "name": "ten-thirty",
                "emoji": "🕥",
                "search": "ten-thirty clock1030"
            },
            {
                "name": "eleven o’clock",
                "emoji": "🕚",
                "search": "eleven o’clock clock11"
            },
            {
                "name": "eleven-thirty",
                "emoji": "🕦",
                "search": "eleven-thirty clock1130"
            },
            {
                "name": "new moon",
                "emoji": "🌑",
                "search": "new moon"
            },
            {
                "name": "waxing crescent moon",
                "emoji": "🌒",
                "search": "waxing crescent moon"
            },
            {
                "name": "first quarter moon",
                "emoji": "🌓",
                "search": "first quarter moon"
            },
            {
                "name": "waxing gibbous moon",
                "emoji": "🌔",
                "search": "waxing gibbous moon"
            },
            {
                "name": "full moon",
                "emoji": "🌕",
                "search": "full moon"
            },
            {
                "name": "waning gibbous moon",
                "emoji": "🌖",
                "search": "waning gibbous moon"
            },
            {
                "name": "last quarter moon",
                "emoji": "🌗",
                "search": "last quarter moon"
            },
            {
                "name": "waning crescent moon",
                "emoji": "🌘",
                "search": "waning crescent moon"
            },
            {
                "name": "crescent moon",
                "emoji": "🌙",
                "search": "crescent moon night"
            },
            {
                "name": "new moon face",
                "emoji": "🌚",
                "search": "new moon face with"
            },
            {
                "name": "first quarter moon face",
                "emoji": "🌛",
                "search": "first quarter moon face with"
            },
            {
                "name": "last quarter moon face",
                "emoji": "🌜",
                "search": "last quarter moon face with"
            },
            {
                "name": "thermometer",
                "emoji": "🌡️",
                "search": "thermometer"
            },
            {
                "name": "sun",
                "emoji": "☀️",
                "search": "sun weather sunny"
            },
            {
                "name": "full moon face",
                "emoji": "🌝",
                "search": "full moon face with"
            },
            {
                "name": "sun with face",
                "emoji": "🌞",
                "search": "sun with face summer"
            },
            {
                "name": "ringed planet",
                "emoji": "🪐",
                "search": "ringed planet"
            },
            {
                "name": "star",
                "emoji": "⭐",
                "search": "star"
            },
            {
                "name": "glowing star",
                "emoji": "🌟",
                "search": "glowing star star2"
            },
            {
                "name": "shooting star",
                "emoji": "🌠",
                "search": "shooting star stars"
            },
            {
                "name": "milky way",
                "emoji": "🌌",
                "search": "milky way"
            },
            {
                "name": "cloud",
                "emoji": "☁️",
                "search": "cloud"
            },
            {
                "name": "sun behind cloud",
                "emoji": "⛅",
                "search": "sun behind cloud weather partly sunny"
            },
            {
                "name": "cloud with lightning and rain",
                "emoji": "⛈️",
                "search": "cloud with lightning and rain"
            },
            {
                "name": "sun behind small cloud",
                "emoji": "🌤️",
                "search": "sun behind small cloud"
            },
            {
                "name": "sun behind large cloud",
                "emoji": "🌥️",
                "search": "sun behind large cloud"
            },
            {
                "name": "sun behind rain cloud",
                "emoji": "🌦️",
                "search": "sun behind rain cloud"
            },
            {
                "name": "cloud with rain",
                "emoji": "🌧️",
                "search": "cloud with rain"
            },
            {
                "name": "cloud with snow",
                "emoji": "🌨️",
                "search": "cloud with snow"
            },
            {
                "name": "cloud with lightning",
                "emoji": "🌩️",
                "search": "cloud with lightning"
            },
            {
                "name": "tornado",
                "emoji": "🌪️",
                "search": "tornado"
            },
            {
                "name": "fog",
                "emoji": "🌫️",
                "search": "fog"
            },
            {
                "name": "wind face",
                "emoji": "🌬️",
                "search": "wind face"
            },
            {
                "name": "cyclone",
                "emoji": "🌀",
                "search": "cyclone swirl"
            },
            {
                "name": "rainbow",
                "emoji": "🌈",
                "search": "rainbow"
            },
            {
                "name": "closed umbrella",
                "emoji": "🌂",
                "search": "closed umbrella weather rain"
            },
            {
                "name": "umbrella",
                "emoji": "☂️",
                "search": "umbrella open"
            },
            {
                "name": "umbrella with rain drops",
                "emoji": "☔",
                "search": "umbrella with rain drops weather"
            },
            {
                "name": "umbrella on ground",
                "emoji": "⛱️",
                "search": "umbrella on ground beach parasol"
            },
            {
                "name": "high voltage",
                "emoji": "⚡",
                "search": "high voltage lightning thunder zap"
            },
            {
                "name": "snowflake",
                "emoji": "❄️",
                "search": "snowflake winter cold weather"
            },
            {
                "name": "snowman",
                "emoji": "☃️",
                "search": "snowman winter christmas with snow"
            },
            {
                "name": "snowman without snow",
                "emoji": "⛄",
                "search": "snowman without snow winter"
            },
            {
                "name": "comet",
                "emoji": "☄️",
                "search": "comet"
            },
            {
                "name": "fire",
                "emoji": "🔥",
                "search": "fire burn"
            },
            {
                "name": "droplet",
                "emoji": "💧",
                "search": "droplet water"
            },
            {
                "name": "water wave",
                "emoji": "🌊",
                "search": "water wave sea ocean"
            }
        ]
    },
    [EEmojiCategory.Activities]: {
        "name": "Activities",
        "emojis": [
            {
                "name": "jack-o-lantern",
                "emoji": "🎃",
                "search": "jack-o-lantern halloween jack o lantern"
            },
            {
                "name": "Christmas tree",
                "emoji": "🎄",
                "search": "christmas tree"
            },
            {
                "name": "fireworks",
                "emoji": "🎆",
                "search": "fireworks festival celebration"
            },
            {
                "name": "sparkler",
                "emoji": "🎇",
                "search": "sparkler"
            },
            {
                "name": "firecracker",
                "emoji": "🧨",
                "search": "firecracker"
            },
            {
                "name": "sparkles",
                "emoji": "✨",
                "search": "sparkles shiny"
            },
            {
                "name": "balloon",
                "emoji": "🎈",
                "search": "balloon party birthday"
            },
            {
                "name": "party popper",
                "emoji": "🎉",
                "search": "party popper hooray tada"
            },
            {
                "name": "confetti ball",
                "emoji": "🎊",
                "search": "confetti ball"
            },
            {
                "name": "tanabata tree",
                "emoji": "🎋",
                "search": "tanabata tree"
            },
            {
                "name": "pine decoration",
                "emoji": "🎍",
                "search": "pine decoration bamboo"
            },
            {
                "name": "Japanese dolls",
                "emoji": "🎎",
                "search": "japanese dolls"
            },
            {
                "name": "carp streamer",
                "emoji": "🎏",
                "search": "carp streamer flags"
            },
            {
                "name": "wind chime",
                "emoji": "🎐",
                "search": "wind chime"
            },
            {
                "name": "moon viewing ceremony",
                "emoji": "🎑",
                "search": "moon viewing ceremony rice scene"
            },
            {
                "name": "red envelope",
                "emoji": "🧧",
                "search": "red envelope"
            },
            {
                "name": "ribbon",
                "emoji": "🎀",
                "search": "ribbon"
            },
            {
                "name": "wrapped gift",
                "emoji": "🎁",
                "search": "wrapped gift present birthday christmas"
            },
            {
                "name": "reminder ribbon",
                "emoji": "🎗️",
                "search": "reminder ribbon"
            },
            {
                "name": "admission tickets",
                "emoji": "🎟️",
                "search": "admission tickets"
            },
            {
                "name": "ticket",
                "emoji": "🎫",
                "search": "ticket"
            },
            {
                "name": "military medal",
                "emoji": "🎖️",
                "search": "military medal"
            },
            {
                "name": "trophy",
                "emoji": "🏆",
                "search": "trophy award contest winner"
            },
            {
                "name": "sports medal",
                "emoji": "🏅",
                "search": "sports medal gold winner"
            },
            {
                "name": "1st place medal",
                "emoji": "🥇",
                "search": "1st place medal gold"
            },
            {
                "name": "2nd place medal",
                "emoji": "🥈",
                "search": "2nd place medal silver"
            },
            {
                "name": "3rd place medal",
                "emoji": "🥉",
                "search": "3rd place medal bronze"
            },
            {
                "name": "soccer ball",
                "emoji": "⚽",
                "search": "soccer ball sports"
            },
            {
                "name": "baseball",
                "emoji": "⚾",
                "search": "baseball sports"
            },
            {
                "name": "softball",
                "emoji": "🥎",
                "search": "softball"
            },
            {
                "name": "basketball",
                "emoji": "🏀",
                "search": "basketball sports"
            },
            {
                "name": "volleyball",
                "emoji": "🏐",
                "search": "volleyball"
            },
            {
                "name": "american football",
                "emoji": "🏈",
                "search": "american football sports"
            },
            {
                "name": "rugby football",
                "emoji": "🏉",
                "search": "rugby football"
            },
            {
                "name": "tennis",
                "emoji": "🎾",
                "search": "tennis sports"
            },
            {
                "name": "flying disc",
                "emoji": "🥏",
                "search": "flying disc"
            },
            {
                "name": "bowling",
                "emoji": "🎳",
                "search": "bowling"
            },
            {
                "name": "cricket game",
                "emoji": "🏏",
                "search": "cricket game"
            },
            {
                "name": "field hockey",
                "emoji": "🏑",
                "search": "field hockey"
            },
            {
                "name": "ice hockey",
                "emoji": "🏒",
                "search": "ice hockey"
            },
            {
                "name": "lacrosse",
                "emoji": "🥍",
                "search": "lacrosse"
            },
            {
                "name": "ping pong",
                "emoji": "🏓",
                "search": "ping pong"
            },
            {
                "name": "badminton",
                "emoji": "🏸",
                "search": "badminton"
            },
            {
                "name": "boxing glove",
                "emoji": "🥊",
                "search": "boxing glove"
            },
            {
                "name": "martial arts uniform",
                "emoji": "🥋",
                "search": "martial arts uniform"
            },
            {
                "name": "goal net",
                "emoji": "🥅",
                "search": "goal net"
            },
            {
                "name": "flag in hole",
                "emoji": "⛳",
                "search": "flag in hole golf"
            },
            {
                "name": "ice skate",
                "emoji": "⛸️",
                "search": "ice skate skating"
            },
            {
                "name": "fishing pole",
                "emoji": "🎣",
                "search": "fishing pole and fish"
            },
            {
                "name": "diving mask",
                "emoji": "🤿",
                "search": "diving mask"
            },
            {
                "name": "running shirt",
                "emoji": "🎽",
                "search": "running shirt marathon with sash"
            },
            {
                "name": "skis",
                "emoji": "🎿",
                "search": "skis ski"
            },
            {
                "name": "sled",
                "emoji": "🛷",
                "search": "sled"
            },
            {
                "name": "curling stone",
                "emoji": "🥌",
                "search": "curling stone"
            },
            {
                "name": "bullseye",
                "emoji": "🎯",
                "search": "bullseye target dart"
            },
            {
                "name": "yo-yo",
                "emoji": "🪀",
                "search": "yo-yo yo"
            },
            {
                "name": "kite",
                "emoji": "🪁",
                "search": "kite"
            },
            {
                "name": "water pistol",
                "emoji": "🔫",
                "search": "water pistol shoot weapon gun"
            },
            {
                "name": "pool 8 ball",
                "emoji": "🎱",
                "search": "pool 8 ball billiards 8ball"
            },
            {
                "name": "crystal ball",
                "emoji": "🔮",
                "search": "crystal ball fortune"
            },
            {
                "name": "magic wand",
                "emoji": "🪄",
                "search": "magic wand"
            },
            {
                "name": "video game",
                "emoji": "🎮",
                "search": "video game play controller console"
            },
            {
                "name": "joystick",
                "emoji": "🕹️",
                "search": "joystick"
            },
            {
                "name": "slot machine",
                "emoji": "🎰",
                "search": "slot machine"
            },
            {
                "name": "game die",
                "emoji": "🎲",
                "search": "game die dice gambling"
            },
            {
                "name": "puzzle piece",
                "emoji": "🧩",
                "search": "puzzle piece jigsaw"
            },
            {
                "name": "teddy bear",
                "emoji": "🧸",
                "search": "teddy bear"
            },
            {
                "name": "piñata",
                "emoji": "🪅",
                "search": "piñata pinata"
            },
            {
                "name": "mirror ball",
                "emoji": "🪩",
                "search": "mirror ball disco party"
            },
            {
                "name": "nesting dolls",
                "emoji": "🪆",
                "search": "nesting dolls"
            },
            {
                "name": "spade suit",
                "emoji": "♠️",
                "search": "spade suit spades"
            },
            {
                "name": "heart suit",
                "emoji": "♥️",
                "search": "heart suit hearts"
            },
            {
                "name": "diamond suit",
                "emoji": "♦️",
                "search": "diamond suit diamonds"
            },
            {
                "name": "club suit",
                "emoji": "♣️",
                "search": "club suit clubs"
            },
            {
                "name": "chess pawn",
                "emoji": "♟️",
                "search": "chess pawn"
            },
            {
                "name": "joker",
                "emoji": "🃏",
                "search": "joker black"
            },
            {
                "name": "mahjong red dragon",
                "emoji": "🀄",
                "search": "mahjong red dragon"
            },
            {
                "name": "flower playing cards",
                "emoji": "🎴",
                "search": "flower playing cards"
            },
            {
                "name": "performing arts",
                "emoji": "🎭",
                "search": "performing arts theater drama"
            },
            {
                "name": "framed picture",
                "emoji": "🖼️",
                "search": "framed picture"
            },
            {
                "name": "artist palette",
                "emoji": "🎨",
                "search": "artist palette design paint art"
            },
            {
                "name": "thread",
                "emoji": "🧵",
                "search": "thread"
            },
            {
                "name": "sewing needle",
                "emoji": "🪡",
                "search": "sewing needle"
            },
            {
                "name": "yarn",
                "emoji": "🧶",
                "search": "yarn"
            },
            {
                "name": "knot",
                "emoji": "🪢",
                "search": "knot"
            }
        ]
    },
    [EEmojiCategory.Objects]: {
        "name": "Objects",
        "emojis": [
            {
                "name": "glasses",
                "emoji": "👓",
                "search": "glasses eyeglasses"
            },
            {
                "name": "sunglasses",
                "emoji": "🕶️",
                "search": "sunglasses dark"
            },
            {
                "name": "goggles",
                "emoji": "🥽",
                "search": "goggles"
            },
            {
                "name": "lab coat",
                "emoji": "🥼",
                "search": "lab coat"
            },
            {
                "name": "safety vest",
                "emoji": "🦺",
                "search": "safety vest"
            },
            {
                "name": "necktie",
                "emoji": "👔",
                "search": "necktie shirt formal"
            },
            {
                "name": "t-shirt",
                "emoji": "👕",
                "search": "t-shirt shirt tshirt"
            },
            {
                "name": "jeans",
                "emoji": "👖",
                "search": "jeans pants"
            },
            {
                "name": "scarf",
                "emoji": "🧣",
                "search": "scarf"
            },
            {
                "name": "gloves",
                "emoji": "🧤",
                "search": "gloves"
            },
            {
                "name": "coat",
                "emoji": "🧥",
                "search": "coat"
            },
            {
                "name": "socks",
                "emoji": "🧦",
                "search": "socks"
            },
            {
                "name": "dress",
                "emoji": "👗",
                "search": "dress"
            },
            {
                "name": "kimono",
                "emoji": "👘",
                "search": "kimono"
            },
            {
                "name": "sari",
                "emoji": "🥻",
                "search": "sari"
            },
            {
                "name": "one-piece swimsuit",
                "emoji": "🩱",
                "search": "one-piece swimsuit one piece"
            },
            {
                "name": "briefs",
                "emoji": "🩲",
                "search": "briefs swim brief"
            },
            {
                "name": "shorts",
                "emoji": "🩳",
                "search": "shorts"
            },
            {
                "name": "bikini",
                "emoji": "👙",
                "search": "bikini beach"
            },
            {
                "name": "woman’s clothes",
                "emoji": "👚",
                "search": "woman’s clothes womans"
            },
            {
                "name": "folding hand fan",
                "emoji": "🪭",
                "search": "folding hand fan sensu"
            },
            {
                "name": "purse",
                "emoji": "👛",
                "search": "purse"
            },
            {
                "name": "handbag",
                "emoji": "👜",
                "search": "handbag bag"
            },
            {
                "name": "clutch bag",
                "emoji": "👝",
                "search": "clutch bag pouch"
            },
            {
                "name": "shopping bags",
                "emoji": "🛍️",
                "search": "shopping bags"
            },
            {
                "name": "backpack",
                "emoji": "🎒",
                "search": "backpack school satchel"
            },
            {
                "name": "thong sandal",
                "emoji": "🩴",
                "search": "thong sandal"
            },
            {
                "name": "man’s shoe",
                "emoji": "👞",
                "search": "man’s shoe mans"
            },
            {
                "name": "running shoe",
                "emoji": "👟",
                "search": "running shoe sneaker sport athletic"
            },
            {
                "name": "hiking boot",
                "emoji": "🥾",
                "search": "hiking boot"
            },
            {
                "name": "flat shoe",
                "emoji": "🥿",
                "search": "flat shoe"
            },
            {
                "name": "high-heeled shoe",
                "emoji": "👠",
                "search": "high-heeled shoe high heel"
            },
            {
                "name": "woman’s sandal",
                "emoji": "👡",
                "search": "woman’s sandal shoe"
            },
            {
                "name": "ballet shoes",
                "emoji": "🩰",
                "search": "ballet shoes"
            },
            {
                "name": "woman’s boot",
                "emoji": "👢",
                "search": "woman’s boot"
            },
            {
                "name": "hair pick",
                "emoji": "🪮",
                "search": "hair pick"
            },
            {
                "name": "crown",
                "emoji": "👑",
                "search": "crown king queen royal"
            },
            {
                "name": "woman’s hat",
                "emoji": "👒",
                "search": "woman’s hat womans"
            },
            {
                "name": "top hat",
                "emoji": "🎩",
                "search": "top hat classy tophat"
            },
            {
                "name": "graduation cap",
                "emoji": "🎓",
                "search": "graduation cap education college university mortar board"
            },
            {
                "name": "billed cap",
                "emoji": "🧢",
                "search": "billed cap"
            },
            {
                "name": "military helmet",
                "emoji": "🪖",
                "search": "military helmet"
            },
            {
                "name": "rescue worker’s helmet",
                "emoji": "⛑️",
                "search": "rescue worker’s helmet worker"
            },
            {
                "name": "prayer beads",
                "emoji": "📿",
                "search": "prayer beads"
            },
            {
                "name": "lipstick",
                "emoji": "💄",
                "search": "lipstick makeup"
            },
            {
                "name": "ring",
                "emoji": "💍",
                "search": "ring wedding marriage engaged"
            },
            {
                "name": "gem stone",
                "emoji": "💎",
                "search": "gem stone diamond"
            },
            {
                "name": "muted speaker",
                "emoji": "🔇",
                "search": "muted speaker sound volume mute"
            },
            {
                "name": "speaker low volume",
                "emoji": "🔈",
                "search": "speaker low volume"
            },
            {
                "name": "speaker medium volume",
                "emoji": "🔉",
                "search": "speaker medium volume sound"
            },
            {
                "name": "speaker high volume",
                "emoji": "🔊",
                "search": "speaker high volume loud sound"
            },
            {
                "name": "loudspeaker",
                "emoji": "📢",
                "search": "loudspeaker announcement"
            },
            {
                "name": "megaphone",
                "emoji": "📣",
                "search": "megaphone mega"
            },
            {
                "name": "postal horn",
                "emoji": "📯",
                "search": "postal horn"
            },
            {
                "name": "bell",
                "emoji": "🔔",
                "search": "bell sound notification"
            },
            {
                "name": "bell with slash",
                "emoji": "🔕",
                "search": "bell with slash volume off no"
            },
            {
                "name": "musical score",
                "emoji": "🎼",
                "search": "musical score"
            },
            {
                "name": "musical note",
                "emoji": "🎵",
                "search": "musical note"
            },
            {
                "name": "musical notes",
                "emoji": "🎶",
                "search": "musical notes music"
            },
            {
                "name": "studio microphone",
                "emoji": "🎙️",
                "search": "studio microphone podcast"
            },
            {
                "name": "level slider",
                "emoji": "🎚️",
                "search": "level slider"
            },
            {
                "name": "control knobs",
                "emoji": "🎛️",
                "search": "control knobs"
            },
            {
                "name": "microphone",
                "emoji": "🎤",
                "search": "microphone sing"
            },
            {
                "name": "headphone",
                "emoji": "🎧",
                "search": "headphone music earphones headphones"
            },
            {
                "name": "radio",
                "emoji": "📻",
                "search": "radio podcast"
            },
            {
                "name": "saxophone",
                "emoji": "🎷",
                "search": "saxophone"
            },
            {
                "name": "accordion",
                "emoji": "🪗",
                "search": "accordion"
            },
            {
                "name": "guitar",
                "emoji": "🎸",
                "search": "guitar rock"
            },
            {
                "name": "musical keyboard",
                "emoji": "🎹",
                "search": "musical keyboard piano"
            },
            {
                "name": "trumpet",
                "emoji": "🎺",
                "search": "trumpet"
            },
            {
                "name": "violin",
                "emoji": "🎻",
                "search": "violin"
            },
            {
                "name": "banjo",
                "emoji": "🪕",
                "search": "banjo"
            },
            {
                "name": "drum",
                "emoji": "🥁",
                "search": "drum"
            },
            {
                "name": "long drum",
                "emoji": "🪘",
                "search": "long drum"
            },
            {
                "name": "maracas",
                "emoji": "🪇",
                "search": "maracas shaker"
            },
            {
                "name": "flute",
                "emoji": "🪈",
                "search": "flute recorder"
            },
            {
                "name": "mobile phone",
                "emoji": "📱",
                "search": "mobile phone smartphone iphone"
            },
            {
                "name": "mobile phone with arrow",
                "emoji": "📲",
                "search": "mobile phone with arrow call incoming calling"
            },
            {
                "name": "telephone",
                "emoji": "☎️",
                "search": "telephone phone"
            },
            {
                "name": "telephone receiver",
                "emoji": "📞",
                "search": "telephone receiver phone call"
            },
            {
                "name": "pager",
                "emoji": "📟",
                "search": "pager"
            },
            {
                "name": "fax machine",
                "emoji": "📠",
                "search": "fax machine"
            },
            {
                "name": "battery",
                "emoji": "🔋",
                "search": "battery power"
            },
            {
                "name": "low battery",
                "emoji": "🪫",
                "search": "low battery"
            },
            {
                "name": "electric plug",
                "emoji": "🔌",
                "search": "electric plug"
            },
            {
                "name": "laptop",
                "emoji": "💻",
                "search": "laptop desktop screen computer"
            },
            {
                "name": "desktop computer",
                "emoji": "🖥️",
                "search": "desktop computer"
            },
            {
                "name": "printer",
                "emoji": "🖨️",
                "search": "printer"
            },
            {
                "name": "keyboard",
                "emoji": "⌨️",
                "search": "keyboard"
            },
            {
                "name": "computer mouse",
                "emoji": "🖱️",
                "search": "computer mouse"
            },
            {
                "name": "trackball",
                "emoji": "🖲️",
                "search": "trackball"
            },
            {
                "name": "computer disk",
                "emoji": "💽",
                "search": "computer disk minidisc"
            },
            {
                "name": "floppy disk",
                "emoji": "💾",
                "search": "floppy disk save"
            },
            {
                "name": "optical disk",
                "emoji": "💿",
                "search": "optical disk cd"
            },
            {
                "name": "dvd",
                "emoji": "📀",
                "search": "dvd"
            },
            {
                "name": "abacus",
                "emoji": "🧮",
                "search": "abacus"
            },
            {
                "name": "movie camera",
                "emoji": "🎥",
                "search": "movie camera film video"
            },
            {
                "name": "film frames",
                "emoji": "🎞️",
                "search": "film frames strip"
            },
            {
                "name": "film projector",
                "emoji": "📽️",
                "search": "film projector"
            },
            {
                "name": "clapper board",
                "emoji": "🎬",
                "search": "clapper board film"
            },
            {
                "name": "television",
                "emoji": "📺",
                "search": "television tv"
            },
            {
                "name": "camera",
                "emoji": "📷",
                "search": "camera photo"
            },
            {
                "name": "camera with flash",
                "emoji": "📸",
                "search": "camera with flash photo"
            },
            {
                "name": "video camera",
                "emoji": "📹",
                "search": "video camera"
            },
            {
                "name": "videocassette",
                "emoji": "📼",
                "search": "videocassette vhs"
            },
            {
                "name": "magnifying glass tilted left",
                "emoji": "🔍",
                "search": "magnifying glass tilted left search zoom mag"
            },
            {
                "name": "magnifying glass tilted right",
                "emoji": "🔎",
                "search": "magnifying glass tilted right mag"
            },
            {
                "name": "candle",
                "emoji": "🕯️",
                "search": "candle"
            },
            {
                "name": "light bulb",
                "emoji": "💡",
                "search": "light bulb idea"
            },
            {
                "name": "flashlight",
                "emoji": "🔦",
                "search": "flashlight"
            },
            {
                "name": "red paper lantern",
                "emoji": "🏮",
                "search": "red paper lantern izakaya"
            },
            {
                "name": "diya lamp",
                "emoji": "🪔",
                "search": "diya lamp"
            },
            {
                "name": "notebook with decorative cover",
                "emoji": "📔",
                "search": "notebook with decorative cover"
            },
            {
                "name": "closed book",
                "emoji": "📕",
                "search": "closed book"
            },
            {
                "name": "open book",
                "emoji": "📖",
                "search": "open book"
            },
            {
                "name": "green book",
                "emoji": "📗",
                "search": "green book"
            },
            {
                "name": "blue book",
                "emoji": "📘",
                "search": "blue book"
            },
            {
                "name": "orange book",
                "emoji": "📙",
                "search": "orange book"
            },
            {
                "name": "books",
                "emoji": "📚",
                "search": "books library"
            },
            {
                "name": "notebook",
                "emoji": "📓",
                "search": "notebook"
            },
            {
                "name": "ledger",
                "emoji": "📒",
                "search": "ledger"
            },
            {
                "name": "page with curl",
                "emoji": "📃",
                "search": "page with curl"
            },
            {
                "name": "scroll",
                "emoji": "📜",
                "search": "scroll document"
            },
            {
                "name": "page facing up",
                "emoji": "📄",
                "search": "page facing up document"
            },
            {
                "name": "newspaper",
                "emoji": "📰",
                "search": "newspaper press"
            },
            {
                "name": "rolled-up newspaper",
                "emoji": "🗞️",
                "search": "rolled-up newspaper press roll"
            },
            {
                "name": "bookmark tabs",
                "emoji": "📑",
                "search": "bookmark tabs"
            },
            {
                "name": "bookmark",
                "emoji": "🔖",
                "search": "bookmark"
            },
            {
                "name": "label",
                "emoji": "🏷️",
                "search": "label tag"
            },
            {
                "name": "money bag",
                "emoji": "💰",
                "search": "money bag dollar cream moneybag"
            },
            {
                "name": "coin",
                "emoji": "🪙",
                "search": "coin"
            },
            {
                "name": "yen banknote",
                "emoji": "💴",
                "search": "yen banknote"
            },
            {
                "name": "dollar banknote",
                "emoji": "💵",
                "search": "dollar banknote money"
            },
            {
                "name": "euro banknote",
                "emoji": "💶",
                "search": "euro banknote"
            },
            {
                "name": "pound banknote",
                "emoji": "💷",
                "search": "pound banknote"
            },
            {
                "name": "money with wings",
                "emoji": "💸",
                "search": "money with wings dollar"
            },
            {
                "name": "credit card",
                "emoji": "💳",
                "search": "credit card subscription"
            },
            {
                "name": "receipt",
                "emoji": "🧾",
                "search": "receipt"
            },
            {
                "name": "chart increasing with yen",
                "emoji": "💹",
                "search": "chart increasing with yen"
            },
            {
                "name": "envelope",
                "emoji": "✉️",
                "search": "envelope letter email"
            },
            {
                "name": "e-mail",
                "emoji": "📧",
                "search": "e-mail email"
            },
            {
                "name": "incoming envelope",
                "emoji": "📨",
                "search": "incoming envelope"
            },
            {
                "name": "envelope with arrow",
                "emoji": "📩",
                "search": "envelope with arrow"
            },
            {
                "name": "outbox tray",
                "emoji": "📤",
                "search": "outbox tray"
            },
            {
                "name": "inbox tray",
                "emoji": "📥",
                "search": "inbox tray"
            },
            {
                "name": "package",
                "emoji": "📦",
                "search": "package shipping"
            },
            {
                "name": "closed mailbox with raised flag",
                "emoji": "📫",
                "search": "closed mailbox with raised flag"
            },
            {
                "name": "closed mailbox with lowered flag",
                "emoji": "📪",
                "search": "closed mailbox with lowered flag"
            },
            {
                "name": "open mailbox with raised flag",
                "emoji": "📬",
                "search": "open mailbox with raised flag mail"
            },
            {
                "name": "open mailbox with lowered flag",
                "emoji": "📭",
                "search": "open mailbox with lowered flag no mail"
            },
            {
                "name": "postbox",
                "emoji": "📮",
                "search": "postbox"
            },
            {
                "name": "ballot box with ballot",
                "emoji": "🗳️",
                "search": "ballot box with"
            },
            {
                "name": "pencil",
                "emoji": "✏️",
                "search": "pencil pencil2"
            },
            {
                "name": "black nib",
                "emoji": "✒️",
                "search": "black nib"
            },
            {
                "name": "fountain pen",
                "emoji": "🖋️",
                "search": "fountain pen"
            },
            {
                "name": "pen",
                "emoji": "🖊️",
                "search": "pen"
            },
            {
                "name": "paintbrush",
                "emoji": "🖌️",
                "search": "paintbrush"
            },
            {
                "name": "crayon",
                "emoji": "🖍️",
                "search": "crayon"
            },
            {
                "name": "memo",
                "emoji": "📝",
                "search": "memo document note pencil"
            },
            {
                "name": "briefcase",
                "emoji": "💼",
                "search": "briefcase business"
            },
            {
                "name": "file folder",
                "emoji": "📁",
                "search": "file folder directory"
            },
            {
                "name": "open file folder",
                "emoji": "📂",
                "search": "open file folder"
            },
            {
                "name": "card index dividers",
                "emoji": "🗂️",
                "search": "card index dividers"
            },
            {
                "name": "calendar",
                "emoji": "📅",
                "search": "calendar schedule date"
            },
            {
                "name": "tear-off calendar",
                "emoji": "📆",
                "search": "tear-off calendar schedule"
            },
            {
                "name": "spiral notepad",
                "emoji": "🗒️",
                "search": "spiral notepad"
            },
            {
                "name": "spiral calendar",
                "emoji": "🗓️",
                "search": "spiral calendar"
            },
            {
                "name": "card index",
                "emoji": "📇",
                "search": "card index"
            },
            {
                "name": "chart increasing",
                "emoji": "📈",
                "search": "chart increasing graph metrics with upwards trend"
            },
            {
                "name": "chart decreasing",
                "emoji": "📉",
                "search": "chart decreasing graph metrics with downwards trend"
            },
            {
                "name": "bar chart",
                "emoji": "📊",
                "search": "bar chart stats metrics"
            },
            {
                "name": "clipboard",
                "emoji": "📋",
                "search": "clipboard"
            },
            {
                "name": "pushpin",
                "emoji": "📌",
                "search": "pushpin location"
            },
            {
                "name": "round pushpin",
                "emoji": "📍",
                "search": "round pushpin location"
            },
            {
                "name": "paperclip",
                "emoji": "📎",
                "search": "paperclip"
            },
            {
                "name": "linked paperclips",
                "emoji": "🖇️",
                "search": "linked paperclips"
            },
            {
                "name": "straight ruler",
                "emoji": "📏",
                "search": "straight ruler"
            },
            {
                "name": "triangular ruler",
                "emoji": "📐",
                "search": "triangular ruler"
            },
            {
                "name": "scissors",
                "emoji": "✂️",
                "search": "scissors cut"
            },
            {
                "name": "card file box",
                "emoji": "🗃️",
                "search": "card file box"
            },
            {
                "name": "file cabinet",
                "emoji": "🗄️",
                "search": "file cabinet"
            },
            {
                "name": "wastebasket",
                "emoji": "🗑️",
                "search": "wastebasket trash"
            },
            {
                "name": "locked",
                "emoji": "🔒",
                "search": "locked security private lock"
            },
            {
                "name": "unlocked",
                "emoji": "🔓",
                "search": "unlocked security unlock"
            },
            {
                "name": "locked with pen",
                "emoji": "🔏",
                "search": "locked with pen lock ink"
            },
            {
                "name": "locked with key",
                "emoji": "🔐",
                "search": "locked with key security closed lock"
            },
            {
                "name": "key",
                "emoji": "🔑",
                "search": "key lock password"
            },
            {
                "name": "old key",
                "emoji": "🗝️",
                "search": "old key"
            },
            {
                "name": "hammer",
                "emoji": "🔨",
                "search": "hammer tool"
            },
            {
                "name": "axe",
                "emoji": "🪓",
                "search": "axe"
            },
            {
                "name": "pick",
                "emoji": "⛏️",
                "search": "pick"
            },
            {
                "name": "hammer and pick",
                "emoji": "⚒️",
                "search": "hammer and pick"
            },
            {
                "name": "hammer and wrench",
                "emoji": "🛠️",
                "search": "hammer and wrench"
            },
            {
                "name": "dagger",
                "emoji": "🗡️",
                "search": "dagger"
            },
            {
                "name": "crossed swords",
                "emoji": "⚔️",
                "search": "crossed swords"
            },
            {
                "name": "bomb",
                "emoji": "💣",
                "search": "bomb boom"
            },
            {
                "name": "boomerang",
                "emoji": "🪃",
                "search": "boomerang"
            },
            {
                "name": "bow and arrow",
                "emoji": "🏹",
                "search": "bow and arrow archery"
            },
            {
                "name": "shield",
                "emoji": "🛡️",
                "search": "shield"
            },
            {
                "name": "carpentry saw",
                "emoji": "🪚",
                "search": "carpentry saw"
            },
            {
                "name": "wrench",
                "emoji": "🔧",
                "search": "wrench tool"
            },
            {
                "name": "screwdriver",
                "emoji": "🪛",
                "search": "screwdriver"
            },
            {
                "name": "nut and bolt",
                "emoji": "🔩",
                "search": "nut and bolt"
            },
            {
                "name": "gear",
                "emoji": "⚙️",
                "search": "gear"
            },
            {
                "name": "clamp",
                "emoji": "🗜️",
                "search": "clamp"
            },
            {
                "name": "balance scale",
                "emoji": "⚖️",
                "search": "balance scale"
            },
            {
                "name": "white cane",
                "emoji": "🦯",
                "search": "white cane probing"
            },
            {
                "name": "link",
                "emoji": "🔗",
                "search": "link"
            },
            {
                "name": "chains",
                "emoji": "⛓️",
                "search": "chains"
            },
            {
                "name": "hook",
                "emoji": "🪝",
                "search": "hook"
            },
            {
                "name": "toolbox",
                "emoji": "🧰",
                "search": "toolbox"
            },
            {
                "name": "magnet",
                "emoji": "🧲",
                "search": "magnet"
            },
            {
                "name": "ladder",
                "emoji": "🪜",
                "search": "ladder"
            },
            {
                "name": "alembic",
                "emoji": "⚗️",
                "search": "alembic"
            },
            {
                "name": "test tube",
                "emoji": "🧪",
                "search": "test tube"
            },
            {
                "name": "petri dish",
                "emoji": "🧫",
                "search": "petri dish"
            },
            {
                "name": "dna",
                "emoji": "🧬",
                "search": "dna"
            },
            {
                "name": "microscope",
                "emoji": "🔬",
                "search": "microscope science laboratory investigate"
            },
            {
                "name": "telescope",
                "emoji": "🔭",
                "search": "telescope"
            },
            {
                "name": "satellite antenna",
                "emoji": "📡",
                "search": "satellite antenna signal"
            },
            {
                "name": "syringe",
                "emoji": "💉",
                "search": "syringe health hospital needle"
            },
            {
                "name": "drop of blood",
                "emoji": "🩸",
                "search": "drop of blood"
            },
            {
                "name": "pill",
                "emoji": "💊",
                "search": "pill health medicine"
            },
            {
                "name": "adhesive bandage",
                "emoji": "🩹",
                "search": "adhesive bandage"
            },
            {
                "name": "crutch",
                "emoji": "🩼",
                "search": "crutch"
            },
            {
                "name": "stethoscope",
                "emoji": "🩺",
                "search": "stethoscope"
            },
            {
                "name": "x-ray",
                "emoji": "🩻",
                "search": "x-ray x ray"
            },
            {
                "name": "door",
                "emoji": "🚪",
                "search": "door"
            },
            {
                "name": "elevator",
                "emoji": "🛗",
                "search": "elevator"
            },
            {
                "name": "mirror",
                "emoji": "🪞",
                "search": "mirror"
            },
            {
                "name": "window",
                "emoji": "🪟",
                "search": "window"
            },
            {
                "name": "bed",
                "emoji": "🛏️",
                "search": "bed"
            },
            {
                "name": "couch and lamp",
                "emoji": "🛋️",
                "search": "couch and lamp"
            },
            {
                "name": "chair",
                "emoji": "🪑",
                "search": "chair"
            },
            {
                "name": "toilet",
                "emoji": "🚽",
                "search": "toilet wc"
            },
            {
                "name": "plunger",
                "emoji": "🪠",
                "search": "plunger"
            },
            {
                "name": "shower",
                "emoji": "🚿",
                "search": "shower bath"
            },
            {
                "name": "bathtub",
                "emoji": "🛁",
                "search": "bathtub"
            },
            {
                "name": "mouse trap",
                "emoji": "🪤",
                "search": "mouse trap"
            },
            {
                "name": "razor",
                "emoji": "🪒",
                "search": "razor"
            },
            {
                "name": "lotion bottle",
                "emoji": "🧴",
                "search": "lotion bottle"
            },
            {
                "name": "safety pin",
                "emoji": "🧷",
                "search": "safety pin"
            },
            {
                "name": "broom",
                "emoji": "🧹",
                "search": "broom"
            },
            {
                "name": "basket",
                "emoji": "🧺",
                "search": "basket"
            },
            {
                "name": "roll of paper",
                "emoji": "🧻",
                "search": "roll of paper toilet"
            },
            {
                "name": "bucket",
                "emoji": "🪣",
                "search": "bucket"
            },
            {
                "name": "soap",
                "emoji": "🧼",
                "search": "soap"
            },
            {
                "name": "bubbles",
                "emoji": "🫧",
                "search": "bubbles"
            },
            {
                "name": "toothbrush",
                "emoji": "🪥",
                "search": "toothbrush"
            },
            {
                "name": "sponge",
                "emoji": "🧽",
                "search": "sponge"
            },
            {
                "name": "fire extinguisher",
                "emoji": "🧯",
                "search": "fire extinguisher"
            },
            {
                "name": "shopping cart",
                "emoji": "🛒",
                "search": "shopping cart"
            },
            {
                "name": "cigarette",
                "emoji": "🚬",
                "search": "cigarette smoking"
            },
            {
                "name": "coffin",
                "emoji": "⚰️",
                "search": "coffin funeral"
            },
            {
                "name": "headstone",
                "emoji": "🪦",
                "search": "headstone"
            },
            {
                "name": "funeral urn",
                "emoji": "⚱️",
                "search": "funeral urn"
            },
            {
                "name": "nazar amulet",
                "emoji": "🧿",
                "search": "nazar amulet"
            },
            {
                "name": "hamsa",
                "emoji": "🪬",
                "search": "hamsa"
            },
            {
                "name": "moai",
                "emoji": "🗿",
                "search": "moai stone moyai"
            },
            {
                "name": "placard",
                "emoji": "🪧",
                "search": "placard"
            },
            {
                "name": "identification card",
                "emoji": "🪪",
                "search": "identification card"
            }
        ]
    },
    [EEmojiCategory.Symbols]: {
        "name": "Symbols",
        "emojis": [
            {
                "name": "ATM sign",
                "emoji": "🏧",
                "search": "atm sign"
            },
            {
                "name": "litter in bin sign",
                "emoji": "🚮",
                "search": "litter in bin sign put its place"
            },
            {
                "name": "potable water",
                "emoji": "🚰",
                "search": "potable water"
            },
            {
                "name": "wheelchair symbol",
                "emoji": "♿",
                "search": "wheelchair symbol accessibility"
            },
            {
                "name": "men’s room",
                "emoji": "🚹",
                "search": "men’s room mens"
            },
            {
                "name": "women’s room",
                "emoji": "🚺",
                "search": "women’s room womens"
            },
            {
                "name": "restroom",
                "emoji": "🚻",
                "search": "restroom toilet"
            },
            {
                "name": "baby symbol",
                "emoji": "🚼",
                "search": "baby symbol"
            },
            {
                "name": "water closet",
                "emoji": "🚾",
                "search": "water closet toilet restroom wc"
            },
            {
                "name": "passport control",
                "emoji": "🛂",
                "search": "passport control"
            },
            {
                "name": "customs",
                "emoji": "🛃",
                "search": "customs"
            },
            {
                "name": "baggage claim",
                "emoji": "🛄",
                "search": "baggage claim airport"
            },
            {
                "name": "left luggage",
                "emoji": "🛅",
                "search": "left luggage"
            },
            {
                "name": "warning",
                "emoji": "⚠️",
                "search": "warning wip"
            },
            {
                "name": "children crossing",
                "emoji": "🚸",
                "search": "children crossing"
            },
            {
                "name": "no entry",
                "emoji": "⛔",
                "search": "no entry limit"
            },
            {
                "name": "prohibited",
                "emoji": "🚫",
                "search": "prohibited block forbidden no entry sign"
            },
            {
                "name": "no bicycles",
                "emoji": "🚳",
                "search": "no bicycles"
            },
            {
                "name": "no smoking",
                "emoji": "🚭",
                "search": "no smoking"
            },
            {
                "name": "no littering",
                "emoji": "🚯",
                "search": "no littering do not litter"
            },
            {
                "name": "non-potable water",
                "emoji": "🚱",
                "search": "non-potable water"
            },
            {
                "name": "no pedestrians",
                "emoji": "🚷",
                "search": "no pedestrians"
            },
            {
                "name": "no mobile phones",
                "emoji": "📵",
                "search": "no mobile phones"
            },
            {
                "name": "no one under eighteen",
                "emoji": "🔞",
                "search": "no one under eighteen underage"
            },
            {
                "name": "radioactive",
                "emoji": "☢️",
                "search": "radioactive"
            },
            {
                "name": "biohazard",
                "emoji": "☣️",
                "search": "biohazard"
            },
            {
                "name": "up arrow",
                "emoji": "⬆️",
                "search": "up arrow"
            },
            {
                "name": "up-right arrow",
                "emoji": "↗️",
                "search": "up-right arrow upper right"
            },
            {
                "name": "right arrow",
                "emoji": "➡️",
                "search": "right arrow"
            },
            {
                "name": "down-right arrow",
                "emoji": "↘️",
                "search": "down-right arrow lower right"
            },
            {
                "name": "down arrow",
                "emoji": "⬇️",
                "search": "down arrow"
            },
            {
                "name": "down-left arrow",
                "emoji": "↙️",
                "search": "down-left arrow lower left"
            },
            {
                "name": "left arrow",
                "emoji": "⬅️",
                "search": "left arrow"
            },
            {
                "name": "up-left arrow",
                "emoji": "↖️",
                "search": "up-left arrow upper left"
            },
            {
                "name": "up-down arrow",
                "emoji": "↕️",
                "search": "up-down arrow up down"
            },
            {
                "name": "left-right arrow",
                "emoji": "↔️",
                "search": "left-right arrow left right"
            },
            {
                "name": "right arrow curving left",
                "emoji": "↩️",
                "search": "right arrow curving left return leftwards with hook"
            },
            {
                "name": "left arrow curving right",
                "emoji": "↪️",
                "search": "left arrow curving right hook"
            },
            {
                "name": "right arrow curving up",
                "emoji": "⤴️",
                "search": "right arrow curving up heading"
            },
            {
                "name": "right arrow curving down",
                "emoji": "⤵️",
                "search": "right arrow curving down heading"
            },
            {
                "name": "clockwise vertical arrows",
                "emoji": "🔃",
                "search": "clockwise vertical arrows"
            },
            {
                "name": "counterclockwise arrows button",
                "emoji": "🔄",
                "search": "counterclockwise arrows button sync"
            },
            {
                "name": "BACK arrow",
                "emoji": "🔙",
                "search": "back arrow"
            },
            {
                "name": "END arrow",
                "emoji": "🔚",
                "search": "end arrow"
            },
            {
                "name": "ON! arrow",
                "emoji": "🔛",
                "search": "on! arrow on"
            },
            {
                "name": "SOON arrow",
                "emoji": "🔜",
                "search": "soon arrow"
            },
            {
                "name": "TOP arrow",
                "emoji": "🔝",
                "search": "top arrow"
            },
            {
                "name": "place of worship",
                "emoji": "🛐",
                "search": "place of worship"
            },
            {
                "name": "atom symbol",
                "emoji": "⚛️",
                "search": "atom symbol"
            },
            {
                "name": "om",
                "emoji": "🕉️",
                "search": "om"
            },
            {
                "name": "star of David",
                "emoji": "✡️",
                "search": "star of david"
            },
            {
                "name": "wheel of dharma",
                "emoji": "☸️",
                "search": "wheel of dharma"
            },
            {
                "name": "yin yang",
                "emoji": "☯️",
                "search": "yin yang"
            },
            {
                "name": "latin cross",
                "emoji": "✝️",
                "search": "latin cross"
            },
            {
                "name": "orthodox cross",
                "emoji": "☦️",
                "search": "orthodox cross"
            },
            {
                "name": "star and crescent",
                "emoji": "☪️",
                "search": "star and crescent"
            },
            {
                "name": "peace symbol",
                "emoji": "☮️",
                "search": "peace symbol"
            },
            {
                "name": "menorah",
                "emoji": "🕎",
                "search": "menorah"
            },
            {
                "name": "dotted six-pointed star",
                "emoji": "🔯",
                "search": "dotted six-pointed star six pointed"
            },
            {
                "name": "khanda",
                "emoji": "🪯",
                "search": "khanda"
            },
            {
                "name": "Aries",
                "emoji": "♈",
                "search": "aries"
            },
            {
                "name": "Taurus",
                "emoji": "♉",
                "search": "taurus"
            },
            {
                "name": "Gemini",
                "emoji": "♊",
                "search": "gemini"
            },
            {
                "name": "Cancer",
                "emoji": "♋",
                "search": "cancer"
            },
            {
                "name": "Leo",
                "emoji": "♌",
                "search": "leo"
            },
            {
                "name": "Virgo",
                "emoji": "♍",
                "search": "virgo"
            },
            {
                "name": "Libra",
                "emoji": "♎",
                "search": "libra"
            },
            {
                "name": "Scorpio",
                "emoji": "♏",
                "search": "scorpio scorpius"
            },
            {
                "name": "Sagittarius",
                "emoji": "♐",
                "search": "sagittarius"
            },
            {
                "name": "Capricorn",
                "emoji": "♑",
                "search": "capricorn"
            },
            {
                "name": "Aquarius",
                "emoji": "♒",
                "search": "aquarius"
            },
            {
                "name": "Pisces",
                "emoji": "♓",
                "search": "pisces"
            },
            {
                "name": "Ophiuchus",
                "emoji": "⛎",
                "search": "ophiuchus"
            },
            {
                "name": "shuffle tracks button",
                "emoji": "🔀",
                "search": "shuffle tracks button twisted rightwards arrows"
            },
            {
                "name": "repeat button",
                "emoji": "🔁",
                "search": "repeat button loop"
            },
            {
                "name": "repeat single button",
                "emoji": "🔂",
                "search": "repeat single button one"
            },
            {
                "name": "play button",
                "emoji": "▶️",
                "search": "play button arrow forward"
            },
            {
                "name": "fast-forward button",
                "emoji": "⏩",
                "search": "fast-forward button fast forward"
            },
            {
                "name": "next track button",
                "emoji": "⏭️",
                "search": "next track button"
            },
            {
                "name": "play or pause button",
                "emoji": "⏯️",
                "search": "play or pause button"
            },
            {
                "name": "reverse button",
                "emoji": "◀️",
                "search": "reverse button arrow backward"
            },
            {
                "name": "fast reverse button",
                "emoji": "⏪",
                "search": "fast reverse button rewind"
            },
            {
                "name": "last track button",
                "emoji": "⏮️",
                "search": "last track button previous"
            },
            {
                "name": "upwards button",
                "emoji": "🔼",
                "search": "upwards button arrow up small"
            },
            {
                "name": "fast up button",
                "emoji": "⏫",
                "search": "fast up button arrow double"
            },
            {
                "name": "downwards button",
                "emoji": "🔽",
                "search": "downwards button arrow down small"
            },
            {
                "name": "fast down button",
                "emoji": "⏬",
                "search": "fast down button arrow double"
            },
            {
                "name": "pause button",
                "emoji": "⏸️",
                "search": "pause button"
            },
            {
                "name": "stop button",
                "emoji": "⏹️",
                "search": "stop button"
            },
            {
                "name": "record button",
                "emoji": "⏺️",
                "search": "record button"
            },
            {
                "name": "eject button",
                "emoji": "⏏️",
                "search": "eject button"
            },
            {
                "name": "cinema",
                "emoji": "🎦",
                "search": "cinema film movie"
            },
            {
                "name": "dim button",
                "emoji": "🔅",
                "search": "dim button low brightness"
            },
            {
                "name": "bright button",
                "emoji": "🔆",
                "search": "bright button high brightness"
            },
            {
                "name": "antenna bars",
                "emoji": "📶",
                "search": "antenna bars wifi signal strength"
            },
            {
                "name": "wireless",
                "emoji": "🛜",
                "search": "wireless wifi"
            },
            {
                "name": "vibration mode",
                "emoji": "📳",
                "search": "vibration mode"
            },
            {
                "name": "mobile phone off",
                "emoji": "📴",
                "search": "mobile phone off mute"
            },
            {
                "name": "female sign",
                "emoji": "♀️",
                "search": "female sign"
            },
            {
                "name": "male sign",
                "emoji": "♂️",
                "search": "male sign"
            },
            {
                "name": "transgender symbol",
                "emoji": "⚧️",
                "search": "transgender symbol"
            },
            {
                "name": "multiply",
                "emoji": "✖️",
                "search": "multiply heavy multiplication x"
            },
            {
                "name": "plus",
                "emoji": "➕",
                "search": "plus heavy sign"
            },
            {
                "name": "minus",
                "emoji": "➖",
                "search": "minus heavy sign"
            },
            {
                "name": "divide",
                "emoji": "➗",
                "search": "divide heavy division sign"
            },
            {
                "name": "heavy equals sign",
                "emoji": "🟰",
                "search": "heavy equals sign"
            },
            {
                "name": "infinity",
                "emoji": "♾️",
                "search": "infinity"
            },
            {
                "name": "double exclamation mark",
                "emoji": "‼️",
                "search": "double exclamation mark bangbang"
            },
            {
                "name": "exclamation question mark",
                "emoji": "⁉️",
                "search": "exclamation question mark interrobang"
            },
            {
                "name": "red question mark",
                "emoji": "❓",
                "search": "red question mark confused"
            },
            {
                "name": "white question mark",
                "emoji": "❔",
                "search": "white question mark grey"
            },
            {
                "name": "white exclamation mark",
                "emoji": "❕",
                "search": "white exclamation mark grey"
            },
            {
                "name": "red exclamation mark",
                "emoji": "❗",
                "search": "red exclamation mark bang heavy"
            },
            {
                "name": "wavy dash",
                "emoji": "〰️",
                "search": "wavy dash"
            },
            {
                "name": "currency exchange",
                "emoji": "💱",
                "search": "currency exchange"
            },
            {
                "name": "heavy dollar sign",
                "emoji": "💲",
                "search": "heavy dollar sign"
            },
            {
                "name": "medical symbol",
                "emoji": "⚕️",
                "search": "medical symbol"
            },
            {
                "name": "recycling symbol",
                "emoji": "♻️",
                "search": "recycling symbol environment green recycle"
            },
            {
                "name": "fleur-de-lis",
                "emoji": "⚜️",
                "search": "fleur-de-lis fleur de lis"
            },
            {
                "name": "trident emblem",
                "emoji": "🔱",
                "search": "trident emblem"
            },
            {
                "name": "name badge",
                "emoji": "📛",
                "search": "name badge"
            },
            {
                "name": "Japanese symbol for beginner",
                "emoji": "🔰",
                "search": "japanese symbol for beginner"
            },
            {
                "name": "hollow red circle",
                "emoji": "⭕",
                "search": "hollow red circle o"
            },
            {
                "name": "check mark button",
                "emoji": "✅",
                "search": "check mark button white"
            },
            {
                "name": "check box with check",
                "emoji": "☑️",
                "search": "check box with ballot"
            },
            {
                "name": "check mark",
                "emoji": "✔️",
                "search": "check mark heavy"
            },
            {
                "name": "cross mark",
                "emoji": "❌",
                "search": "cross mark x"
            },
            {
                "name": "cross mark button",
                "emoji": "❎",
                "search": "cross mark button negative squared"
            },
            {
                "name": "curly loop",
                "emoji": "➰",
                "search": "curly loop"
            },
            {
                "name": "double curly loop",
                "emoji": "➿",
                "search": "double curly loop"
            },
            {
                "name": "part alternation mark",
                "emoji": "〽️",
                "search": "part alternation mark"
            },
            {
                "name": "eight-spoked asterisk",
                "emoji": "✳️",
                "search": "eight-spoked asterisk eight spoked"
            },
            {
                "name": "eight-pointed star",
                "emoji": "✴️",
                "search": "eight-pointed star eight pointed black"
            },
            {
                "name": "sparkle",
                "emoji": "❇️",
                "search": "sparkle"
            },
            {
                "name": "copyright",
                "emoji": "©️",
                "search": "copyright"
            },
            {
                "name": "registered",
                "emoji": "®️",
                "search": "registered"
            },
            {
                "name": "trade mark",
                "emoji": "™️",
                "search": "trade mark trademark tm"
            },
            {
                "name": "keycap: #",
                "emoji": "#️⃣",
                "search": "keycap: # number hash"
            },
            {
                "name": "keycap: *",
                "emoji": "*️⃣",
                "search": "keycap: * asterisk"
            },
            {
                "name": "keycap: 0",
                "emoji": "0️⃣",
                "search": "keycap: 0 zero"
            },
            {
                "name": "keycap: 1",
                "emoji": "1️⃣",
                "search": "keycap: 1 one"
            },
            {
                "name": "keycap: 2",
                "emoji": "2️⃣",
                "search": "keycap: 2 two"
            },
            {
                "name": "keycap: 3",
                "emoji": "3️⃣",
                "search": "keycap: 3 three"
            },
            {
                "name": "keycap: 4",
                "emoji": "4️⃣",
                "search": "keycap: 4 four"
            },
            {
                "name": "keycap: 5",
                "emoji": "5️⃣",
                "search": "keycap: 5 five"
            },
            {
                "name": "keycap: 6",
                "emoji": "6️⃣",
                "search": "keycap: 6 six"
            },
            {
                "name": "keycap: 7",
                "emoji": "7️⃣",
                "search": "keycap: 7 seven"
            },
            {
                "name": "keycap: 8",
                "emoji": "8️⃣",
                "search": "keycap: 8 eight"
            },
            {
                "name": "keycap: 9",
                "emoji": "9️⃣",
                "search": "keycap: 9 nine"
            },
            {
                "name": "keycap: 10",
                "emoji": "🔟",
                "search": "keycap: 10 keycap ten"
            },
            {
                "name": "input latin uppercase",
                "emoji": "🔠",
                "search": "input latin uppercase letters capital abcd"
            },
            {
                "name": "input latin lowercase",
                "emoji": "🔡",
                "search": "input latin lowercase abcd"
            },
            {
                "name": "input numbers",
                "emoji": "🔢",
                "search": "input numbers 1234"
            },
            {
                "name": "input symbols",
                "emoji": "🔣",
                "search": "input symbols"
            },
            {
                "name": "input latin letters",
                "emoji": "🔤",
                "search": "input latin letters alphabet abc"
            },
            {
                "name": "A button (blood type)",
                "emoji": "🅰️",
                "search": "a button (blood type)"
            },
            {
                "name": "AB button (blood type)",
                "emoji": "🆎",
                "search": "ab button (blood type)"
            },
            {
                "name": "B button (blood type)",
                "emoji": "🅱️",
                "search": "b button (blood type)"
            },
            {
                "name": "CL button",
                "emoji": "🆑",
                "search": "cl button"
            },
            {
                "name": "COOL button",
                "emoji": "🆒",
                "search": "cool button"
            },
            {
                "name": "FREE button",
                "emoji": "🆓",
                "search": "free button"
            },
            {
                "name": "information",
                "emoji": "ℹ️",
                "search": "information source"
            },
            {
                "name": "ID button",
                "emoji": "🆔",
                "search": "id button"
            },
            {
                "name": "circled M",
                "emoji": "Ⓜ️",
                "search": "circled m"
            },
            {
                "name": "NEW button",
                "emoji": "🆕",
                "search": "new button fresh"
            },
            {
                "name": "NG button",
                "emoji": "🆖",
                "search": "ng button"
            },
            {
                "name": "O button (blood type)",
                "emoji": "🅾️",
                "search": "o button (blood type) o2"
            },
            {
                "name": "OK button",
                "emoji": "🆗",
                "search": "ok button yes"
            },
            {
                "name": "P button",
                "emoji": "🅿️",
                "search": "p button parking"
            },
            {
                "name": "SOS button",
                "emoji": "🆘",
                "search": "sos button help emergency"
            },
            {
                "name": "UP! button",
                "emoji": "🆙",
                "search": "up! button up"
            },
            {
                "name": "VS button",
                "emoji": "🆚",
                "search": "vs button"
            },
            {
                "name": "Japanese “here” button",
                "emoji": "🈁",
                "search": "japanese “here” button koko"
            },
            {
                "name": "Japanese “service charge” button",
                "emoji": "🈂️",
                "search": "japanese “service charge” button sa"
            },
            {
                "name": "Japanese “monthly amount” button",
                "emoji": "🈷️",
                "search": "japanese “monthly amount” button u6708"
            },
            {
                "name": "Japanese “not free of charge” button",
                "emoji": "🈶",
                "search": "japanese “not free of charge” button u6709"
            },
            {
                "name": "Japanese “reserved” button",
                "emoji": "🈯",
                "search": "japanese “reserved” button u6307"
            },
            {
                "name": "Japanese “bargain” button",
                "emoji": "🉐",
                "search": "japanese “bargain” button ideograph advantage"
            },
            {
                "name": "Japanese “discount” button",
                "emoji": "🈹",
                "search": "japanese “discount” button u5272"
            },
            {
                "name": "Japanese “free of charge” button",
                "emoji": "🈚",
                "search": "japanese “free of charge” button u7121"
            },
            {
                "name": "Japanese “prohibited” button",
                "emoji": "🈲",
                "search": "japanese “prohibited” button u7981"
            },
            {
                "name": "Japanese “acceptable” button",
                "emoji": "🉑",
                "search": "japanese “acceptable” button accept"
            },
            {
                "name": "Japanese “application” button",
                "emoji": "🈸",
                "search": "japanese “application” button u7533"
            },
            {
                "name": "Japanese “passing grade” button",
                "emoji": "🈴",
                "search": "japanese “passing grade” button u5408"
            },
            {
                "name": "Japanese “vacancy” button",
                "emoji": "🈳",
                "search": "japanese “vacancy” button u7a7a"
            },
            {
                "name": "Japanese “congratulations” button",
                "emoji": "㊗️",
                "search": "japanese “congratulations” button congratulations"
            },
            {
                "name": "Japanese “secret” button",
                "emoji": "㊙️",
                "search": "japanese “secret” button secret"
            },
            {
                "name": "Japanese “open for business” button",
                "emoji": "🈺",
                "search": "japanese “open for business” button u55b6"
            },
            {
                "name": "Japanese “no vacancy” button",
                "emoji": "🈵",
                "search": "japanese “no vacancy” button u6e80"
            },
            {
                "name": "red circle",
                "emoji": "🔴",
                "search": "red circle"
            },
            {
                "name": "orange circle",
                "emoji": "🟠",
                "search": "orange circle"
            },
            {
                "name": "yellow circle",
                "emoji": "🟡",
                "search": "yellow circle"
            },
            {
                "name": "green circle",
                "emoji": "🟢",
                "search": "green circle"
            },
            {
                "name": "blue circle",
                "emoji": "🔵",
                "search": "blue circle large"
            },
            {
                "name": "purple circle",
                "emoji": "🟣",
                "search": "purple circle"
            },
            {
                "name": "brown circle",
                "emoji": "🟤",
                "search": "brown circle"
            },
            {
                "name": "black circle",
                "emoji": "⚫",
                "search": "black circle"
            },
            {
                "name": "white circle",
                "emoji": "⚪",
                "search": "white circle"
            },
            {
                "name": "red square",
                "emoji": "🟥",
                "search": "red square"
            },
            {
                "name": "orange square",
                "emoji": "🟧",
                "search": "orange square"
            },
            {
                "name": "yellow square",
                "emoji": "🟨",
                "search": "yellow square"
            },
            {
                "name": "green square",
                "emoji": "🟩",
                "search": "green square"
            },
            {
                "name": "blue square",
                "emoji": "🟦",
                "search": "blue square"
            },
            {
                "name": "purple square",
                "emoji": "🟪",
                "search": "purple square"
            },
            {
                "name": "brown square",
                "emoji": "🟫",
                "search": "brown square"
            },
            {
                "name": "black large square",
                "emoji": "⬛",
                "search": "black large square"
            },
            {
                "name": "white large square",
                "emoji": "⬜",
                "search": "white large square"
            },
            {
                "name": "black medium square",
                "emoji": "◼️",
                "search": "black medium square"
            },
            {
                "name": "white medium square",
                "emoji": "◻️",
                "search": "white medium square"
            },
            {
                "name": "black medium-small square",
                "emoji": "◾",
                "search": "black medium-small square medium small"
            },
            {
                "name": "white medium-small square",
                "emoji": "◽",
                "search": "white medium-small square medium small"
            },
            {
                "name": "black small square",
                "emoji": "▪️",
                "search": "black small square"
            },
            {
                "name": "white small square",
                "emoji": "▫️",
                "search": "white small square"
            },
            {
                "name": "large orange diamond",
                "emoji": "🔶",
                "search": "large orange diamond"
            },
            {
                "name": "large blue diamond",
                "emoji": "🔷",
                "search": "large blue diamond"
            },
            {
                "name": "small orange diamond",
                "emoji": "🔸",
                "search": "small orange diamond"
            },
            {
                "name": "small blue diamond",
                "emoji": "🔹",
                "search": "small blue diamond"
            },
            {
                "name": "red triangle pointed up",
                "emoji": "🔺",
                "search": "red triangle pointed up small"
            },
            {
                "name": "red triangle pointed down",
                "emoji": "🔻",
                "search": "red triangle pointed down small"
            },
            {
                "name": "diamond with a dot",
                "emoji": "💠",
                "search": "diamond with a dot shape inside"
            },
            {
                "name": "radio button",
                "emoji": "🔘",
                "search": "radio button"
            },
            {
                "name": "white square button",
                "emoji": "🔳",
                "search": "white square button"
            },
            {
                "name": "black square button",
                "emoji": "🔲",
                "search": "black square button"
            }
        ]
    },
    [EEmojiCategory.Flags]: {
        "name": "Flags",
        "emojis": [
            {
                "name": "chequered flag",
                "emoji": "🏁",
                "search": "chequered flag milestone finish checkered"
            },
            {
                "name": "triangular flag",
                "emoji": "🚩",
                "search": "triangular flag on post"
            },
            {
                "name": "crossed flags",
                "emoji": "🎌",
                "search": "crossed flags"
            },
            {
                "name": "black flag",
                "emoji": "🏴",
                "search": "black flag"
            },
            {
                "name": "white flag",
                "emoji": "🏳️",
                "search": "white flag"
            },
            {
                "name": "rainbow flag",
                "emoji": "🏳️‍🌈",
                "search": "rainbow flag pride"
            },
            {
                "name": "transgender flag",
                "emoji": "🏳️‍⚧️",
                "search": "transgender flag"
            },
            {
                "name": "pirate flag",
                "emoji": "🏴‍☠️",
                "search": "pirate flag"
            },
            {
                "name": "flag: Ascension Island",
                "emoji": "🇦🇨",
                "search": "flag: ascension island"
            },
            {
                "name": "flag: Andorra",
                "emoji": "🇦🇩",
                "search": "flag: andorra"
            },
            {
                "name": "flag: United Arab Emirates",
                "emoji": "🇦🇪",
                "search": "flag: united arab emirates"
            },
            {
                "name": "flag: Afghanistan",
                "emoji": "🇦🇫",
                "search": "flag: afghanistan"
            },
            {
                "name": "flag: Antigua & Barbuda",
                "emoji": "🇦🇬",
                "search": "flag: antigua & barbuda"
            },
            {
                "name": "flag: Anguilla",
                "emoji": "🇦🇮",
                "search": "flag: anguilla"
            },
            {
                "name": "flag: Albania",
                "emoji": "🇦🇱",
                "search": "flag: albania"
            },
            {
                "name": "flag: Armenia",
                "emoji": "🇦🇲",
                "search": "flag: armenia"
            },
            {
                "name": "flag: Angola",
                "emoji": "🇦🇴",
                "search": "flag: angola"
            },
            {
                "name": "flag: Antarctica",
                "emoji": "🇦🇶",
                "search": "flag: antarctica"
            },
            {
                "name": "flag: Argentina",
                "emoji": "🇦🇷",
                "search": "flag: argentina"
            },
            {
                "name": "flag: American Samoa",
                "emoji": "🇦🇸",
                "search": "flag: american samoa"
            },
            {
                "name": "flag: Austria",
                "emoji": "🇦🇹",
                "search": "flag: austria"
            },
            {
                "name": "flag: Australia",
                "emoji": "🇦🇺",
                "search": "flag: australia"
            },
            {
                "name": "flag: Aruba",
                "emoji": "🇦🇼",
                "search": "flag: aruba"
            },
            {
                "name": "flag: Åland Islands",
                "emoji": "🇦🇽",
                "search": "flag: åland islands aland"
            },
            {
                "name": "flag: Azerbaijan",
                "emoji": "🇦🇿",
                "search": "flag: azerbaijan"
            },
            {
                "name": "flag: Bosnia & Herzegovina",
                "emoji": "🇧🇦",
                "search": "flag: bosnia & herzegovina"
            },
            {
                "name": "flag: Barbados",
                "emoji": "🇧🇧",
                "search": "flag: barbados"
            },
            {
                "name": "flag: Bangladesh",
                "emoji": "🇧🇩",
                "search": "flag: bangladesh"
            },
            {
                "name": "flag: Belgium",
                "emoji": "🇧🇪",
                "search": "flag: belgium"
            },
            {
                "name": "flag: Burkina Faso",
                "emoji": "🇧🇫",
                "search": "flag: burkina faso"
            },
            {
                "name": "flag: Bulgaria",
                "emoji": "🇧🇬",
                "search": "flag: bulgaria"
            },
            {
                "name": "flag: Bahrain",
                "emoji": "🇧🇭",
                "search": "flag: bahrain"
            },
            {
                "name": "flag: Burundi",
                "emoji": "🇧🇮",
                "search": "flag: burundi"
            },
            {
                "name": "flag: Benin",
                "emoji": "🇧🇯",
                "search": "flag: benin"
            },
            {
                "name": "flag: St. Barthélemy",
                "emoji": "🇧🇱",
                "search": "flag: st. barthélemy st barthelemy"
            },
            {
                "name": "flag: Bermuda",
                "emoji": "🇧🇲",
                "search": "flag: bermuda"
            },
            {
                "name": "flag: Brunei",
                "emoji": "🇧🇳",
                "search": "flag: brunei"
            },
            {
                "name": "flag: Bolivia",
                "emoji": "🇧🇴",
                "search": "flag: bolivia"
            },
            {
                "name": "flag: Caribbean Netherlands",
                "emoji": "🇧🇶",
                "search": "flag: caribbean netherlands"
            },
            {
                "name": "flag: Brazil",
                "emoji": "🇧🇷",
                "search": "flag: brazil"
            },
            {
                "name": "flag: Bahamas",
                "emoji": "🇧🇸",
                "search": "flag: bahamas"
            },
            {
                "name": "flag: Bhutan",
                "emoji": "🇧🇹",
                "search": "flag: bhutan"
            },
            {
                "name": "flag: Bouvet Island",
                "emoji": "🇧🇻",
                "search": "flag: bouvet island"
            },
            {
                "name": "flag: Botswana",
                "emoji": "🇧🇼",
                "search": "flag: botswana"
            },
            {
                "name": "flag: Belarus",
                "emoji": "🇧🇾",
                "search": "flag: belarus"
            },
            {
                "name": "flag: Belize",
                "emoji": "🇧🇿",
                "search": "flag: belize"
            },
            {
                "name": "flag: Canada",
                "emoji": "🇨🇦",
                "search": "flag: canada"
            },
            {
                "name": "flag: Cocos (Keeling) Islands",
                "emoji": "🇨🇨",
                "search": "flag: cocos (keeling) islands keeling"
            },
            {
                "name": "flag: Congo - Kinshasa",
                "emoji": "🇨🇩",
                "search": "flag: congo - kinshasa"
            },
            {
                "name": "flag: Central African Republic",
                "emoji": "🇨🇫",
                "search": "flag: central african republic"
            },
            {
                "name": "flag: Congo - Brazzaville",
                "emoji": "🇨🇬",
                "search": "flag: congo - brazzaville"
            },
            {
                "name": "flag: Switzerland",
                "emoji": "🇨🇭",
                "search": "flag: switzerland"
            },
            {
                "name": "flag: Côte d’Ivoire",
                "emoji": "🇨🇮",
                "search": "flag: côte d’ivoire ivory cote divoire"
            },
            {
                "name": "flag: Cook Islands",
                "emoji": "🇨🇰",
                "search": "flag: cook islands"
            },
            {
                "name": "flag: Chile",
                "emoji": "🇨🇱",
                "search": "flag: chile"
            },
            {
                "name": "flag: Cameroon",
                "emoji": "🇨🇲",
                "search": "flag: cameroon"
            },
            {
                "name": "flag: China",
                "emoji": "🇨🇳",
                "search": "flag: china cn"
            },
            {
                "name": "flag: Colombia",
                "emoji": "🇨🇴",
                "search": "flag: colombia"
            },
            {
                "name": "flag: Clipperton Island",
                "emoji": "🇨🇵",
                "search": "flag: clipperton island"
            },
            {
                "name": "flag: Costa Rica",
                "emoji": "🇨🇷",
                "search": "flag: costa rica"
            },
            {
                "name": "flag: Cuba",
                "emoji": "🇨🇺",
                "search": "flag: cuba"
            },
            {
                "name": "flag: Cape Verde",
                "emoji": "🇨🇻",
                "search": "flag: cape verde"
            },
            {
                "name": "flag: Curaçao",
                "emoji": "🇨🇼",
                "search": "flag: curaçao curacao"
            },
            {
                "name": "flag: Christmas Island",
                "emoji": "🇨🇽",
                "search": "flag: christmas island"
            },
            {
                "name": "flag: Cyprus",
                "emoji": "🇨🇾",
                "search": "flag: cyprus"
            },
            {
                "name": "flag: Czechia",
                "emoji": "🇨🇿",
                "search": "flag: czechia czech republic"
            },
            {
                "name": "flag: Germany",
                "emoji": "🇩🇪",
                "search": "flag: germany flag de"
            },
            {
                "name": "flag: Diego Garcia",
                "emoji": "🇩🇬",
                "search": "flag: diego garcia"
            },
            {
                "name": "flag: Djibouti",
                "emoji": "🇩🇯",
                "search": "flag: djibouti"
            },
            {
                "name": "flag: Denmark",
                "emoji": "🇩🇰",
                "search": "flag: denmark"
            },
            {
                "name": "flag: Dominica",
                "emoji": "🇩🇲",
                "search": "flag: dominica"
            },
            {
                "name": "flag: Dominican Republic",
                "emoji": "🇩🇴",
                "search": "flag: dominican republic"
            },
            {
                "name": "flag: Algeria",
                "emoji": "🇩🇿",
                "search": "flag: algeria"
            },
            {
                "name": "flag: Ceuta & Melilla",
                "emoji": "🇪🇦",
                "search": "flag: ceuta & melilla"
            },
            {
                "name": "flag: Ecuador",
                "emoji": "🇪🇨",
                "search": "flag: ecuador"
            },
            {
                "name": "flag: Estonia",
                "emoji": "🇪🇪",
                "search": "flag: estonia"
            },
            {
                "name": "flag: Egypt",
                "emoji": "🇪🇬",
                "search": "flag: egypt"
            },
            {
                "name": "flag: Western Sahara",
                "emoji": "🇪🇭",
                "search": "flag: western sahara"
            },
            {
                "name": "flag: Eritrea",
                "emoji": "🇪🇷",
                "search": "flag: eritrea"
            },
            {
                "name": "flag: Spain",
                "emoji": "🇪🇸",
                "search": "flag: spain es"
            },
            {
                "name": "flag: Ethiopia",
                "emoji": "🇪🇹",
                "search": "flag: ethiopia"
            },
            {
                "name": "flag: European Union",
                "emoji": "🇪🇺",
                "search": "flag: european union eu"
            },
            {
                "name": "flag: Finland",
                "emoji": "🇫🇮",
                "search": "flag: finland"
            },
            {
                "name": "flag: Fiji",
                "emoji": "🇫🇯",
                "search": "flag: fiji"
            },
            {
                "name": "flag: Falkland Islands",
                "emoji": "🇫🇰",
                "search": "flag: falkland islands"
            },
            {
                "name": "flag: Micronesia",
                "emoji": "🇫🇲",
                "search": "flag: micronesia"
            },
            {
                "name": "flag: Faroe Islands",
                "emoji": "🇫🇴",
                "search": "flag: faroe islands"
            },
            {
                "name": "flag: France",
                "emoji": "🇫🇷",
                "search": "flag: france french fr"
            },
            {
                "name": "flag: Gabon",
                "emoji": "🇬🇦",
                "search": "flag: gabon"
            },
            {
                "name": "flag: United Kingdom",
                "emoji": "🇬🇧",
                "search": "flag: united kingdom flag british gb uk"
            },
            {
                "name": "flag: Grenada",
                "emoji": "🇬🇩",
                "search": "flag: grenada"
            },
            {
                "name": "flag: Georgia",
                "emoji": "🇬🇪",
                "search": "flag: georgia"
            },
            {
                "name": "flag: French Guiana",
                "emoji": "🇬🇫",
                "search": "flag: french guiana"
            },
            {
                "name": "flag: Guernsey",
                "emoji": "🇬🇬",
                "search": "flag: guernsey"
            },
            {
                "name": "flag: Ghana",
                "emoji": "🇬🇭",
                "search": "flag: ghana"
            },
            {
                "name": "flag: Gibraltar",
                "emoji": "🇬🇮",
                "search": "flag: gibraltar"
            },
            {
                "name": "flag: Greenland",
                "emoji": "🇬🇱",
                "search": "flag: greenland"
            },
            {
                "name": "flag: Gambia",
                "emoji": "🇬🇲",
                "search": "flag: gambia"
            },
            {
                "name": "flag: Guinea",
                "emoji": "🇬🇳",
                "search": "flag: guinea"
            },
            {
                "name": "flag: Guadeloupe",
                "emoji": "🇬🇵",
                "search": "flag: guadeloupe"
            },
            {
                "name": "flag: Equatorial Guinea",
                "emoji": "🇬🇶",
                "search": "flag: equatorial guinea"
            },
            {
                "name": "flag: Greece",
                "emoji": "🇬🇷",
                "search": "flag: greece"
            },
            {
                "name": "flag: South Georgia & South Sandwich Islands",
                "emoji": "🇬🇸",
                "search": "flag: south georgia & sandwich islands"
            },
            {
                "name": "flag: Guatemala",
                "emoji": "🇬🇹",
                "search": "flag: guatemala"
            },
            {
                "name": "flag: Guam",
                "emoji": "🇬🇺",
                "search": "flag: guam"
            },
            {
                "name": "flag: Guinea-Bissau",
                "emoji": "🇬🇼",
                "search": "flag: guinea-bissau guinea bissau"
            },
            {
                "name": "flag: Guyana",
                "emoji": "🇬🇾",
                "search": "flag: guyana"
            },
            {
                "name": "flag: Hong Kong SAR China",
                "emoji": "🇭🇰",
                "search": "flag: hong kong sar china"
            },
            {
                "name": "flag: Heard & McDonald Islands",
                "emoji": "🇭🇲",
                "search": "flag: heard & mcdonald islands"
            },
            {
                "name": "flag: Honduras",
                "emoji": "🇭🇳",
                "search": "flag: honduras"
            },
            {
                "name": "flag: Croatia",
                "emoji": "🇭🇷",
                "search": "flag: croatia"
            },
            {
                "name": "flag: Haiti",
                "emoji": "🇭🇹",
                "search": "flag: haiti"
            },
            {
                "name": "flag: Hungary",
                "emoji": "🇭🇺",
                "search": "flag: hungary"
            },
            {
                "name": "flag: Canary Islands",
                "emoji": "🇮🇨",
                "search": "flag: canary islands"
            },
            {
                "name": "flag: Indonesia",
                "emoji": "🇮🇩",
                "search": "flag: indonesia"
            },
            {
                "name": "flag: Ireland",
                "emoji": "🇮🇪",
                "search": "flag: ireland"
            },
            {
                "name": "flag: Israel",
                "emoji": "🇮🇱",
                "search": "flag: israel"
            },
            {
                "name": "flag: Isle of Man",
                "emoji": "🇮🇲",
                "search": "flag: isle of man"
            },
            {
                "name": "flag: India",
                "emoji": "🇮🇳",
                "search": "flag: india"
            },
            {
                "name": "flag: British Indian Ocean Territory",
                "emoji": "🇮🇴",
                "search": "flag: british indian ocean territory"
            },
            {
                "name": "flag: Iraq",
                "emoji": "🇮🇶",
                "search": "flag: iraq"
            },
            {
                "name": "flag: Iran",
                "emoji": "🇮🇷",
                "search": "flag: iran"
            },
            {
                "name": "flag: Iceland",
                "emoji": "🇮🇸",
                "search": "flag: iceland"
            },
            {
                "name": "flag: Italy",
                "emoji": "🇮🇹",
                "search": "flag: italy it"
            },
            {
                "name": "flag: Jersey",
                "emoji": "🇯🇪",
                "search": "flag: jersey"
            },
            {
                "name": "flag: Jamaica",
                "emoji": "🇯🇲",
                "search": "flag: jamaica"
            },
            {
                "name": "flag: Jordan",
                "emoji": "🇯🇴",
                "search": "flag: jordan"
            },
            {
                "name": "flag: Japan",
                "emoji": "🇯🇵",
                "search": "flag: japan jp"
            },
            {
                "name": "flag: Kenya",
                "emoji": "🇰🇪",
                "search": "flag: kenya"
            },
            {
                "name": "flag: Kyrgyzstan",
                "emoji": "🇰🇬",
                "search": "flag: kyrgyzstan"
            },
            {
                "name": "flag: Cambodia",
                "emoji": "🇰🇭",
                "search": "flag: cambodia"
            },
            {
                "name": "flag: Kiribati",
                "emoji": "🇰🇮",
                "search": "flag: kiribati"
            },
            {
                "name": "flag: Comoros",
                "emoji": "🇰🇲",
                "search": "flag: comoros"
            },
            {
                "name": "flag: St. Kitts & Nevis",
                "emoji": "🇰🇳",
                "search": "flag: st. kitts & nevis st"
            },
            {
                "name": "flag: North Korea",
                "emoji": "🇰🇵",
                "search": "flag: north korea"
            },
            {
                "name": "flag: South Korea",
                "emoji": "🇰🇷",
                "search": "flag: south korea kr"
            },
            {
                "name": "flag: Kuwait",
                "emoji": "🇰🇼",
                "search": "flag: kuwait"
            },
            {
                "name": "flag: Cayman Islands",
                "emoji": "🇰🇾",
                "search": "flag: cayman islands"
            },
            {
                "name": "flag: Kazakhstan",
                "emoji": "🇰🇿",
                "search": "flag: kazakhstan"
            },
            {
                "name": "flag: Laos",
                "emoji": "🇱🇦",
                "search": "flag: laos"
            },
            {
                "name": "flag: Lebanon",
                "emoji": "🇱🇧",
                "search": "flag: lebanon"
            },
            {
                "name": "flag: St. Lucia",
                "emoji": "🇱🇨",
                "search": "flag: st. lucia st"
            },
            {
                "name": "flag: Liechtenstein",
                "emoji": "🇱🇮",
                "search": "flag: liechtenstein"
            },
            {
                "name": "flag: Sri Lanka",
                "emoji": "🇱🇰",
                "search": "flag: sri lanka"
            },
            {
                "name": "flag: Liberia",
                "emoji": "🇱🇷",
                "search": "flag: liberia"
            },
            {
                "name": "flag: Lesotho",
                "emoji": "🇱🇸",
                "search": "flag: lesotho"
            },
            {
                "name": "flag: Lithuania",
                "emoji": "🇱🇹",
                "search": "flag: lithuania"
            },
            {
                "name": "flag: Luxembourg",
                "emoji": "🇱🇺",
                "search": "flag: luxembourg"
            },
            {
                "name": "flag: Latvia",
                "emoji": "🇱🇻",
                "search": "flag: latvia"
            },
            {
                "name": "flag: Libya",
                "emoji": "🇱🇾",
                "search": "flag: libya"
            },
            {
                "name": "flag: Morocco",
                "emoji": "🇲🇦",
                "search": "flag: morocco"
            },
            {
                "name": "flag: Monaco",
                "emoji": "🇲🇨",
                "search": "flag: monaco"
            },
            {
                "name": "flag: Moldova",
                "emoji": "🇲🇩",
                "search": "flag: moldova"
            },
            {
                "name": "flag: Montenegro",
                "emoji": "🇲🇪",
                "search": "flag: montenegro"
            },
            {
                "name": "flag: St. Martin",
                "emoji": "🇲🇫",
                "search": "flag: st. martin st"
            },
            {
                "name": "flag: Madagascar",
                "emoji": "🇲🇬",
                "search": "flag: madagascar"
            },
            {
                "name": "flag: Marshall Islands",
                "emoji": "🇲🇭",
                "search": "flag: marshall islands"
            },
            {
                "name": "flag: North Macedonia",
                "emoji": "🇲🇰",
                "search": "flag: north macedonia"
            },
            {
                "name": "flag: Mali",
                "emoji": "🇲🇱",
                "search": "flag: mali"
            },
            {
                "name": "flag: Myanmar (Burma)",
                "emoji": "🇲🇲",
                "search": "flag: myanmar (burma) burma"
            },
            {
                "name": "flag: Mongolia",
                "emoji": "🇲🇳",
                "search": "flag: mongolia"
            },
            {
                "name": "flag: Macao SAR China",
                "emoji": "🇲🇴",
                "search": "flag: macao sar china macau"
            },
            {
                "name": "flag: Northern Mariana Islands",
                "emoji": "🇲🇵",
                "search": "flag: northern mariana islands"
            },
            {
                "name": "flag: Martinique",
                "emoji": "🇲🇶",
                "search": "flag: martinique"
            },
            {
                "name": "flag: Mauritania",
                "emoji": "🇲🇷",
                "search": "flag: mauritania"
            },
            {
                "name": "flag: Montserrat",
                "emoji": "🇲🇸",
                "search": "flag: montserrat"
            },
            {
                "name": "flag: Malta",
                "emoji": "🇲🇹",
                "search": "flag: malta"
            },
            {
                "name": "flag: Mauritius",
                "emoji": "🇲🇺",
                "search": "flag: mauritius"
            },
            {
                "name": "flag: Maldives",
                "emoji": "🇲🇻",
                "search": "flag: maldives"
            },
            {
                "name": "flag: Malawi",
                "emoji": "🇲🇼",
                "search": "flag: malawi"
            },
            {
                "name": "flag: Mexico",
                "emoji": "🇲🇽",
                "search": "flag: mexico"
            },
            {
                "name": "flag: Malaysia",
                "emoji": "🇲🇾",
                "search": "flag: malaysia"
            },
            {
                "name": "flag: Mozambique",
                "emoji": "🇲🇿",
                "search": "flag: mozambique"
            },
            {
                "name": "flag: Namibia",
                "emoji": "🇳🇦",
                "search": "flag: namibia"
            },
            {
                "name": "flag: New Caledonia",
                "emoji": "🇳🇨",
                "search": "flag: new caledonia"
            },
            {
                "name": "flag: Niger",
                "emoji": "🇳🇪",
                "search": "flag: niger"
            },
            {
                "name": "flag: Norfolk Island",
                "emoji": "🇳🇫",
                "search": "flag: norfolk island"
            },
            {
                "name": "flag: Nigeria",
                "emoji": "🇳🇬",
                "search": "flag: nigeria"
            },
            {
                "name": "flag: Nicaragua",
                "emoji": "🇳🇮",
                "search": "flag: nicaragua"
            },
            {
                "name": "flag: Netherlands",
                "emoji": "🇳🇱",
                "search": "flag: netherlands"
            },
            {
                "name": "flag: Norway",
                "emoji": "🇳🇴",
                "search": "flag: norway"
            },
            {
                "name": "flag: Nepal",
                "emoji": "🇳🇵",
                "search": "flag: nepal"
            },
            {
                "name": "flag: Nauru",
                "emoji": "🇳🇷",
                "search": "flag: nauru"
            },
            {
                "name": "flag: Niue",
                "emoji": "🇳🇺",
                "search": "flag: niue"
            },
            {
                "name": "flag: New Zealand",
                "emoji": "🇳🇿",
                "search": "flag: new zealand"
            },
            {
                "name": "flag: Oman",
                "emoji": "🇴🇲",
                "search": "flag: oman"
            },
            {
                "name": "flag: Panama",
                "emoji": "🇵🇦",
                "search": "flag: panama"
            },
            {
                "name": "flag: Peru",
                "emoji": "🇵🇪",
                "search": "flag: peru"
            },
            {
                "name": "flag: French Polynesia",
                "emoji": "🇵🇫",
                "search": "flag: french polynesia"
            },
            {
                "name": "flag: Papua New Guinea",
                "emoji": "🇵🇬",
                "search": "flag: papua new guinea"
            },
            {
                "name": "flag: Philippines",
                "emoji": "🇵🇭",
                "search": "flag: philippines"
            },
            {
                "name": "flag: Pakistan",
                "emoji": "🇵🇰",
                "search": "flag: pakistan"
            },
            {
                "name": "flag: Poland",
                "emoji": "🇵🇱",
                "search": "flag: poland"
            },
            {
                "name": "flag: St. Pierre & Miquelon",
                "emoji": "🇵🇲",
                "search": "flag: st. pierre & miquelon st"
            },
            {
                "name": "flag: Pitcairn Islands",
                "emoji": "🇵🇳",
                "search": "flag: pitcairn islands"
            },
            {
                "name": "flag: Puerto Rico",
                "emoji": "🇵🇷",
                "search": "flag: puerto rico"
            },
            {
                "name": "flag: Palestinian Territories",
                "emoji": "🇵🇸",
                "search": "flag: palestinian territories"
            },
            {
                "name": "flag: Portugal",
                "emoji": "🇵🇹",
                "search": "flag: portugal"
            },
            {
                "name": "flag: Palau",
                "emoji": "🇵🇼",
                "search": "flag: palau"
            },
            {
                "name": "flag: Paraguay",
                "emoji": "🇵🇾",
                "search": "flag: paraguay"
            },
            {
                "name": "flag: Qatar",
                "emoji": "🇶🇦",
                "search": "flag: qatar"
            },
            {
                "name": "flag: Réunion",
                "emoji": "🇷🇪",
                "search": "flag: réunion reunion"
            },
            {
                "name": "flag: Romania",
                "emoji": "🇷🇴",
                "search": "flag: romania"
            },
            {
                "name": "flag: Serbia",
                "emoji": "🇷🇸",
                "search": "flag: serbia"
            },
            {
                "name": "flag: Russia",
                "emoji": "🇷🇺",
                "search": "flag: russia ru"
            },
            {
                "name": "flag: Rwanda",
                "emoji": "🇷🇼",
                "search": "flag: rwanda"
            },
            {
                "name": "flag: Saudi Arabia",
                "emoji": "🇸🇦",
                "search": "flag: saudi arabia"
            },
            {
                "name": "flag: Solomon Islands",
                "emoji": "🇸🇧",
                "search": "flag: solomon islands"
            },
            {
                "name": "flag: Seychelles",
                "emoji": "🇸🇨",
                "search": "flag: seychelles"
            },
            {
                "name": "flag: Sudan",
                "emoji": "🇸🇩",
                "search": "flag: sudan"
            },
            {
                "name": "flag: Sweden",
                "emoji": "🇸🇪",
                "search": "flag: sweden"
            },
            {
                "name": "flag: Singapore",
                "emoji": "🇸🇬",
                "search": "flag: singapore"
            },
            {
                "name": "flag: St. Helena",
                "emoji": "🇸🇭",
                "search": "flag: st. helena st"
            },
            {
                "name": "flag: Slovenia",
                "emoji": "🇸🇮",
                "search": "flag: slovenia"
            },
            {
                "name": "flag: Svalbard & Jan Mayen",
                "emoji": "🇸🇯",
                "search": "flag: svalbard & jan mayen"
            },
            {
                "name": "flag: Slovakia",
                "emoji": "🇸🇰",
                "search": "flag: slovakia"
            },
            {
                "name": "flag: Sierra Leone",
                "emoji": "🇸🇱",
                "search": "flag: sierra leone"
            },
            {
                "name": "flag: San Marino",
                "emoji": "🇸🇲",
                "search": "flag: san marino"
            },
            {
                "name": "flag: Senegal",
                "emoji": "🇸🇳",
                "search": "flag: senegal"
            },
            {
                "name": "flag: Somalia",
                "emoji": "🇸🇴",
                "search": "flag: somalia"
            },
            {
                "name": "flag: Suriname",
                "emoji": "🇸🇷",
                "search": "flag: suriname"
            },
            {
                "name": "flag: South Sudan",
                "emoji": "🇸🇸",
                "search": "flag: south sudan"
            },
            {
                "name": "flag: São Tomé & Príncipe",
                "emoji": "🇸🇹",
                "search": "flag: são tomé & príncipe sao tome principe"
            },
            {
                "name": "flag: El Salvador",
                "emoji": "🇸🇻",
                "search": "flag: el salvador"
            },
            {
                "name": "flag: Sint Maarten",
                "emoji": "🇸🇽",
                "search": "flag: sint maarten"
            },
            {
                "name": "flag: Syria",
                "emoji": "🇸🇾",
                "search": "flag: syria"
            },
            {
                "name": "flag: Eswatini",
                "emoji": "🇸🇿",
                "search": "flag: eswatini swaziland"
            },
            {
                "name": "flag: Tristan da Cunha",
                "emoji": "🇹🇦",
                "search": "flag: tristan da cunha"
            },
            {
                "name": "flag: Turks & Caicos Islands",
                "emoji": "🇹🇨",
                "search": "flag: turks & caicos islands"
            },
            {
                "name": "flag: Chad",
                "emoji": "🇹🇩",
                "search": "flag: chad"
            },
            {
                "name": "flag: French Southern Territories",
                "emoji": "🇹🇫",
                "search": "flag: french southern territories"
            },
            {
                "name": "flag: Togo",
                "emoji": "🇹🇬",
                "search": "flag: togo"
            },
            {
                "name": "flag: Thailand",
                "emoji": "🇹🇭",
                "search": "flag: thailand"
            },
            {
                "name": "flag: Tajikistan",
                "emoji": "🇹🇯",
                "search": "flag: tajikistan"
            },
            {
                "name": "flag: Tokelau",
                "emoji": "🇹🇰",
                "search": "flag: tokelau"
            },
            {
                "name": "flag: Timor-Leste",
                "emoji": "🇹🇱",
                "search": "flag: timor-leste timor leste"
            },
            {
                "name": "flag: Turkmenistan",
                "emoji": "🇹🇲",
                "search": "flag: turkmenistan"
            },
            {
                "name": "flag: Tunisia",
                "emoji": "🇹🇳",
                "search": "flag: tunisia"
            },
            {
                "name": "flag: Tonga",
                "emoji": "🇹🇴",
                "search": "flag: tonga"
            },
            {
                "name": "flag: Turkey",
                "emoji": "🇹🇷",
                "search": "flag: turkey tr"
            },
            {
                "name": "flag: Trinidad & Tobago",
                "emoji": "🇹🇹",
                "search": "flag: trinidad & tobago"
            },
            {
                "name": "flag: Tuvalu",
                "emoji": "🇹🇻",
                "search": "flag: tuvalu"
            },
            {
                "name": "flag: Taiwan",
                "emoji": "🇹🇼",
                "search": "flag: taiwan"
            },
            {
                "name": "flag: Tanzania",
                "emoji": "🇹🇿",
                "search": "flag: tanzania"
            },
            {
                "name": "flag: Ukraine",
                "emoji": "🇺🇦",
                "search": "flag: ukraine"
            },
            {
                "name": "flag: Uganda",
                "emoji": "🇺🇬",
                "search": "flag: uganda"
            },
            {
                "name": "flag: U.S. Outlying Islands",
                "emoji": "🇺🇲",
                "search": "flag: u.s. outlying islands us"
            },
            {
                "name": "flag: United Nations",
                "emoji": "🇺🇳",
                "search": "flag: united nations"
            },
            {
                "name": "flag: United States",
                "emoji": "🇺🇸",
                "search": "flag: united states flag america us"
            },
            {
                "name": "flag: Uruguay",
                "emoji": "🇺🇾",
                "search": "flag: uruguay"
            },
            {
                "name": "flag: Uzbekistan",
                "emoji": "🇺🇿",
                "search": "flag: uzbekistan"
            },
            {
                "name": "flag: Vatican City",
                "emoji": "🇻🇦",
                "search": "flag: vatican city"
            },
            {
                "name": "flag: St. Vincent & Grenadines",
                "emoji": "🇻🇨",
                "search": "flag: st. vincent & grenadines st"
            },
            {
                "name": "flag: Venezuela",
                "emoji": "🇻🇪",
                "search": "flag: venezuela"
            },
            {
                "name": "flag: British Virgin Islands",
                "emoji": "🇻🇬",
                "search": "flag: british virgin islands"
            },
            {
                "name": "flag: U.S. Virgin Islands",
                "emoji": "🇻🇮",
                "search": "flag: u.s. virgin islands us"
            },
            {
                "name": "flag: Vietnam",
                "emoji": "🇻🇳",
                "search": "flag: vietnam"
            },
            {
                "name": "flag: Vanuatu",
                "emoji": "🇻🇺",
                "search": "flag: vanuatu"
            },
            {
                "name": "flag: Wallis & Futuna",
                "emoji": "🇼🇫",
                "search": "flag: wallis & futuna"
            },
            {
                "name": "flag: Samoa",
                "emoji": "🇼🇸",
                "search": "flag: samoa"
            },
            {
                "name": "flag: Kosovo",
                "emoji": "🇽🇰",
                "search": "flag: kosovo"
            },
            {
                "name": "flag: Yemen",
                "emoji": "🇾🇪",
                "search": "flag: yemen"
            },
            {
                "name": "flag: Mayotte",
                "emoji": "🇾🇹",
                "search": "flag: mayotte"
            },
            {
                "name": "flag: South Africa",
                "emoji": "🇿🇦",
                "search": "flag: south africa"
            },
            {
                "name": "flag: Zambia",
                "emoji": "🇿🇲",
                "search": "flag: zambia"
            },
            {
                "name": "flag: Zimbabwe",
                "emoji": "🇿🇼",
                "search": "flag: zimbabwe"
            },
            {
                "name": "flag: England",
                "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
                "search": "flag: england"
            },
            {
                "name": "flag: Scotland",
                "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
                "search": "flag: scotland"
            },
            {
                "name": "flag: Wales",
                "emoji": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
                "search": "flag: wales"
            }
        ]
    }
};
