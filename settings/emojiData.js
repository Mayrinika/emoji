export default `# emoji-test.txt
# Date: 2019-01-27, 15:43:01 GMT
# © 2019 Unicode®, Inc.
# Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
# For terms of use, see http://www.unicode.org/terms_of_use.html
#
# Emoji Keyboard/Display Test Data for UTS #51
# Version: 12.0
#
# For documentation and usage, see http://www.unicode.org/reports/tr51
#
# This file provides data for testing which emoji forms should be in keyboards and which should also be displayed/processed.
# Format: code points; status # emoji name
#     Code points — list of one or more hex code points, separated by spaces
#     Status
#       component           — an Emoji_Component,
#                             excluding Regional_Indicators, ASCII, and non-Emoji.
#       fully-qualified     — a fully-qualified emoji (see ED-18 in UTS #51),
#                             excluding Emoji_Component
#       minimally-qualified — a minimally-qualified emoji (see ED-18a in UTS #51)
#       unqualified         — a unqualified emoji (See ED-19 in UTS #51)
# Notes:
#   • This includes the emoji components that need emoji presentation (skin tone and hair)
#     when isolated, but omits the components that need not have an emoji
#     presentation when isolated.
#   • The RGI set is covered by the listed fully-qualified emoji. 
#   • The listed minimally-qualified and unqualified cover all cases where an
#     element of the RGI set is missing one or more emoji presentation selectors.
#   • The file is in CLDR order, not codepoint order. This is recommended (but not required!) for keyboard palettes.
#   • The groups and subgroups are illustrative. See the Emoji Order chart for more information.


# group: Smileys & Emotion

# subgroup: face-smiling
1F600                                      ; fully-qualified     # 😀 grinning face
1F603                                      ; fully-qualified     # 😃 grinning face with big eyes
1F604                                      ; fully-qualified     # 😄 grinning face with smiling eyes
1F601                                      ; fully-qualified     # 😁 beaming face with smiling eyes
1F606                                      ; fully-qualified     # 😆 grinning squinting face
1F605                                      ; fully-qualified     # 😅 grinning face with sweat
1F923                                      ; fully-qualified     # 🤣 rolling on the floor laughing
1F602                                      ; fully-qualified     # 😂 face with tears of joy
1F642                                      ; fully-qualified     # 🙂 slightly smiling face
1F643                                      ; fully-qualified     # 🙃 upside-down face
1F609                                      ; fully-qualified     # 😉 winking face
1F60A                                      ; fully-qualified     # 😊 smiling face with smiling eyes
1F607                                      ; fully-qualified     # 😇 smiling face with halo

# subgroup: face-affection
1F970                                      ; fully-qualified     # 🥰 smiling face with hearts
1F60D                                      ; fully-qualified     # 😍 smiling face with heart-eyes
1F929                                      ; fully-qualified     # 🤩 star-struck
1F618                                      ; fully-qualified     # 😘 face blowing a kiss
1F617                                      ; fully-qualified     # 😗 kissing face
263A                                       ; unqualified         # ☺ smiling face
1F61A                                      ; fully-qualified     # 😚 kissing face with closed eyes
1F619                                      ; fully-qualified     # 😙 kissing face with smiling eyes

# subgroup: face-tongue
1F60B                                      ; fully-qualified     # 😋 face savoring food
1F61B                                      ; fully-qualified     # 😛 face with tongue
1F61C                                      ; fully-qualified     # 😜 winking face with tongue
1F92A                                      ; fully-qualified     # 🤪 zany face
1F61D                                      ; fully-qualified     # 😝 squinting face with tongue
1F911                                      ; fully-qualified     # 🤑 money-mouth face

# subgroup: face-hand
1F917                                      ; fully-qualified     # 🤗 hugging face
1F92D                                      ; fully-qualified     # 🤭 face with hand over mouth
1F92B                                      ; fully-qualified     # 🤫 shushing face
1F914                                      ; fully-qualified     # 🤔 thinking face

# subgroup: face-neutral-skeptical
1F910                                      ; fully-qualified     # 🤐 zipper-mouth face
1F928                                      ; fully-qualified     # 🤨 face with raised eyebrow
1F610                                      ; fully-qualified     # 😐 neutral face
1F611                                      ; fully-qualified     # 😑 expressionless face
1F636                                      ; fully-qualified     # 😶 face without mouth
1F60F                                      ; fully-qualified     # 😏 smirking face
1F612                                      ; fully-qualified     # 😒 unamused face
1F644                                      ; fully-qualified     # 🙄 face with rolling eyes
1F62C                                      ; fully-qualified     # 😬 grimacing face
1F925                                      ; fully-qualified     # 🤥 lying face

# subgroup: face-sleepy
1F60C                                      ; fully-qualified     # 😌 relieved face
1F614                                      ; fully-qualified     # 😔 pensive face
1F62A                                      ; fully-qualified     # 😪 sleepy face
1F924                                      ; fully-qualified     # 🤤 drooling face
1F634                                      ; fully-qualified     # 😴 sleeping face

# subgroup: face-unwell
1F637                                      ; fully-qualified     # 😷 face with medical mask
1F912                                      ; fully-qualified     # 🤒 face with thermometer
1F915                                      ; fully-qualified     # 🤕 face with head-bandage
1F922                                      ; fully-qualified     # 🤢 nauseated face
1F92E                                      ; fully-qualified     # 🤮 face vomiting
1F927                                      ; fully-qualified     # 🤧 sneezing face
1F975                                      ; fully-qualified     # 🥵 hot face
1F976                                      ; fully-qualified     # 🥶 cold face
1F974                                      ; fully-qualified     # 🥴 woozy face
1F635                                      ; fully-qualified     # 😵 dizzy face
1F92F                                      ; fully-qualified     # 🤯 exploding head

# subgroup: face-hat
1F920                                      ; fully-qualified     # 🤠 cowboy hat face
1F973                                      ; fully-qualified     # 🥳 partying face

# subgroup: face-glasses
1F60E                                      ; fully-qualified     # 😎 smiling face with sunglasses
1F913                                      ; fully-qualified     # 🤓 nerd face
1F9D0                                      ; fully-qualified     # 🧐 face with monocle

# subgroup: face-concerned
1F615                                      ; fully-qualified     # 😕 confused face
1F61F                                      ; fully-qualified     # 😟 worried face
1F641                                      ; fully-qualified     # 🙁 slightly frowning face
2639 FE0F                                  ; fully-qualified     # ☹️ frowning face
2639                                       ; unqualified         # ☹ frowning face
1F62E                                      ; fully-qualified     # 😮 face with open mouth
1F62F                                      ; fully-qualified     # 😯 hushed face
1F632                                      ; fully-qualified     # 😲 astonished face
1F633                                      ; fully-qualified     # 😳 flushed face
1F97A                                      ; fully-qualified     # 🥺 pleading face
1F626                                      ; fully-qualified     # 😦 frowning face with open mouth
1F627                                      ; fully-qualified     # 😧 anguished face
1F628                                      ; fully-qualified     # 😨 fearful face
1F630                                      ; fully-qualified     # 😰 anxious face with sweat
1F625                                      ; fully-qualified     # 😥 sad but relieved face
1F622                                      ; fully-qualified     # 😢 crying face
1F62D                                      ; fully-qualified     # 😭 loudly crying face
1F631                                      ; fully-qualified     # 😱 face screaming in fear
1F616                                      ; fully-qualified     # 😖 confounded face
1F623                                      ; fully-qualified     # 😣 persevering face
1F61E                                      ; fully-qualified     # 😞 disappointed face
1F613                                      ; fully-qualified     # 😓 downcast face with sweat
1F629                                      ; fully-qualified     # 😩 weary face
1F62B                                      ; fully-qualified     # 😫 tired face
1F971                                      ; fully-qualified     # 🥱 yawning face

# subgroup: face-negative
1F624                                      ; fully-qualified     # 😤 face with steam from nose
1F621                                      ; fully-qualified     # 😡 pouting face
1F620                                      ; fully-qualified     # 😠 angry face
1F92C                                      ; fully-qualified     # 🤬 face with symbols on mouth
1F608                                      ; fully-qualified     # 😈 smiling face with horns
1F47F                                      ; fully-qualified     # 👿 angry face with horns
1F480                                      ; fully-qualified     # 💀 skull
2620 FE0F                                  ; fully-qualified     # ☠️ skull and crossbones
2620                                       ; unqualified         # ☠ skull and crossbones

# subgroup: face-costume
1F4A9                                      ; fully-qualified     # 💩 pile of poo
1F921                                      ; fully-qualified     # 🤡 clown face
1F479                                      ; fully-qualified     # 👹 ogre
1F47A                                      ; fully-qualified     # 👺 goblin
1F47B                                      ; fully-qualified     # 👻 ghost
1F47D                                      ; fully-qualified     # 👽 alien
1F47E                                      ; fully-qualified     # 👾 alien monster
1F916                                      ; fully-qualified     # 🤖 robot

# subgroup: cat-face
1F63A                                      ; fully-qualified     # 😺 grinning cat
1F638                                      ; fully-qualified     # 😸 grinning cat with smiling eyes
1F639                                      ; fully-qualified     # 😹 cat with tears of joy
1F63B                                      ; fully-qualified     # 😻 smiling cat with heart-eyes
1F63C                                      ; fully-qualified     # 😼 cat with wry smile
1F63D                                      ; fully-qualified     # 😽 kissing cat
1F640                                      ; fully-qualified     # 🙀 weary cat
1F63F                                      ; fully-qualified     # 😿 crying cat
1F63E                                      ; fully-qualified     # 😾 pouting cat

# subgroup: monkey-face
1F648                                      ; fully-qualified     # 🙈 see-no-evil monkey
1F649                                      ; fully-qualified     # 🙉 hear-no-evil monkey
1F64A                                      ; fully-qualified     # 🙊 speak-no-evil monkey

# subgroup: emotion
1F48B                                      ; fully-qualified     # 💋 kiss mark
1F48C                                      ; fully-qualified     # 💌 love letter
1F498                                      ; fully-qualified     # 💘 heart with arrow
1F49D                                      ; fully-qualified     # 💝 heart with ribbon
1F496                                      ; fully-qualified     # 💖 sparkling heart
1F497                                      ; fully-qualified     # 💗 growing heart
1F493                                      ; fully-qualified     # 💓 beating heart
1F49E                                      ; fully-qualified     # 💞 revolving hearts
1F495                                      ; fully-qualified     # 💕 two hearts
1F49F                                      ; fully-qualified     # 💟 heart decoration
2763 FE0F                                  ; fully-qualified     # ❣️ heart exclamation
2763                                       ; unqualified         # ❣ heart exclamation
1F494                                      ; fully-qualified     # 💔 broken heart
2764 FE0F                                  ; fully-qualified     # ❤️ red heart
2764                                       ; unqualified         # ❤ red heart
1F9E1                                      ; fully-qualified     # 🧡 orange heart
1F49B                                      ; fully-qualified     # 💛 yellow heart
1F49A                                      ; fully-qualified     # 💚 green heart
1F499                                      ; fully-qualified     # 💙 blue heart
1F49C                                      ; fully-qualified     # 💜 purple heart
1F90E                                      ; fully-qualified     # 🤎 brown heart
1F5A4                                      ; fully-qualified     # 🖤 black heart
1F90D                                      ; fully-qualified     # 🤍 white heart
1F4AF                                      ; fully-qualified     # 💯 hundred points
1F4A2                                      ; fully-qualified     # 💢 anger symbol
1F4A5                                      ; fully-qualified     # 💥 collision
1F4AB                                      ; fully-qualified     # 💫 dizzy
1F4A6                                      ; fully-qualified     # 💦 sweat droplets
1F4A8                                      ; fully-qualified     # 💨 dashing away
1F573 FE0F                                 ; fully-qualified     # 🕳️ hole
1F573                                      ; unqualified         # 🕳 hole
1F4A3                                      ; fully-qualified     # 💣 bomb
1F4AC                                      ; fully-qualified     # 💬 speech balloon
1F441 FE0F 200D 1F5E8 FE0F                 ; fully-qualified     # 👁️‍🗨️ eye in speech bubble
1F441 200D 1F5E8 FE0F                      ; unqualified         # 👁‍🗨️ eye in speech bubble
1F441 FE0F 200D 1F5E8                      ; unqualified         # 👁️‍🗨 eye in speech bubble
1F441 200D 1F5E8                           ; unqualified         # 👁‍🗨 eye in speech bubble
1F5E8 FE0F                                 ; fully-qualified     # 🗨️ left speech bubble
1F5E8                                      ; unqualified         # 🗨 left speech bubble
1F5EF FE0F                                 ; fully-qualified     # 🗯️ right anger bubble
1F5EF                                      ; unqualified         # 🗯 right anger bubble
1F4AD                                      ; fully-qualified     # 💭 thought balloon
1F4A4                                      ; fully-qualified     # 💤 zzz

# Smileys & Emotion subtotal:\t\t160
# Smileys & Emotion subtotal:\t\t160\tw/o modifiers

# group: People & Body

# subgroup: hand-fingers-open
1F44B                                      ; fully-qualified     # 👋 waving hand
1F44B 1F3FB                                ; fully-qualified     # 👋🏻 waving hand: light skin tone
1F44B 1F3FC                                ; fully-qualified     # 👋🏼 waving hand: medium-light skin tone
1F44B 1F3FD                                ; fully-qualified     # 👋🏽 waving hand: medium skin tone
1F44B 1F3FE                                ; fully-qualified     # 👋🏾 waving hand: medium-dark skin tone
1F44B 1F3FF                                ; fully-qualified     # 👋🏿 waving hand: dark skin tone
1F91A                                      ; fully-qualified     # 🤚 raised back of hand
1F91A 1F3FB                                ; fully-qualified     # 🤚🏻 raised back of hand: light skin tone
1F91A 1F3FC                                ; fully-qualified     # 🤚🏼 raised back of hand: medium-light skin tone
1F91A 1F3FD                                ; fully-qualified     # 🤚🏽 raised back of hand: medium skin tone
1F91A 1F3FE                                ; fully-qualified     # 🤚🏾 raised back of hand: medium-dark skin tone
1F91A 1F3FF                                ; fully-qualified     # 🤚🏿 raised back of hand: dark skin tone
1F590 FE0F                                 ; fully-qualified     # 🖐️ hand with fingers splayed
1F590                                      ; unqualified         # 🖐 hand with fingers splayed
1F590 1F3FB                                ; fully-qualified     # 🖐🏻 hand with fingers splayed: light skin tone
1F590 1F3FC                                ; fully-qualified     # 🖐🏼 hand with fingers splayed: medium-light skin tone
1F590 1F3FD                                ; fully-qualified     # 🖐🏽 hand with fingers splayed: medium skin tone
1F590 1F3FE                                ; fully-qualified     # 🖐🏾 hand with fingers splayed: medium-dark skin tone
1F590 1F3FF                                ; fully-qualified     # 🖐🏿 hand with fingers splayed: dark skin tone
270B                                       ; fully-qualified     # ✋ raised hand
270B 1F3FB                                 ; fully-qualified     # ✋🏻 raised hand: light skin tone
270B 1F3FC                                 ; fully-qualified     # ✋🏼 raised hand: medium-light skin tone
270B 1F3FD                                 ; fully-qualified     # ✋🏽 raised hand: medium skin tone
270B 1F3FE                                 ; fully-qualified     # ✋🏾 raised hand: medium-dark skin tone
270B 1F3FF                                 ; fully-qualified     # ✋🏿 raised hand: dark skin tone
1F596                                      ; fully-qualified     # 🖖 vulcan salute
1F596 1F3FB                                ; fully-qualified     # 🖖🏻 vulcan salute: light skin tone
1F596 1F3FC                                ; fully-qualified     # 🖖🏼 vulcan salute: medium-light skin tone
1F596 1F3FD                                ; fully-qualified     # 🖖🏽 vulcan salute: medium skin tone
1F596 1F3FE                                ; fully-qualified     # 🖖🏾 vulcan salute: medium-dark skin tone
1F596 1F3FF                                ; fully-qualified     # 🖖🏿 vulcan salute: dark skin tone

# subgroup: hand-fingers-partial
1F44C                                      ; fully-qualified     # 👌 OK hand
1F44C 1F3FB                                ; fully-qualified     # 👌🏻 OK hand: light skin tone
1F44C 1F3FC                                ; fully-qualified     # 👌🏼 OK hand: medium-light skin tone
1F44C 1F3FD                                ; fully-qualified     # 👌🏽 OK hand: medium skin tone
1F44C 1F3FE                                ; fully-qualified     # 👌🏾 OK hand: medium-dark skin tone
1F44C 1F3FF                                ; fully-qualified     # 👌🏿 OK hand: dark skin tone
1F90F                                      ; fully-qualified     # 🤏 pinching hand
1F90F 1F3FB                                ; fully-qualified     # 🤏🏻 pinching hand: light skin tone
1F90F 1F3FC                                ; fully-qualified     # 🤏🏼 pinching hand: medium-light skin tone
1F90F 1F3FD                                ; fully-qualified     # 🤏🏽 pinching hand: medium skin tone
1F90F 1F3FE                                ; fully-qualified     # 🤏🏾 pinching hand: medium-dark skin tone
1F90F 1F3FF                                ; fully-qualified     # 🤏🏿 pinching hand: dark skin tone
270C FE0F                                  ; fully-qualified     # ✌️ victory hand
270C                                       ; unqualified         # ✌ victory hand
270C 1F3FB                                 ; fully-qualified     # ✌🏻 victory hand: light skin tone
270C 1F3FC                                 ; fully-qualified     # ✌🏼 victory hand: medium-light skin tone
270C 1F3FD                                 ; fully-qualified     # ✌🏽 victory hand: medium skin tone
270C 1F3FE                                 ; fully-qualified     # ✌🏾 victory hand: medium-dark skin tone
270C 1F3FF                                 ; fully-qualified     # ✌🏿 victory hand: dark skin tone
1F91E                                      ; fully-qualified     # 🤞 crossed fingers
1F91E 1F3FB                                ; fully-qualified     # 🤞🏻 crossed fingers: light skin tone
1F91E 1F3FC                                ; fully-qualified     # 🤞🏼 crossed fingers: medium-light skin tone
1F91E 1F3FD                                ; fully-qualified     # 🤞🏽 crossed fingers: medium skin tone
1F91E 1F3FE                                ; fully-qualified     # 🤞🏾 crossed fingers: medium-dark skin tone
1F91E 1F3FF                                ; fully-qualified     # 🤞🏿 crossed fingers: dark skin tone
1F91F                                      ; fully-qualified     # 🤟 love-you gesture
1F91F 1F3FB                                ; fully-qualified     # 🤟🏻 love-you gesture: light skin tone
1F91F 1F3FC                                ; fully-qualified     # 🤟🏼 love-you gesture: medium-light skin tone
1F91F 1F3FD                                ; fully-qualified     # 🤟🏽 love-you gesture: medium skin tone
1F91F 1F3FE                                ; fully-qualified     # 🤟🏾 love-you gesture: medium-dark skin tone
1F91F 1F3FF                                ; fully-qualified     # 🤟🏿 love-you gesture: dark skin tone
1F918                                      ; fully-qualified     # 🤘 sign of the horns
1F918 1F3FB                                ; fully-qualified     # 🤘🏻 sign of the horns: light skin tone
1F918 1F3FC                                ; fully-qualified     # 🤘🏼 sign of the horns: medium-light skin tone
1F918 1F3FD                                ; fully-qualified     # 🤘🏽 sign of the horns: medium skin tone
1F918 1F3FE                                ; fully-qualified     # 🤘🏾 sign of the horns: medium-dark skin tone
1F918 1F3FF                                ; fully-qualified     # 🤘🏿 sign of the horns: dark skin tone
1F919                                      ; fully-qualified     # 🤙 call me hand
1F919 1F3FB                                ; fully-qualified     # 🤙🏻 call me hand: light skin tone
1F919 1F3FC                                ; fully-qualified     # 🤙🏼 call me hand: medium-light skin tone
1F919 1F3FD                                ; fully-qualified     # 🤙🏽 call me hand: medium skin tone
1F919 1F3FE                                ; fully-qualified     # 🤙🏾 call me hand: medium-dark skin tone
1F919 1F3FF                                ; fully-qualified     # 🤙🏿 call me hand: dark skin tone

# subgroup: hand-single-finger
1F448                                      ; fully-qualified     # 👈 backhand index pointing left
1F448 1F3FB                                ; fully-qualified     # 👈🏻 backhand index pointing left: light skin tone
1F448 1F3FC                                ; fully-qualified     # 👈🏼 backhand index pointing left: medium-light skin tone
1F448 1F3FD                                ; fully-qualified     # 👈🏽 backhand index pointing left: medium skin tone
1F448 1F3FE                                ; fully-qualified     # 👈🏾 backhand index pointing left: medium-dark skin tone
1F448 1F3FF                                ; fully-qualified     # 👈🏿 backhand index pointing left: dark skin tone
1F449                                      ; fully-qualified     # 👉 backhand index pointing right
1F449 1F3FB                                ; fully-qualified     # 👉🏻 backhand index pointing right: light skin tone
1F449 1F3FC                                ; fully-qualified     # 👉🏼 backhand index pointing right: medium-light skin tone
1F449 1F3FD                                ; fully-qualified     # 👉🏽 backhand index pointing right: medium skin tone
1F449 1F3FE                                ; fully-qualified     # 👉🏾 backhand index pointing right: medium-dark skin tone
1F449 1F3FF                                ; fully-qualified     # 👉🏿 backhand index pointing right: dark skin tone
1F446                                      ; fully-qualified     # 👆 backhand index pointing up
1F446 1F3FB                                ; fully-qualified     # 👆🏻 backhand index pointing up: light skin tone
1F446 1F3FC                                ; fully-qualified     # 👆🏼 backhand index pointing up: medium-light skin tone
1F446 1F3FD                                ; fully-qualified     # 👆🏽 backhand index pointing up: medium skin tone
1F446 1F3FE                                ; fully-qualified     # 👆🏾 backhand index pointing up: medium-dark skin tone
1F446 1F3FF                                ; fully-qualified     # 👆🏿 backhand index pointing up: dark skin tone
1F595                                      ; fully-qualified     # 🖕 middle finger
1F595 1F3FB                                ; fully-qualified     # 🖕🏻 middle finger: light skin tone
1F595 1F3FC                                ; fully-qualified     # 🖕🏼 middle finger: medium-light skin tone
1F595 1F3FD                                ; fully-qualified     # 🖕🏽 middle finger: medium skin tone
1F595 1F3FE                                ; fully-qualified     # 🖕🏾 middle finger: medium-dark skin tone
1F595 1F3FF                                ; fully-qualified     # 🖕🏿 middle finger: dark skin tone
1F447                                      ; fully-qualified     # 👇 backhand index pointing down
1F447 1F3FB                                ; fully-qualified     # 👇🏻 backhand index pointing down: light skin tone
1F447 1F3FC                                ; fully-qualified     # 👇🏼 backhand index pointing down: medium-light skin tone
1F447 1F3FD                                ; fully-qualified     # 👇🏽 backhand index pointing down: medium skin tone
1F447 1F3FE                                ; fully-qualified     # 👇🏾 backhand index pointing down: medium-dark skin tone
1F447 1F3FF                                ; fully-qualified     # 👇🏿 backhand index pointing down: dark skin tone
261D FE0F                                  ; fully-qualified     # ☝️ index pointing up
261D                                       ; unqualified         # ☝ index pointing up
261D 1F3FB                                 ; fully-qualified     # ☝🏻 index pointing up: light skin tone
261D 1F3FC                                 ; fully-qualified     # ☝🏼 index pointing up: medium-light skin tone
261D 1F3FD                                 ; fully-qualified     # ☝🏽 index pointing up: medium skin tone
261D 1F3FE                                 ; fully-qualified     # ☝🏾 index pointing up: medium-dark skin tone
261D 1F3FF                                 ; fully-qualified     # ☝🏿 index pointing up: dark skin tone

# subgroup: hand-fingers-closed
1F44D                                      ; fully-qualified     # 👍 thumbs up
1F44D 1F3FB                                ; fully-qualified     # 👍🏻 thumbs up: light skin tone
1F44D 1F3FC                                ; fully-qualified     # 👍🏼 thumbs up: medium-light skin tone
1F44D 1F3FD                                ; fully-qualified     # 👍🏽 thumbs up: medium skin tone
1F44D 1F3FE                                ; fully-qualified     # 👍🏾 thumbs up: medium-dark skin tone
1F44D 1F3FF                                ; fully-qualified     # 👍🏿 thumbs up: dark skin tone
1F44E                                      ; fully-qualified     # 👎 thumbs down
1F44E 1F3FB                                ; fully-qualified     # 👎🏻 thumbs down: light skin tone
1F44E 1F3FC                                ; fully-qualified     # 👎🏼 thumbs down: medium-light skin tone
1F44E 1F3FD                                ; fully-qualified     # 👎🏽 thumbs down: medium skin tone
1F44E 1F3FE                                ; fully-qualified     # 👎🏾 thumbs down: medium-dark skin tone
1F44E 1F3FF                                ; fully-qualified     # 👎🏿 thumbs down: dark skin tone
270A                                       ; fully-qualified     # ✊ raised fist
270A 1F3FB                                 ; fully-qualified     # ✊🏻 raised fist: light skin tone
270A 1F3FC                                 ; fully-qualified     # ✊🏼 raised fist: medium-light skin tone
270A 1F3FD                                 ; fully-qualified     # ✊🏽 raised fist: medium skin tone
270A 1F3FE                                 ; fully-qualified     # ✊🏾 raised fist: medium-dark skin tone
270A 1F3FF                                 ; fully-qualified     # ✊🏿 raised fist: dark skin tone
1F44A                                      ; fully-qualified     # 👊 oncoming fist
1F44A 1F3FB                                ; fully-qualified     # 👊🏻 oncoming fist: light skin tone
1F44A 1F3FC                                ; fully-qualified     # 👊🏼 oncoming fist: medium-light skin tone
1F44A 1F3FD                                ; fully-qualified     # 👊🏽 oncoming fist: medium skin tone
1F44A 1F3FE                                ; fully-qualified     # 👊🏾 oncoming fist: medium-dark skin tone
1F44A 1F3FF                                ; fully-qualified     # 👊🏿 oncoming fist: dark skin tone
1F91B                                      ; fully-qualified     # 🤛 left-facing fist
1F91B 1F3FB                                ; fully-qualified     # 🤛🏻 left-facing fist: light skin tone
1F91B 1F3FC                                ; fully-qualified     # 🤛🏼 left-facing fist: medium-light skin tone
1F91B 1F3FD                                ; fully-qualified     # 🤛🏽 left-facing fist: medium skin tone
1F91B 1F3FE                                ; fully-qualified     # 🤛🏾 left-facing fist: medium-dark skin tone
1F91B 1F3FF                                ; fully-qualified     # 🤛🏿 left-facing fist: dark skin tone
1F91C                                      ; fully-qualified     # 🤜 right-facing fist
1F91C 1F3FB                                ; fully-qualified     # 🤜🏻 right-facing fist: light skin tone
1F91C 1F3FC                                ; fully-qualified     # 🤜🏼 right-facing fist: medium-light skin tone
1F91C 1F3FD                                ; fully-qualified     # 🤜🏽 right-facing fist: medium skin tone
1F91C 1F3FE                                ; fully-qualified     # 🤜🏾 right-facing fist: medium-dark skin tone
1F91C 1F3FF                                ; fully-qualified     # 🤜🏿 right-facing fist: dark skin tone

# subgroup: hands
1F44F                                      ; fully-qualified     # 👏 clapping hands
1F44F 1F3FB                                ; fully-qualified     # 👏🏻 clapping hands: light skin tone
1F44F 1F3FC                                ; fully-qualified     # 👏🏼 clapping hands: medium-light skin tone
1F44F 1F3FD                                ; fully-qualified     # 👏🏽 clapping hands: medium skin tone
1F44F 1F3FE                                ; fully-qualified     # 👏🏾 clapping hands: medium-dark skin tone
1F44F 1F3FF                                ; fully-qualified     # 👏🏿 clapping hands: dark skin tone
1F64C                                      ; fully-qualified     # 🙌 raising hands
1F64C 1F3FB                                ; fully-qualified     # 🙌🏻 raising hands: light skin tone
1F64C 1F3FC                                ; fully-qualified     # 🙌🏼 raising hands: medium-light skin tone
1F64C 1F3FD                                ; fully-qualified     # 🙌🏽 raising hands: medium skin tone
1F64C 1F3FE                                ; fully-qualified     # 🙌🏾 raising hands: medium-dark skin tone
1F64C 1F3FF                                ; fully-qualified     # 🙌🏿 raising hands: dark skin tone
1F450                                      ; fully-qualified     # 👐 open hands
1F450 1F3FB                                ; fully-qualified     # 👐🏻 open hands: light skin tone
1F450 1F3FC                                ; fully-qualified     # 👐🏼 open hands: medium-light skin tone
1F450 1F3FD                                ; fully-qualified     # 👐🏽 open hands: medium skin tone
1F450 1F3FE                                ; fully-qualified     # 👐🏾 open hands: medium-dark skin tone
1F450 1F3FF                                ; fully-qualified     # 👐🏿 open hands: dark skin tone
1F932                                      ; fully-qualified     # 🤲 palms up together
1F932 1F3FB                                ; fully-qualified     # 🤲🏻 palms up together: light skin tone
1F932 1F3FC                                ; fully-qualified     # 🤲🏼 palms up together: medium-light skin tone
1F932 1F3FD                                ; fully-qualified     # 🤲🏽 palms up together: medium skin tone
1F932 1F3FE                                ; fully-qualified     # 🤲🏾 palms up together: medium-dark skin tone
1F932 1F3FF                                ; fully-qualified     # 🤲🏿 palms up together: dark skin tone
1F91D                                      ; fully-qualified     # 🤝 handshake
1F64F                                      ; fully-qualified     # 🙏 folded hands
1F64F 1F3FB                                ; fully-qualified     # 🙏🏻 folded hands: light skin tone
1F64F 1F3FC                                ; fully-qualified     # 🙏🏼 folded hands: medium-light skin tone
1F64F 1F3FD                                ; fully-qualified     # 🙏🏽 folded hands: medium skin tone
1F64F 1F3FE                                ; fully-qualified     # 🙏🏾 folded hands: medium-dark skin tone
1F64F 1F3FF                                ; fully-qualified     # 🙏🏿 folded hands: dark skin tone

# subgroup: hand-prop
270D FE0F                                  ; fully-qualified     # ✍️ writing hand
270D                                       ; unqualified         # ✍ writing hand
270D 1F3FB                                 ; fully-qualified     # ✍🏻 writing hand: light skin tone
270D 1F3FC                                 ; fully-qualified     # ✍🏼 writing hand: medium-light skin tone
270D 1F3FD                                 ; fully-qualified     # ✍🏽 writing hand: medium skin tone
270D 1F3FE                                 ; fully-qualified     # ✍🏾 writing hand: medium-dark skin tone
270D 1F3FF                                 ; fully-qualified     # ✍🏿 writing hand: dark skin tone
1F485                                      ; fully-qualified     # 💅 nail polish
1F485 1F3FB                                ; fully-qualified     # 💅🏻 nail polish: light skin tone
1F485 1F3FC                                ; fully-qualified     # 💅🏼 nail polish: medium-light skin tone
1F485 1F3FD                                ; fully-qualified     # 💅🏽 nail polish: medium skin tone
1F485 1F3FE                                ; fully-qualified     # 💅🏾 nail polish: medium-dark skin tone
1F485 1F3FF                                ; fully-qualified     # 💅🏿 nail polish: dark skin tone
1F933                                      ; fully-qualified     # 🤳 selfie
1F933 1F3FB                                ; fully-qualified     # 🤳🏻 selfie: light skin tone
1F933 1F3FC                                ; fully-qualified     # 🤳🏼 selfie: medium-light skin tone
1F933 1F3FD                                ; fully-qualified     # 🤳🏽 selfie: medium skin tone
1F933 1F3FE                                ; fully-qualified     # 🤳🏾 selfie: medium-dark skin tone
1F933 1F3FF                                ; fully-qualified     # 🤳🏿 selfie: dark skin tone

# subgroup: body-parts
1F4AA                                      ; fully-qualified     # 💪 flexed biceps
1F4AA 1F3FB                                ; fully-qualified     # 💪🏻 flexed biceps: light skin tone
1F4AA 1F3FC                                ; fully-qualified     # 💪🏼 flexed biceps: medium-light skin tone
1F4AA 1F3FD                                ; fully-qualified     # 💪🏽 flexed biceps: medium skin tone
1F4AA 1F3FE                                ; fully-qualified     # 💪🏾 flexed biceps: medium-dark skin tone
1F4AA 1F3FF                                ; fully-qualified     # 💪🏿 flexed biceps: dark skin tone
1F9BE                                      ; fully-qualified     # 🦾 mechanical arm
1F9BF                                      ; fully-qualified     # 🦿 mechanical leg
1F9B5                                      ; fully-qualified     # 🦵 leg
1F9B5 1F3FB                                ; fully-qualified     # 🦵🏻 leg: light skin tone
1F9B5 1F3FC                                ; fully-qualified     # 🦵🏼 leg: medium-light skin tone
1F9B5 1F3FD                                ; fully-qualified     # 🦵🏽 leg: medium skin tone
1F9B5 1F3FE                                ; fully-qualified     # 🦵🏾 leg: medium-dark skin tone
1F9B5 1F3FF                                ; fully-qualified     # 🦵🏿 leg: dark skin tone
1F9B6                                      ; fully-qualified     # 🦶 foot
1F9B6 1F3FB                                ; fully-qualified     # 🦶🏻 foot: light skin tone
1F9B6 1F3FC                                ; fully-qualified     # 🦶🏼 foot: medium-light skin tone
1F9B6 1F3FD                                ; fully-qualified     # 🦶🏽 foot: medium skin tone
1F9B6 1F3FE                                ; fully-qualified     # 🦶🏾 foot: medium-dark skin tone
1F9B6 1F3FF                                ; fully-qualified     # 🦶🏿 foot: dark skin tone
1F442                                      ; fully-qualified     # 👂 ear
1F442 1F3FB                                ; fully-qualified     # 👂🏻 ear: light skin tone
1F442 1F3FC                                ; fully-qualified     # 👂🏼 ear: medium-light skin tone
1F442 1F3FD                                ; fully-qualified     # 👂🏽 ear: medium skin tone
1F442 1F3FE                                ; fully-qualified     # 👂🏾 ear: medium-dark skin tone
1F442 1F3FF                                ; fully-qualified     # 👂🏿 ear: dark skin tone
1F9BB                                      ; fully-qualified     # 🦻 ear with hearing aid
1F9BB 1F3FB                                ; fully-qualified     # 🦻🏻 ear with hearing aid: light skin tone
1F9BB 1F3FC                                ; fully-qualified     # 🦻🏼 ear with hearing aid: medium-light skin tone
1F9BB 1F3FD                                ; fully-qualified     # 🦻🏽 ear with hearing aid: medium skin tone
1F9BB 1F3FE                                ; fully-qualified     # 🦻🏾 ear with hearing aid: medium-dark skin tone
1F9BB 1F3FF                                ; fully-qualified     # 🦻🏿 ear with hearing aid: dark skin tone
1F443                                      ; fully-qualified     # 👃 nose
1F443 1F3FB                                ; fully-qualified     # 👃🏻 nose: light skin tone
1F443 1F3FC                                ; fully-qualified     # 👃🏼 nose: medium-light skin tone
1F443 1F3FD                                ; fully-qualified     # 👃🏽 nose: medium skin tone
1F443 1F3FE                                ; fully-qualified     # 👃🏾 nose: medium-dark skin tone
1F443 1F3FF                                ; fully-qualified     # 👃🏿 nose: dark skin tone
1F9E0                                      ; fully-qualified     # 🧠 brain
1F9B7                                      ; fully-qualified     # 🦷 tooth
1F9B4                                      ; fully-qualified     # 🦴 bone
1F440                                      ; fully-qualified     # 👀 eyes
1F441 FE0F                                 ; fully-qualified     # 👁️ eye
1F441                                      ; unqualified         # 👁 eye
1F445                                      ; fully-qualified     # 👅 tongue
1F444                                      ; fully-qualified     # 👄 mouth

# subgroup: person
1F476                                      ; fully-qualified     # 👶 baby
1F476 1F3FB                                ; fully-qualified     # 👶🏻 baby: light skin tone
1F476 1F3FC                                ; fully-qualified     # 👶🏼 baby: medium-light skin tone
1F476 1F3FD                                ; fully-qualified     # 👶🏽 baby: medium skin tone
1F476 1F3FE                                ; fully-qualified     # 👶🏾 baby: medium-dark skin tone
1F476 1F3FF                                ; fully-qualified     # 👶🏿 baby: dark skin tone
1F9D2                                      ; fully-qualified     # 🧒 child
1F9D2 1F3FB                                ; fully-qualified     # 🧒🏻 child: light skin tone
1F9D2 1F3FC                                ; fully-qualified     # 🧒🏼 child: medium-light skin tone
1F9D2 1F3FD                                ; fully-qualified     # 🧒🏽 child: medium skin tone
1F9D2 1F3FE                                ; fully-qualified     # 🧒🏾 child: medium-dark skin tone
1F9D2 1F3FF                                ; fully-qualified     # 🧒🏿 child: dark skin tone
1F466                                      ; fully-qualified     # 👦 boy
1F466 1F3FB                                ; fully-qualified     # 👦🏻 boy: light skin tone
1F466 1F3FC                                ; fully-qualified     # 👦🏼 boy: medium-light skin tone
1F466 1F3FD                                ; fully-qualified     # 👦🏽 boy: medium skin tone
1F466 1F3FE                                ; fully-qualified     # 👦🏾 boy: medium-dark skin tone
1F466 1F3FF                                ; fully-qualified     # 👦🏿 boy: dark skin tone
1F467                                      ; fully-qualified     # 👧 girl
1F467 1F3FB                                ; fully-qualified     # 👧🏻 girl: light skin tone
1F467 1F3FC                                ; fully-qualified     # 👧🏼 girl: medium-light skin tone
1F467 1F3FD                                ; fully-qualified     # 👧🏽 girl: medium skin tone
1F467 1F3FE                                ; fully-qualified     # 👧🏾 girl: medium-dark skin tone
1F467 1F3FF                                ; fully-qualified     # 👧🏿 girl: dark skin tone
1F9D1                                      ; fully-qualified     # 🧑 person
1F9D1 1F3FB                                ; fully-qualified     # 🧑🏻 person: light skin tone
1F9D1 1F3FC                                ; fully-qualified     # 🧑🏼 person: medium-light skin tone
1F9D1 1F3FD                                ; fully-qualified     # 🧑🏽 person: medium skin tone
1F9D1 1F3FE                                ; fully-qualified     # 🧑🏾 person: medium-dark skin tone
1F9D1 1F3FF                                ; fully-qualified     # 🧑🏿 person: dark skin tone
1F471                                      ; fully-qualified     # 👱 person: blond hair
1F471 1F3FB                                ; fully-qualified     # 👱🏻 person: light skin tone, blond hair
1F471 1F3FC                                ; fully-qualified     # 👱🏼 person: medium-light skin tone, blond hair
1F471 1F3FD                                ; fully-qualified     # 👱🏽 person: medium skin tone, blond hair
1F471 1F3FE                                ; fully-qualified     # 👱🏾 person: medium-dark skin tone, blond hair
1F471 1F3FF                                ; fully-qualified     # 👱🏿 person: dark skin tone, blond hair
1F468                                      ; fully-qualified     # 👨 man
1F468 1F3FB                                ; fully-qualified     # 👨🏻 man: light skin tone
1F468 1F3FC                                ; fully-qualified     # 👨🏼 man: medium-light skin tone
1F468 1F3FD                                ; fully-qualified     # 👨🏽 man: medium skin tone
1F468 1F3FE                                ; fully-qualified     # 👨🏾 man: medium-dark skin tone
1F468 1F3FF                                ; fully-qualified     # 👨🏿 man: dark skin tone
1F9D4                                      ; fully-qualified     # 🧔 man: beard
1F9D4 1F3FB                                ; fully-qualified     # 🧔🏻 man: light skin tone, beard
1F9D4 1F3FC                                ; fully-qualified     # 🧔🏼 man: medium-light skin tone, beard
1F9D4 1F3FD                                ; fully-qualified     # 🧔🏽 man: medium skin tone, beard
1F9D4 1F3FE                                ; fully-qualified     # 🧔🏾 man: medium-dark skin tone, beard
1F9D4 1F3FF                                ; fully-qualified     # 🧔🏿 man: dark skin tone, beard
1F471 200D 2642 FE0F                       ; fully-qualified     # 👱‍♂️ man: blond hair
1F471 200D 2642                            ; minimally-qualified # 👱‍♂ man: blond hair
1F471 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 👱🏻‍♂️ man: light skin tone, blond hair
1F471 1F3FB 200D 2642                      ; minimally-qualified # 👱🏻‍♂ man: light skin tone, blond hair
1F471 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 👱🏼‍♂️ man: medium-light skin tone, blond hair
1F471 1F3FC 200D 2642                      ; minimally-qualified # 👱🏼‍♂ man: medium-light skin tone, blond hair
1F471 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 👱🏽‍♂️ man: medium skin tone, blond hair
1F471 1F3FD 200D 2642                      ; minimally-qualified # 👱🏽‍♂ man: medium skin tone, blond hair
1F471 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 👱🏾‍♂️ man: medium-dark skin tone, blond hair
1F471 1F3FE 200D 2642                      ; minimally-qualified # 👱🏾‍♂ man: medium-dark skin tone, blond hair
1F471 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 👱🏿‍♂️ man: dark skin tone, blond hair
1F471 1F3FF 200D 2642                      ; minimally-qualified # 👱🏿‍♂ man: dark skin tone, blond hair
1F468 200D 1F9B0                           ; fully-qualified     # 👨‍🦰 man: red hair
1F468 1F3FB 200D 1F9B0                     ; fully-qualified     # 👨🏻‍🦰 man: light skin tone, red hair
1F468 1F3FC 200D 1F9B0                     ; fully-qualified     # 👨🏼‍🦰 man: medium-light skin tone, red hair
1F468 1F3FD 200D 1F9B0                     ; fully-qualified     # 👨🏽‍🦰 man: medium skin tone, red hair
1F468 1F3FE 200D 1F9B0                     ; fully-qualified     # 👨🏾‍🦰 man: medium-dark skin tone, red hair
1F468 1F3FF 200D 1F9B0                     ; fully-qualified     # 👨🏿‍🦰 man: dark skin tone, red hair
1F468 200D 1F9B1                           ; fully-qualified     # 👨‍🦱 man: curly hair
1F468 1F3FB 200D 1F9B1                     ; fully-qualified     # 👨🏻‍🦱 man: light skin tone, curly hair
1F468 1F3FC 200D 1F9B1                     ; fully-qualified     # 👨🏼‍🦱 man: medium-light skin tone, curly hair
1F468 1F3FD 200D 1F9B1                     ; fully-qualified     # 👨🏽‍🦱 man: medium skin tone, curly hair
1F468 1F3FE 200D 1F9B1                     ; fully-qualified     # 👨🏾‍🦱 man: medium-dark skin tone, curly hair
1F468 1F3FF 200D 1F9B1                     ; fully-qualified     # 👨🏿‍🦱 man: dark skin tone, curly hair
1F468 200D 1F9B3                           ; fully-qualified     # 👨‍🦳 man: white hair
1F468 1F3FB 200D 1F9B3                     ; fully-qualified     # 👨🏻‍🦳 man: light skin tone, white hair
1F468 1F3FC 200D 1F9B3                     ; fully-qualified     # 👨🏼‍🦳 man: medium-light skin tone, white hair
1F468 1F3FD 200D 1F9B3                     ; fully-qualified     # 👨🏽‍🦳 man: medium skin tone, white hair
1F468 1F3FE 200D 1F9B3                     ; fully-qualified     # 👨🏾‍🦳 man: medium-dark skin tone, white hair
1F468 1F3FF 200D 1F9B3                     ; fully-qualified     # 👨🏿‍🦳 man: dark skin tone, white hair
1F468 200D 1F9B2                           ; fully-qualified     # 👨‍🦲 man: bald
1F468 1F3FB 200D 1F9B2                     ; fully-qualified     # 👨🏻‍🦲 man: light skin tone, bald
1F468 1F3FC 200D 1F9B2                     ; fully-qualified     # 👨🏼‍🦲 man: medium-light skin tone, bald
1F468 1F3FD 200D 1F9B2                     ; fully-qualified     # 👨🏽‍🦲 man: medium skin tone, bald
1F468 1F3FE 200D 1F9B2                     ; fully-qualified     # 👨🏾‍🦲 man: medium-dark skin tone, bald
1F468 1F3FF 200D 1F9B2                     ; fully-qualified     # 👨🏿‍🦲 man: dark skin tone, bald
1F469                                      ; fully-qualified     # 👩 woman
1F469 1F3FB                                ; fully-qualified     # 👩🏻 woman: light skin tone
1F469 1F3FC                                ; fully-qualified     # 👩🏼 woman: medium-light skin tone
1F469 1F3FD                                ; fully-qualified     # 👩🏽 woman: medium skin tone
1F469 1F3FE                                ; fully-qualified     # 👩🏾 woman: medium-dark skin tone
1F469 1F3FF                                ; fully-qualified     # 👩🏿 woman: dark skin tone
1F471 200D 2640 FE0F                       ; fully-qualified     # 👱‍♀️ woman: blond hair
1F471 200D 2640                            ; minimally-qualified # 👱‍♀ woman: blond hair
1F471 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 👱🏻‍♀️ woman: light skin tone, blond hair
1F471 1F3FB 200D 2640                      ; minimally-qualified # 👱🏻‍♀ woman: light skin tone, blond hair
1F471 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 👱🏼‍♀️ woman: medium-light skin tone, blond hair
1F471 1F3FC 200D 2640                      ; minimally-qualified # 👱🏼‍♀ woman: medium-light skin tone, blond hair
1F471 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 👱🏽‍♀️ woman: medium skin tone, blond hair
1F471 1F3FD 200D 2640                      ; minimally-qualified # 👱🏽‍♀ woman: medium skin tone, blond hair
1F471 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 👱🏾‍♀️ woman: medium-dark skin tone, blond hair
1F471 1F3FE 200D 2640                      ; minimally-qualified # 👱🏾‍♀ woman: medium-dark skin tone, blond hair
1F471 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 👱🏿‍♀️ woman: dark skin tone, blond hair
1F471 1F3FF 200D 2640                      ; minimally-qualified # 👱🏿‍♀ woman: dark skin tone, blond hair
1F469 200D 1F9B0                           ; fully-qualified     # 👩‍🦰 woman: red hair
1F469 1F3FB 200D 1F9B0                     ; fully-qualified     # 👩🏻‍🦰 woman: light skin tone, red hair
1F469 1F3FC 200D 1F9B0                     ; fully-qualified     # 👩🏼‍🦰 woman: medium-light skin tone, red hair
1F469 1F3FD 200D 1F9B0                     ; fully-qualified     # 👩🏽‍🦰 woman: medium skin tone, red hair
1F469 1F3FE 200D 1F9B0                     ; fully-qualified     # 👩🏾‍🦰 woman: medium-dark skin tone, red hair
1F469 1F3FF 200D 1F9B0                     ; fully-qualified     # 👩🏿‍🦰 woman: dark skin tone, red hair
1F469 200D 1F9B1                           ; fully-qualified     # 👩‍🦱 woman: curly hair
1F469 1F3FB 200D 1F9B1                     ; fully-qualified     # 👩🏻‍🦱 woman: light skin tone, curly hair
1F469 1F3FC 200D 1F9B1                     ; fully-qualified     # 👩🏼‍🦱 woman: medium-light skin tone, curly hair
1F469 1F3FD 200D 1F9B1                     ; fully-qualified     # 👩🏽‍🦱 woman: medium skin tone, curly hair
1F469 1F3FE 200D 1F9B1                     ; fully-qualified     # 👩🏾‍🦱 woman: medium-dark skin tone, curly hair
1F469 1F3FF 200D 1F9B1                     ; fully-qualified     # 👩🏿‍🦱 woman: dark skin tone, curly hair
1F469 200D 1F9B3                           ; fully-qualified     # 👩‍🦳 woman: white hair
1F469 1F3FB 200D 1F9B3                     ; fully-qualified     # 👩🏻‍🦳 woman: light skin tone, white hair
1F469 1F3FC 200D 1F9B3                     ; fully-qualified     # 👩🏼‍🦳 woman: medium-light skin tone, white hair
1F469 1F3FD 200D 1F9B3                     ; fully-qualified     # 👩🏽‍🦳 woman: medium skin tone, white hair
1F469 1F3FE 200D 1F9B3                     ; fully-qualified     # 👩🏾‍🦳 woman: medium-dark skin tone, white hair
1F469 1F3FF 200D 1F9B3                     ; fully-qualified     # 👩🏿‍🦳 woman: dark skin tone, white hair
1F469 200D 1F9B2                           ; fully-qualified     # 👩‍🦲 woman: bald
1F469 1F3FB 200D 1F9B2                     ; fully-qualified     # 👩🏻‍🦲 woman: light skin tone, bald
1F469 1F3FC 200D 1F9B2                     ; fully-qualified     # 👩🏼‍🦲 woman: medium-light skin tone, bald
1F469 1F3FD 200D 1F9B2                     ; fully-qualified     # 👩🏽‍🦲 woman: medium skin tone, bald
1F469 1F3FE 200D 1F9B2                     ; fully-qualified     # 👩🏾‍🦲 woman: medium-dark skin tone, bald
1F469 1F3FF 200D 1F9B2                     ; fully-qualified     # 👩🏿‍🦲 woman: dark skin tone, bald
1F9D3                                      ; fully-qualified     # 🧓 older person
1F9D3 1F3FB                                ; fully-qualified     # 🧓🏻 older person: light skin tone
1F9D3 1F3FC                                ; fully-qualified     # 🧓🏼 older person: medium-light skin tone
1F9D3 1F3FD                                ; fully-qualified     # 🧓🏽 older person: medium skin tone
1F9D3 1F3FE                                ; fully-qualified     # 🧓🏾 older person: medium-dark skin tone
1F9D3 1F3FF                                ; fully-qualified     # 🧓🏿 older person: dark skin tone
1F474                                      ; fully-qualified     # 👴 old man
1F474 1F3FB                                ; fully-qualified     # 👴🏻 old man: light skin tone
1F474 1F3FC                                ; fully-qualified     # 👴🏼 old man: medium-light skin tone
1F474 1F3FD                                ; fully-qualified     # 👴🏽 old man: medium skin tone
1F474 1F3FE                                ; fully-qualified     # 👴🏾 old man: medium-dark skin tone
1F474 1F3FF                                ; fully-qualified     # 👴🏿 old man: dark skin tone
1F475                                      ; fully-qualified     # 👵 old woman
1F475 1F3FB                                ; fully-qualified     # 👵🏻 old woman: light skin tone
1F475 1F3FC                                ; fully-qualified     # 👵🏼 old woman: medium-light skin tone
1F475 1F3FD                                ; fully-qualified     # 👵🏽 old woman: medium skin tone
1F475 1F3FE                                ; fully-qualified     # 👵🏾 old woman: medium-dark skin tone
1F475 1F3FF                                ; fully-qualified     # 👵🏿 old woman: dark skin tone

# subgroup: person-gesture
1F64D                                      ; fully-qualified     # 🙍 person frowning
1F64D 1F3FB                                ; fully-qualified     # 🙍🏻 person frowning: light skin tone
1F64D 1F3FC                                ; fully-qualified     # 🙍🏼 person frowning: medium-light skin tone
1F64D 1F3FD                                ; fully-qualified     # 🙍🏽 person frowning: medium skin tone
1F64D 1F3FE                                ; fully-qualified     # 🙍🏾 person frowning: medium-dark skin tone
1F64D 1F3FF                                ; fully-qualified     # 🙍🏿 person frowning: dark skin tone
1F64D 200D 2642 FE0F                       ; fully-qualified     # 🙍‍♂️ man frowning
1F64D 200D 2642                            ; minimally-qualified # 🙍‍♂ man frowning
1F64D 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🙍🏻‍♂️ man frowning: light skin tone
1F64D 1F3FB 200D 2642                      ; minimally-qualified # 🙍🏻‍♂ man frowning: light skin tone
1F64D 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🙍🏼‍♂️ man frowning: medium-light skin tone
1F64D 1F3FC 200D 2642                      ; minimally-qualified # 🙍🏼‍♂ man frowning: medium-light skin tone
1F64D 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🙍🏽‍♂️ man frowning: medium skin tone
1F64D 1F3FD 200D 2642                      ; minimally-qualified # 🙍🏽‍♂ man frowning: medium skin tone
1F64D 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🙍🏾‍♂️ man frowning: medium-dark skin tone
1F64D 1F3FE 200D 2642                      ; minimally-qualified # 🙍🏾‍♂ man frowning: medium-dark skin tone
1F64D 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🙍🏿‍♂️ man frowning: dark skin tone
1F64D 1F3FF 200D 2642                      ; minimally-qualified # 🙍🏿‍♂ man frowning: dark skin tone
1F64D 200D 2640 FE0F                       ; fully-qualified     # 🙍‍♀️ woman frowning
1F64D 200D 2640                            ; minimally-qualified # 🙍‍♀ woman frowning
1F64D 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🙍🏻‍♀️ woman frowning: light skin tone
1F64D 1F3FB 200D 2640                      ; minimally-qualified # 🙍🏻‍♀ woman frowning: light skin tone
1F64D 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🙍🏼‍♀️ woman frowning: medium-light skin tone
1F64D 1F3FC 200D 2640                      ; minimally-qualified # 🙍🏼‍♀ woman frowning: medium-light skin tone
1F64D 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🙍🏽‍♀️ woman frowning: medium skin tone
1F64D 1F3FD 200D 2640                      ; minimally-qualified # 🙍🏽‍♀ woman frowning: medium skin tone
1F64D 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🙍🏾‍♀️ woman frowning: medium-dark skin tone
1F64D 1F3FE 200D 2640                      ; minimally-qualified # 🙍🏾‍♀ woman frowning: medium-dark skin tone
1F64D 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🙍🏿‍♀️ woman frowning: dark skin tone
1F64D 1F3FF 200D 2640                      ; minimally-qualified # 🙍🏿‍♀ woman frowning: dark skin tone
1F64E                                      ; fully-qualified     # 🙎 person pouting
1F64E 1F3FB                                ; fully-qualified     # 🙎🏻 person pouting: light skin tone
1F64E 1F3FC                                ; fully-qualified     # 🙎🏼 person pouting: medium-light skin tone
1F64E 1F3FD                                ; fully-qualified     # 🙎🏽 person pouting: medium skin tone
1F64E 1F3FE                                ; fully-qualified     # 🙎🏾 person pouting: medium-dark skin tone
1F64E 1F3FF                                ; fully-qualified     # 🙎🏿 person pouting: dark skin tone
1F64E 200D 2642 FE0F                       ; fully-qualified     # 🙎‍♂️ man pouting
1F64E 200D 2642                            ; minimally-qualified # 🙎‍♂ man pouting
1F64E 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🙎🏻‍♂️ man pouting: light skin tone
1F64E 1F3FB 200D 2642                      ; minimally-qualified # 🙎🏻‍♂ man pouting: light skin tone
1F64E 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🙎🏼‍♂️ man pouting: medium-light skin tone
1F64E 1F3FC 200D 2642                      ; minimally-qualified # 🙎🏼‍♂ man pouting: medium-light skin tone
1F64E 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🙎🏽‍♂️ man pouting: medium skin tone
1F64E 1F3FD 200D 2642                      ; minimally-qualified # 🙎🏽‍♂ man pouting: medium skin tone
1F64E 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🙎🏾‍♂️ man pouting: medium-dark skin tone
1F64E 1F3FE 200D 2642                      ; minimally-qualified # 🙎🏾‍♂ man pouting: medium-dark skin tone
1F64E 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🙎🏿‍♂️ man pouting: dark skin tone
1F64E 1F3FF 200D 2642                      ; minimally-qualified # 🙎🏿‍♂ man pouting: dark skin tone
1F64E 200D 2640 FE0F                       ; fully-qualified     # 🙎‍♀️ woman pouting
1F64E 200D 2640                            ; minimally-qualified # 🙎‍♀ woman pouting
1F64E 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🙎🏻‍♀️ woman pouting: light skin tone
1F64E 1F3FB 200D 2640                      ; minimally-qualified # 🙎🏻‍♀ woman pouting: light skin tone
1F64E 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🙎🏼‍♀️ woman pouting: medium-light skin tone
1F64E 1F3FC 200D 2640                      ; minimally-qualified # 🙎🏼‍♀ woman pouting: medium-light skin tone
1F64E 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🙎🏽‍♀️ woman pouting: medium skin tone
1F64E 1F3FD 200D 2640                      ; minimally-qualified # 🙎🏽‍♀ woman pouting: medium skin tone
1F64E 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🙎🏾‍♀️ woman pouting: medium-dark skin tone
1F64E 1F3FE 200D 2640                      ; minimally-qualified # 🙎🏾‍♀ woman pouting: medium-dark skin tone
1F64E 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🙎🏿‍♀️ woman pouting: dark skin tone
1F64E 1F3FF 200D 2640                      ; minimally-qualified # 🙎🏿‍♀ woman pouting: dark skin tone
1F645                                      ; fully-qualified     # 🙅 person gesturing NO
1F645 1F3FB                                ; fully-qualified     # 🙅🏻 person gesturing NO: light skin tone
1F645 1F3FC                                ; fully-qualified     # 🙅🏼 person gesturing NO: medium-light skin tone
1F645 1F3FD                                ; fully-qualified     # 🙅🏽 person gesturing NO: medium skin tone
1F645 1F3FE                                ; fully-qualified     # 🙅🏾 person gesturing NO: medium-dark skin tone
1F645 1F3FF                                ; fully-qualified     # 🙅🏿 person gesturing NO: dark skin tone
1F645 200D 2642 FE0F                       ; fully-qualified     # 🙅‍♂️ man gesturing NO
1F645 200D 2642                            ; minimally-qualified # 🙅‍♂ man gesturing NO
1F645 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🙅🏻‍♂️ man gesturing NO: light skin tone
1F645 1F3FB 200D 2642                      ; minimally-qualified # 🙅🏻‍♂ man gesturing NO: light skin tone
1F645 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🙅🏼‍♂️ man gesturing NO: medium-light skin tone
1F645 1F3FC 200D 2642                      ; minimally-qualified # 🙅🏼‍♂ man gesturing NO: medium-light skin tone
1F645 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🙅🏽‍♂️ man gesturing NO: medium skin tone
1F645 1F3FD 200D 2642                      ; minimally-qualified # 🙅🏽‍♂ man gesturing NO: medium skin tone
1F645 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🙅🏾‍♂️ man gesturing NO: medium-dark skin tone
1F645 1F3FE 200D 2642                      ; minimally-qualified # 🙅🏾‍♂ man gesturing NO: medium-dark skin tone
1F645 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🙅🏿‍♂️ man gesturing NO: dark skin tone
1F645 1F3FF 200D 2642                      ; minimally-qualified # 🙅🏿‍♂ man gesturing NO: dark skin tone
1F645 200D 2640 FE0F                       ; fully-qualified     # 🙅‍♀️ woman gesturing NO
1F645 200D 2640                            ; minimally-qualified # 🙅‍♀ woman gesturing NO
1F645 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🙅🏻‍♀️ woman gesturing NO: light skin tone
1F645 1F3FB 200D 2640                      ; minimally-qualified # 🙅🏻‍♀ woman gesturing NO: light skin tone
1F645 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🙅🏼‍♀️ woman gesturing NO: medium-light skin tone
1F645 1F3FC 200D 2640                      ; minimally-qualified # 🙅🏼‍♀ woman gesturing NO: medium-light skin tone
1F645 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🙅🏽‍♀️ woman gesturing NO: medium skin tone
1F645 1F3FD 200D 2640                      ; minimally-qualified # 🙅🏽‍♀ woman gesturing NO: medium skin tone
1F645 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🙅🏾‍♀️ woman gesturing NO: medium-dark skin tone
1F645 1F3FE 200D 2640                      ; minimally-qualified # 🙅🏾‍♀ woman gesturing NO: medium-dark skin tone
1F645 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🙅🏿‍♀️ woman gesturing NO: dark skin tone
1F645 1F3FF 200D 2640                      ; minimally-qualified # 🙅🏿‍♀ woman gesturing NO: dark skin tone
1F646                                      ; fully-qualified     # 🙆 person gesturing OK
1F646 1F3FB                                ; fully-qualified     # 🙆🏻 person gesturing OK: light skin tone
1F646 1F3FC                                ; fully-qualified     # 🙆🏼 person gesturing OK: medium-light skin tone
1F646 1F3FD                                ; fully-qualified     # 🙆🏽 person gesturing OK: medium skin tone
1F646 1F3FE                                ; fully-qualified     # 🙆🏾 person gesturing OK: medium-dark skin tone
1F646 1F3FF                                ; fully-qualified     # 🙆🏿 person gesturing OK: dark skin tone
1F646 200D 2642 FE0F                       ; fully-qualified     # 🙆‍♂️ man gesturing OK
1F646 200D 2642                            ; minimally-qualified # 🙆‍♂ man gesturing OK
1F646 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🙆🏻‍♂️ man gesturing OK: light skin tone
1F646 1F3FB 200D 2642                      ; minimally-qualified # 🙆🏻‍♂ man gesturing OK: light skin tone
1F646 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🙆🏼‍♂️ man gesturing OK: medium-light skin tone
1F646 1F3FC 200D 2642                      ; minimally-qualified # 🙆🏼‍♂ man gesturing OK: medium-light skin tone
1F646 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🙆🏽‍♂️ man gesturing OK: medium skin tone
1F646 1F3FD 200D 2642                      ; minimally-qualified # 🙆🏽‍♂ man gesturing OK: medium skin tone
1F646 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🙆🏾‍♂️ man gesturing OK: medium-dark skin tone
1F646 1F3FE 200D 2642                      ; minimally-qualified # 🙆🏾‍♂ man gesturing OK: medium-dark skin tone
1F646 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🙆🏿‍♂️ man gesturing OK: dark skin tone
1F646 1F3FF 200D 2642                      ; minimally-qualified # 🙆🏿‍♂ man gesturing OK: dark skin tone
1F646 200D 2640 FE0F                       ; fully-qualified     # 🙆‍♀️ woman gesturing OK
1F646 200D 2640                            ; minimally-qualified # 🙆‍♀ woman gesturing OK
1F646 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🙆🏻‍♀️ woman gesturing OK: light skin tone
1F646 1F3FB 200D 2640                      ; minimally-qualified # 🙆🏻‍♀ woman gesturing OK: light skin tone
1F646 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🙆🏼‍♀️ woman gesturing OK: medium-light skin tone
1F646 1F3FC 200D 2640                      ; minimally-qualified # 🙆🏼‍♀ woman gesturing OK: medium-light skin tone
1F646 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🙆🏽‍♀️ woman gesturing OK: medium skin tone
1F646 1F3FD 200D 2640                      ; minimally-qualified # 🙆🏽‍♀ woman gesturing OK: medium skin tone
1F646 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🙆🏾‍♀️ woman gesturing OK: medium-dark skin tone
1F646 1F3FE 200D 2640                      ; minimally-qualified # 🙆🏾‍♀ woman gesturing OK: medium-dark skin tone
1F646 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🙆🏿‍♀️ woman gesturing OK: dark skin tone
1F646 1F3FF 200D 2640                      ; minimally-qualified # 🙆🏿‍♀ woman gesturing OK: dark skin tone
1F481                                      ; fully-qualified     # 💁 person tipping hand
1F481 1F3FB                                ; fully-qualified     # 💁🏻 person tipping hand: light skin tone
1F481 1F3FC                                ; fully-qualified     # 💁🏼 person tipping hand: medium-light skin tone
1F481 1F3FD                                ; fully-qualified     # 💁🏽 person tipping hand: medium skin tone
1F481 1F3FE                                ; fully-qualified     # 💁🏾 person tipping hand: medium-dark skin tone
1F481 1F3FF                                ; fully-qualified     # 💁🏿 person tipping hand: dark skin tone
1F481 200D 2642 FE0F                       ; fully-qualified     # 💁‍♂️ man tipping hand
1F481 200D 2642                            ; minimally-qualified # 💁‍♂ man tipping hand
1F481 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 💁🏻‍♂️ man tipping hand: light skin tone
1F481 1F3FB 200D 2642                      ; minimally-qualified # 💁🏻‍♂ man tipping hand: light skin tone
1F481 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 💁🏼‍♂️ man tipping hand: medium-light skin tone
1F481 1F3FC 200D 2642                      ; minimally-qualified # 💁🏼‍♂ man tipping hand: medium-light skin tone
1F481 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 💁🏽‍♂️ man tipping hand: medium skin tone
1F481 1F3FD 200D 2642                      ; minimally-qualified # 💁🏽‍♂ man tipping hand: medium skin tone
1F481 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 💁🏾‍♂️ man tipping hand: medium-dark skin tone
1F481 1F3FE 200D 2642                      ; minimally-qualified # 💁🏾‍♂ man tipping hand: medium-dark skin tone
1F481 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 💁🏿‍♂️ man tipping hand: dark skin tone
1F481 1F3FF 200D 2642                      ; minimally-qualified # 💁🏿‍♂ man tipping hand: dark skin tone
1F481 200D 2640 FE0F                       ; fully-qualified     # 💁‍♀️ woman tipping hand
1F481 200D 2640                            ; minimally-qualified # 💁‍♀ woman tipping hand
1F481 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 💁🏻‍♀️ woman tipping hand: light skin tone
1F481 1F3FB 200D 2640                      ; minimally-qualified # 💁🏻‍♀ woman tipping hand: light skin tone
1F481 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 💁🏼‍♀️ woman tipping hand: medium-light skin tone
1F481 1F3FC 200D 2640                      ; minimally-qualified # 💁🏼‍♀ woman tipping hand: medium-light skin tone
1F481 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 💁🏽‍♀️ woman tipping hand: medium skin tone
1F481 1F3FD 200D 2640                      ; minimally-qualified # 💁🏽‍♀ woman tipping hand: medium skin tone
1F481 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 💁🏾‍♀️ woman tipping hand: medium-dark skin tone
1F481 1F3FE 200D 2640                      ; minimally-qualified # 💁🏾‍♀ woman tipping hand: medium-dark skin tone
1F481 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 💁🏿‍♀️ woman tipping hand: dark skin tone
1F481 1F3FF 200D 2640                      ; minimally-qualified # 💁🏿‍♀ woman tipping hand: dark skin tone
1F64B                                      ; fully-qualified     # 🙋 person raising hand
1F64B 1F3FB                                ; fully-qualified     # 🙋🏻 person raising hand: light skin tone
1F64B 1F3FC                                ; fully-qualified     # 🙋🏼 person raising hand: medium-light skin tone
1F64B 1F3FD                                ; fully-qualified     # 🙋🏽 person raising hand: medium skin tone
1F64B 1F3FE                                ; fully-qualified     # 🙋🏾 person raising hand: medium-dark skin tone
1F64B 1F3FF                                ; fully-qualified     # 🙋🏿 person raising hand: dark skin tone
1F64B 200D 2642 FE0F                       ; fully-qualified     # 🙋‍♂️ man raising hand
1F64B 200D 2642                            ; minimally-qualified # 🙋‍♂ man raising hand
1F64B 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🙋🏻‍♂️ man raising hand: light skin tone
1F64B 1F3FB 200D 2642                      ; minimally-qualified # 🙋🏻‍♂ man raising hand: light skin tone
1F64B 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🙋🏼‍♂️ man raising hand: medium-light skin tone
1F64B 1F3FC 200D 2642                      ; minimally-qualified # 🙋🏼‍♂ man raising hand: medium-light skin tone
1F64B 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🙋🏽‍♂️ man raising hand: medium skin tone
1F64B 1F3FD 200D 2642                      ; minimally-qualified # 🙋🏽‍♂ man raising hand: medium skin tone
1F64B 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🙋🏾‍♂️ man raising hand: medium-dark skin tone
1F64B 1F3FE 200D 2642                      ; minimally-qualified # 🙋🏾‍♂ man raising hand: medium-dark skin tone
1F64B 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🙋🏿‍♂️ man raising hand: dark skin tone
1F64B 1F3FF 200D 2642                      ; minimally-qualified # 🙋🏿‍♂ man raising hand: dark skin tone
1F64B 200D 2640 FE0F                       ; fully-qualified     # 🙋‍♀️ woman raising hand
1F64B 200D 2640                            ; minimally-qualified # 🙋‍♀ woman raising hand
1F64B 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🙋🏻‍♀️ woman raising hand: light skin tone
1F64B 1F3FB 200D 2640                      ; minimally-qualified # 🙋🏻‍♀ woman raising hand: light skin tone
1F64B 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🙋🏼‍♀️ woman raising hand: medium-light skin tone
1F64B 1F3FC 200D 2640                      ; minimally-qualified # 🙋🏼‍♀ woman raising hand: medium-light skin tone
1F64B 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🙋🏽‍♀️ woman raising hand: medium skin tone
1F64B 1F3FD 200D 2640                      ; minimally-qualified # 🙋🏽‍♀ woman raising hand: medium skin tone
1F64B 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🙋🏾‍♀️ woman raising hand: medium-dark skin tone
1F64B 1F3FE 200D 2640                      ; minimally-qualified # 🙋🏾‍♀ woman raising hand: medium-dark skin tone
1F64B 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🙋🏿‍♀️ woman raising hand: dark skin tone
1F64B 1F3FF 200D 2640                      ; minimally-qualified # 🙋🏿‍♀ woman raising hand: dark skin tone
1F9CF                                      ; fully-qualified     # 🧏 deaf person
1F9CF 1F3FB                                ; fully-qualified     # 🧏🏻 deaf person: light skin tone
1F9CF 1F3FC                                ; fully-qualified     # 🧏🏼 deaf person: medium-light skin tone
1F9CF 1F3FD                                ; fully-qualified     # 🧏🏽 deaf person: medium skin tone
1F9CF 1F3FE                                ; fully-qualified     # 🧏🏾 deaf person: medium-dark skin tone
1F9CF 1F3FF                                ; fully-qualified     # 🧏🏿 deaf person: dark skin tone
1F9CF 200D 2642 FE0F                       ; fully-qualified     # 🧏‍♂️ deaf man
1F9CF 200D 2642                            ; minimally-qualified # 🧏‍♂ deaf man
1F9CF 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧏🏻‍♂️ deaf man: light skin tone
1F9CF 1F3FB 200D 2642                      ; minimally-qualified # 🧏🏻‍♂ deaf man: light skin tone
1F9CF 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧏🏼‍♂️ deaf man: medium-light skin tone
1F9CF 1F3FC 200D 2642                      ; minimally-qualified # 🧏🏼‍♂ deaf man: medium-light skin tone
1F9CF 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧏🏽‍♂️ deaf man: medium skin tone
1F9CF 1F3FD 200D 2642                      ; minimally-qualified # 🧏🏽‍♂ deaf man: medium skin tone
1F9CF 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧏🏾‍♂️ deaf man: medium-dark skin tone
1F9CF 1F3FE 200D 2642                      ; minimally-qualified # 🧏🏾‍♂ deaf man: medium-dark skin tone
1F9CF 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧏🏿‍♂️ deaf man: dark skin tone
1F9CF 1F3FF 200D 2642                      ; minimally-qualified # 🧏🏿‍♂ deaf man: dark skin tone
1F9CF 200D 2640 FE0F                       ; fully-qualified     # 🧏‍♀️ deaf woman
1F9CF 200D 2640                            ; minimally-qualified # 🧏‍♀ deaf woman
1F9CF 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧏🏻‍♀️ deaf woman: light skin tone
1F9CF 1F3FB 200D 2640                      ; minimally-qualified # 🧏🏻‍♀ deaf woman: light skin tone
1F9CF 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧏🏼‍♀️ deaf woman: medium-light skin tone
1F9CF 1F3FC 200D 2640                      ; minimally-qualified # 🧏🏼‍♀ deaf woman: medium-light skin tone
1F9CF 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧏🏽‍♀️ deaf woman: medium skin tone
1F9CF 1F3FD 200D 2640                      ; minimally-qualified # 🧏🏽‍♀ deaf woman: medium skin tone
1F9CF 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧏🏾‍♀️ deaf woman: medium-dark skin tone
1F9CF 1F3FE 200D 2640                      ; minimally-qualified # 🧏🏾‍♀ deaf woman: medium-dark skin tone
1F9CF 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧏🏿‍♀️ deaf woman: dark skin tone
1F9CF 1F3FF 200D 2640                      ; minimally-qualified # 🧏🏿‍♀ deaf woman: dark skin tone
1F647                                      ; fully-qualified     # 🙇 person bowing
1F647 1F3FB                                ; fully-qualified     # 🙇🏻 person bowing: light skin tone
1F647 1F3FC                                ; fully-qualified     # 🙇🏼 person bowing: medium-light skin tone
1F647 1F3FD                                ; fully-qualified     # 🙇🏽 person bowing: medium skin tone
1F647 1F3FE                                ; fully-qualified     # 🙇🏾 person bowing: medium-dark skin tone
1F647 1F3FF                                ; fully-qualified     # 🙇🏿 person bowing: dark skin tone
1F647 200D 2642 FE0F                       ; fully-qualified     # 🙇‍♂️ man bowing
1F647 200D 2642                            ; minimally-qualified # 🙇‍♂ man bowing
1F647 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🙇🏻‍♂️ man bowing: light skin tone
1F647 1F3FB 200D 2642                      ; minimally-qualified # 🙇🏻‍♂ man bowing: light skin tone
1F647 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🙇🏼‍♂️ man bowing: medium-light skin tone
1F647 1F3FC 200D 2642                      ; minimally-qualified # 🙇🏼‍♂ man bowing: medium-light skin tone
1F647 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🙇🏽‍♂️ man bowing: medium skin tone
1F647 1F3FD 200D 2642                      ; minimally-qualified # 🙇🏽‍♂ man bowing: medium skin tone
1F647 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🙇🏾‍♂️ man bowing: medium-dark skin tone
1F647 1F3FE 200D 2642                      ; minimally-qualified # 🙇🏾‍♂ man bowing: medium-dark skin tone
1F647 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🙇🏿‍♂️ man bowing: dark skin tone
1F647 1F3FF 200D 2642                      ; minimally-qualified # 🙇🏿‍♂ man bowing: dark skin tone
1F647 200D 2640 FE0F                       ; fully-qualified     # 🙇‍♀️ woman bowing
1F647 200D 2640                            ; minimally-qualified # 🙇‍♀ woman bowing
1F647 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🙇🏻‍♀️ woman bowing: light skin tone
1F647 1F3FB 200D 2640                      ; minimally-qualified # 🙇🏻‍♀ woman bowing: light skin tone
1F647 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🙇🏼‍♀️ woman bowing: medium-light skin tone
1F647 1F3FC 200D 2640                      ; minimally-qualified # 🙇🏼‍♀ woman bowing: medium-light skin tone
1F647 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🙇🏽‍♀️ woman bowing: medium skin tone
1F647 1F3FD 200D 2640                      ; minimally-qualified # 🙇🏽‍♀ woman bowing: medium skin tone
1F647 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🙇🏾‍♀️ woman bowing: medium-dark skin tone
1F647 1F3FE 200D 2640                      ; minimally-qualified # 🙇🏾‍♀ woman bowing: medium-dark skin tone
1F647 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🙇🏿‍♀️ woman bowing: dark skin tone
1F647 1F3FF 200D 2640                      ; minimally-qualified # 🙇🏿‍♀ woman bowing: dark skin tone
1F926                                      ; fully-qualified     # 🤦 person facepalming
1F926 1F3FB                                ; fully-qualified     # 🤦🏻 person facepalming: light skin tone
1F926 1F3FC                                ; fully-qualified     # 🤦🏼 person facepalming: medium-light skin tone
1F926 1F3FD                                ; fully-qualified     # 🤦🏽 person facepalming: medium skin tone
1F926 1F3FE                                ; fully-qualified     # 🤦🏾 person facepalming: medium-dark skin tone
1F926 1F3FF                                ; fully-qualified     # 🤦🏿 person facepalming: dark skin tone
1F926 200D 2642 FE0F                       ; fully-qualified     # 🤦‍♂️ man facepalming
1F926 200D 2642                            ; minimally-qualified # 🤦‍♂ man facepalming
1F926 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🤦🏻‍♂️ man facepalming: light skin tone
1F926 1F3FB 200D 2642                      ; minimally-qualified # 🤦🏻‍♂ man facepalming: light skin tone
1F926 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🤦🏼‍♂️ man facepalming: medium-light skin tone
1F926 1F3FC 200D 2642                      ; minimally-qualified # 🤦🏼‍♂ man facepalming: medium-light skin tone
1F926 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🤦🏽‍♂️ man facepalming: medium skin tone
1F926 1F3FD 200D 2642                      ; minimally-qualified # 🤦🏽‍♂ man facepalming: medium skin tone
1F926 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🤦🏾‍♂️ man facepalming: medium-dark skin tone
1F926 1F3FE 200D 2642                      ; minimally-qualified # 🤦🏾‍♂ man facepalming: medium-dark skin tone
1F926 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🤦🏿‍♂️ man facepalming: dark skin tone
1F926 1F3FF 200D 2642                      ; minimally-qualified # 🤦🏿‍♂ man facepalming: dark skin tone
1F926 200D 2640 FE0F                       ; fully-qualified     # 🤦‍♀️ woman facepalming
1F926 200D 2640                            ; minimally-qualified # 🤦‍♀ woman facepalming
1F926 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🤦🏻‍♀️ woman facepalming: light skin tone
1F926 1F3FB 200D 2640                      ; minimally-qualified # 🤦🏻‍♀ woman facepalming: light skin tone
1F926 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🤦🏼‍♀️ woman facepalming: medium-light skin tone
1F926 1F3FC 200D 2640                      ; minimally-qualified # 🤦🏼‍♀ woman facepalming: medium-light skin tone
1F926 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🤦🏽‍♀️ woman facepalming: medium skin tone
1F926 1F3FD 200D 2640                      ; minimally-qualified # 🤦🏽‍♀ woman facepalming: medium skin tone
1F926 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🤦🏾‍♀️ woman facepalming: medium-dark skin tone
1F926 1F3FE 200D 2640                      ; minimally-qualified # 🤦🏾‍♀ woman facepalming: medium-dark skin tone
1F926 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🤦🏿‍♀️ woman facepalming: dark skin tone
1F926 1F3FF 200D 2640                      ; minimally-qualified # 🤦🏿‍♀ woman facepalming: dark skin tone
1F937                                      ; fully-qualified     # 🤷 person shrugging
1F937 1F3FB                                ; fully-qualified     # 🤷🏻 person shrugging: light skin tone
1F937 1F3FC                                ; fully-qualified     # 🤷🏼 person shrugging: medium-light skin tone
1F937 1F3FD                                ; fully-qualified     # 🤷🏽 person shrugging: medium skin tone
1F937 1F3FE                                ; fully-qualified     # 🤷🏾 person shrugging: medium-dark skin tone
1F937 1F3FF                                ; fully-qualified     # 🤷🏿 person shrugging: dark skin tone
1F937 200D 2642 FE0F                       ; fully-qualified     # 🤷‍♂️ man shrugging
1F937 200D 2642                            ; minimally-qualified # 🤷‍♂ man shrugging
1F937 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🤷🏻‍♂️ man shrugging: light skin tone
1F937 1F3FB 200D 2642                      ; minimally-qualified # 🤷🏻‍♂ man shrugging: light skin tone
1F937 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🤷🏼‍♂️ man shrugging: medium-light skin tone
1F937 1F3FC 200D 2642                      ; minimally-qualified # 🤷🏼‍♂ man shrugging: medium-light skin tone
1F937 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🤷🏽‍♂️ man shrugging: medium skin tone
1F937 1F3FD 200D 2642                      ; minimally-qualified # 🤷🏽‍♂ man shrugging: medium skin tone
1F937 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🤷🏾‍♂️ man shrugging: medium-dark skin tone
1F937 1F3FE 200D 2642                      ; minimally-qualified # 🤷🏾‍♂ man shrugging: medium-dark skin tone
1F937 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🤷🏿‍♂️ man shrugging: dark skin tone
1F937 1F3FF 200D 2642                      ; minimally-qualified # 🤷🏿‍♂ man shrugging: dark skin tone
1F937 200D 2640 FE0F                       ; fully-qualified     # 🤷‍♀️ woman shrugging
1F937 200D 2640                            ; minimally-qualified # 🤷‍♀ woman shrugging
1F937 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🤷🏻‍♀️ woman shrugging: light skin tone
1F937 1F3FB 200D 2640                      ; minimally-qualified # 🤷🏻‍♀ woman shrugging: light skin tone
1F937 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🤷🏼‍♀️ woman shrugging: medium-light skin tone
1F937 1F3FC 200D 2640                      ; minimally-qualified # 🤷🏼‍♀ woman shrugging: medium-light skin tone
1F937 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🤷🏽‍♀️ woman shrugging: medium skin tone
1F937 1F3FD 200D 2640                      ; minimally-qualified # 🤷🏽‍♀ woman shrugging: medium skin tone
1F937 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🤷🏾‍♀️ woman shrugging: medium-dark skin tone
1F937 1F3FE 200D 2640                      ; minimally-qualified # 🤷🏾‍♀ woman shrugging: medium-dark skin tone
1F937 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🤷🏿‍♀️ woman shrugging: dark skin tone
1F937 1F3FF 200D 2640                      ; minimally-qualified # 🤷🏿‍♀ woman shrugging: dark skin tone

# subgroup: person-role
1F468 200D 2695 FE0F                       ; fully-qualified     # 👨‍⚕️ man health worker
1F468 200D 2695                            ; minimally-qualified # 👨‍⚕ man health worker
1F468 1F3FB 200D 2695 FE0F                 ; fully-qualified     # 👨🏻‍⚕️ man health worker: light skin tone
1F468 1F3FB 200D 2695                      ; minimally-qualified # 👨🏻‍⚕ man health worker: light skin tone
1F468 1F3FC 200D 2695 FE0F                 ; fully-qualified     # 👨🏼‍⚕️ man health worker: medium-light skin tone
1F468 1F3FC 200D 2695                      ; minimally-qualified # 👨🏼‍⚕ man health worker: medium-light skin tone
1F468 1F3FD 200D 2695 FE0F                 ; fully-qualified     # 👨🏽‍⚕️ man health worker: medium skin tone
1F468 1F3FD 200D 2695                      ; minimally-qualified # 👨🏽‍⚕ man health worker: medium skin tone
1F468 1F3FE 200D 2695 FE0F                 ; fully-qualified     # 👨🏾‍⚕️ man health worker: medium-dark skin tone
1F468 1F3FE 200D 2695                      ; minimally-qualified # 👨🏾‍⚕ man health worker: medium-dark skin tone
1F468 1F3FF 200D 2695 FE0F                 ; fully-qualified     # 👨🏿‍⚕️ man health worker: dark skin tone
1F468 1F3FF 200D 2695                      ; minimally-qualified # 👨🏿‍⚕ man health worker: dark skin tone
1F469 200D 2695 FE0F                       ; fully-qualified     # 👩‍⚕️ woman health worker
1F469 200D 2695                            ; minimally-qualified # 👩‍⚕ woman health worker
1F469 1F3FB 200D 2695 FE0F                 ; fully-qualified     # 👩🏻‍⚕️ woman health worker: light skin tone
1F469 1F3FB 200D 2695                      ; minimally-qualified # 👩🏻‍⚕ woman health worker: light skin tone
1F469 1F3FC 200D 2695 FE0F                 ; fully-qualified     # 👩🏼‍⚕️ woman health worker: medium-light skin tone
1F469 1F3FC 200D 2695                      ; minimally-qualified # 👩🏼‍⚕ woman health worker: medium-light skin tone
1F469 1F3FD 200D 2695 FE0F                 ; fully-qualified     # 👩🏽‍⚕️ woman health worker: medium skin tone
1F469 1F3FD 200D 2695                      ; minimally-qualified # 👩🏽‍⚕ woman health worker: medium skin tone
1F469 1F3FE 200D 2695 FE0F                 ; fully-qualified     # 👩🏾‍⚕️ woman health worker: medium-dark skin tone
1F469 1F3FE 200D 2695                      ; minimally-qualified # 👩🏾‍⚕ woman health worker: medium-dark skin tone
1F469 1F3FF 200D 2695 FE0F                 ; fully-qualified     # 👩🏿‍⚕️ woman health worker: dark skin tone
1F469 1F3FF 200D 2695                      ; minimally-qualified # 👩🏿‍⚕ woman health worker: dark skin tone
1F468 200D 1F393                           ; fully-qualified     # 👨‍🎓 man student
1F468 1F3FB 200D 1F393                     ; fully-qualified     # 👨🏻‍🎓 man student: light skin tone
1F468 1F3FC 200D 1F393                     ; fully-qualified     # 👨🏼‍🎓 man student: medium-light skin tone
1F468 1F3FD 200D 1F393                     ; fully-qualified     # 👨🏽‍🎓 man student: medium skin tone
1F468 1F3FE 200D 1F393                     ; fully-qualified     # 👨🏾‍🎓 man student: medium-dark skin tone
1F468 1F3FF 200D 1F393                     ; fully-qualified     # 👨🏿‍🎓 man student: dark skin tone
1F469 200D 1F393                           ; fully-qualified     # 👩‍🎓 woman student
1F469 1F3FB 200D 1F393                     ; fully-qualified     # 👩🏻‍🎓 woman student: light skin tone
1F469 1F3FC 200D 1F393                     ; fully-qualified     # 👩🏼‍🎓 woman student: medium-light skin tone
1F469 1F3FD 200D 1F393                     ; fully-qualified     # 👩🏽‍🎓 woman student: medium skin tone
1F469 1F3FE 200D 1F393                     ; fully-qualified     # 👩🏾‍🎓 woman student: medium-dark skin tone
1F469 1F3FF 200D 1F393                     ; fully-qualified     # 👩🏿‍🎓 woman student: dark skin tone
1F468 200D 1F3EB                           ; fully-qualified     # 👨‍🏫 man teacher
1F468 1F3FB 200D 1F3EB                     ; fully-qualified     # 👨🏻‍🏫 man teacher: light skin tone
1F468 1F3FC 200D 1F3EB                     ; fully-qualified     # 👨🏼‍🏫 man teacher: medium-light skin tone
1F468 1F3FD 200D 1F3EB                     ; fully-qualified     # 👨🏽‍🏫 man teacher: medium skin tone
1F468 1F3FE 200D 1F3EB                     ; fully-qualified     # 👨🏾‍🏫 man teacher: medium-dark skin tone
1F468 1F3FF 200D 1F3EB                     ; fully-qualified     # 👨🏿‍🏫 man teacher: dark skin tone
1F469 200D 1F3EB                           ; fully-qualified     # 👩‍🏫 woman teacher
1F469 1F3FB 200D 1F3EB                     ; fully-qualified     # 👩🏻‍🏫 woman teacher: light skin tone
1F469 1F3FC 200D 1F3EB                     ; fully-qualified     # 👩🏼‍🏫 woman teacher: medium-light skin tone
1F469 1F3FD 200D 1F3EB                     ; fully-qualified     # 👩🏽‍🏫 woman teacher: medium skin tone
1F469 1F3FE 200D 1F3EB                     ; fully-qualified     # 👩🏾‍🏫 woman teacher: medium-dark skin tone
1F469 1F3FF 200D 1F3EB                     ; fully-qualified     # 👩🏿‍🏫 woman teacher: dark skin tone
1F468 200D 2696 FE0F                       ; fully-qualified     # 👨‍⚖️ man judge
1F468 200D 2696                            ; minimally-qualified # 👨‍⚖ man judge
1F468 1F3FB 200D 2696 FE0F                 ; fully-qualified     # 👨🏻‍⚖️ man judge: light skin tone
1F468 1F3FB 200D 2696                      ; minimally-qualified # 👨🏻‍⚖ man judge: light skin tone
1F468 1F3FC 200D 2696 FE0F                 ; fully-qualified     # 👨🏼‍⚖️ man judge: medium-light skin tone
1F468 1F3FC 200D 2696                      ; minimally-qualified # 👨🏼‍⚖ man judge: medium-light skin tone
1F468 1F3FD 200D 2696 FE0F                 ; fully-qualified     # 👨🏽‍⚖️ man judge: medium skin tone
1F468 1F3FD 200D 2696                      ; minimally-qualified # 👨🏽‍⚖ man judge: medium skin tone
1F468 1F3FE 200D 2696 FE0F                 ; fully-qualified     # 👨🏾‍⚖️ man judge: medium-dark skin tone
1F468 1F3FE 200D 2696                      ; minimally-qualified # 👨🏾‍⚖ man judge: medium-dark skin tone
1F468 1F3FF 200D 2696 FE0F                 ; fully-qualified     # 👨🏿‍⚖️ man judge: dark skin tone
1F468 1F3FF 200D 2696                      ; minimally-qualified # 👨🏿‍⚖ man judge: dark skin tone
1F469 200D 2696 FE0F                       ; fully-qualified     # 👩‍⚖️ woman judge
1F469 200D 2696                            ; minimally-qualified # 👩‍⚖ woman judge
1F469 1F3FB 200D 2696 FE0F                 ; fully-qualified     # 👩🏻‍⚖️ woman judge: light skin tone
1F469 1F3FB 200D 2696                      ; minimally-qualified # 👩🏻‍⚖ woman judge: light skin tone
1F469 1F3FC 200D 2696 FE0F                 ; fully-qualified     # 👩🏼‍⚖️ woman judge: medium-light skin tone
1F469 1F3FC 200D 2696                      ; minimally-qualified # 👩🏼‍⚖ woman judge: medium-light skin tone
1F469 1F3FD 200D 2696 FE0F                 ; fully-qualified     # 👩🏽‍⚖️ woman judge: medium skin tone
1F469 1F3FD 200D 2696                      ; minimally-qualified # 👩🏽‍⚖ woman judge: medium skin tone
1F469 1F3FE 200D 2696 FE0F                 ; fully-qualified     # 👩🏾‍⚖️ woman judge: medium-dark skin tone
1F469 1F3FE 200D 2696                      ; minimally-qualified # 👩🏾‍⚖ woman judge: medium-dark skin tone
1F469 1F3FF 200D 2696 FE0F                 ; fully-qualified     # 👩🏿‍⚖️ woman judge: dark skin tone
1F469 1F3FF 200D 2696                      ; minimally-qualified # 👩🏿‍⚖ woman judge: dark skin tone
1F468 200D 1F33E                           ; fully-qualified     # 👨‍🌾 man farmer
1F468 1F3FB 200D 1F33E                     ; fully-qualified     # 👨🏻‍🌾 man farmer: light skin tone
1F468 1F3FC 200D 1F33E                     ; fully-qualified     # 👨🏼‍🌾 man farmer: medium-light skin tone
1F468 1F3FD 200D 1F33E                     ; fully-qualified     # 👨🏽‍🌾 man farmer: medium skin tone
1F468 1F3FE 200D 1F33E                     ; fully-qualified     # 👨🏾‍🌾 man farmer: medium-dark skin tone
1F468 1F3FF 200D 1F33E                     ; fully-qualified     # 👨🏿‍🌾 man farmer: dark skin tone
1F469 200D 1F33E                           ; fully-qualified     # 👩‍🌾 woman farmer
1F469 1F3FB 200D 1F33E                     ; fully-qualified     # 👩🏻‍🌾 woman farmer: light skin tone
1F469 1F3FC 200D 1F33E                     ; fully-qualified     # 👩🏼‍🌾 woman farmer: medium-light skin tone
1F469 1F3FD 200D 1F33E                     ; fully-qualified     # 👩🏽‍🌾 woman farmer: medium skin tone
1F469 1F3FE 200D 1F33E                     ; fully-qualified     # 👩🏾‍🌾 woman farmer: medium-dark skin tone
1F469 1F3FF 200D 1F33E                     ; fully-qualified     # 👩🏿‍🌾 woman farmer: dark skin tone
1F468 200D 1F373                           ; fully-qualified     # 👨‍🍳 man cook
1F468 1F3FB 200D 1F373                     ; fully-qualified     # 👨🏻‍🍳 man cook: light skin tone
1F468 1F3FC 200D 1F373                     ; fully-qualified     # 👨🏼‍🍳 man cook: medium-light skin tone
1F468 1F3FD 200D 1F373                     ; fully-qualified     # 👨🏽‍🍳 man cook: medium skin tone
1F468 1F3FE 200D 1F373                     ; fully-qualified     # 👨🏾‍🍳 man cook: medium-dark skin tone
1F468 1F3FF 200D 1F373                     ; fully-qualified     # 👨🏿‍🍳 man cook: dark skin tone
1F469 200D 1F373                           ; fully-qualified     # 👩‍🍳 woman cook
1F469 1F3FB 200D 1F373                     ; fully-qualified     # 👩🏻‍🍳 woman cook: light skin tone
1F469 1F3FC 200D 1F373                     ; fully-qualified     # 👩🏼‍🍳 woman cook: medium-light skin tone
1F469 1F3FD 200D 1F373                     ; fully-qualified     # 👩🏽‍🍳 woman cook: medium skin tone
1F469 1F3FE 200D 1F373                     ; fully-qualified     # 👩🏾‍🍳 woman cook: medium-dark skin tone
1F469 1F3FF 200D 1F373                     ; fully-qualified     # 👩🏿‍🍳 woman cook: dark skin tone
1F468 200D 1F527                           ; fully-qualified     # 👨‍🔧 man mechanic
1F468 1F3FB 200D 1F527                     ; fully-qualified     # 👨🏻‍🔧 man mechanic: light skin tone
1F468 1F3FC 200D 1F527                     ; fully-qualified     # 👨🏼‍🔧 man mechanic: medium-light skin tone
1F468 1F3FD 200D 1F527                     ; fully-qualified     # 👨🏽‍🔧 man mechanic: medium skin tone
1F468 1F3FE 200D 1F527                     ; fully-qualified     # 👨🏾‍🔧 man mechanic: medium-dark skin tone
1F468 1F3FF 200D 1F527                     ; fully-qualified     # 👨🏿‍🔧 man mechanic: dark skin tone
1F469 200D 1F527                           ; fully-qualified     # 👩‍🔧 woman mechanic
1F469 1F3FB 200D 1F527                     ; fully-qualified     # 👩🏻‍🔧 woman mechanic: light skin tone
1F469 1F3FC 200D 1F527                     ; fully-qualified     # 👩🏼‍🔧 woman mechanic: medium-light skin tone
1F469 1F3FD 200D 1F527                     ; fully-qualified     # 👩🏽‍🔧 woman mechanic: medium skin tone
1F469 1F3FE 200D 1F527                     ; fully-qualified     # 👩🏾‍🔧 woman mechanic: medium-dark skin tone
1F469 1F3FF 200D 1F527                     ; fully-qualified     # 👩🏿‍🔧 woman mechanic: dark skin tone
1F468 200D 1F3ED                           ; fully-qualified     # 👨‍🏭 man factory worker
1F468 1F3FB 200D 1F3ED                     ; fully-qualified     # 👨🏻‍🏭 man factory worker: light skin tone
1F468 1F3FC 200D 1F3ED                     ; fully-qualified     # 👨🏼‍🏭 man factory worker: medium-light skin tone
1F468 1F3FD 200D 1F3ED                     ; fully-qualified     # 👨🏽‍🏭 man factory worker: medium skin tone
1F468 1F3FE 200D 1F3ED                     ; fully-qualified     # 👨🏾‍🏭 man factory worker: medium-dark skin tone
1F468 1F3FF 200D 1F3ED                     ; fully-qualified     # 👨🏿‍🏭 man factory worker: dark skin tone
1F469 200D 1F3ED                           ; fully-qualified     # 👩‍🏭 woman factory worker
1F469 1F3FB 200D 1F3ED                     ; fully-qualified     # 👩🏻‍🏭 woman factory worker: light skin tone
1F469 1F3FC 200D 1F3ED                     ; fully-qualified     # 👩🏼‍🏭 woman factory worker: medium-light skin tone
1F469 1F3FD 200D 1F3ED                     ; fully-qualified     # 👩🏽‍🏭 woman factory worker: medium skin tone
1F469 1F3FE 200D 1F3ED                     ; fully-qualified     # 👩🏾‍🏭 woman factory worker: medium-dark skin tone
1F469 1F3FF 200D 1F3ED                     ; fully-qualified     # 👩🏿‍🏭 woman factory worker: dark skin tone
1F468 200D 1F4BC                           ; fully-qualified     # 👨‍💼 man office worker
1F468 1F3FB 200D 1F4BC                     ; fully-qualified     # 👨🏻‍💼 man office worker: light skin tone
1F468 1F3FC 200D 1F4BC                     ; fully-qualified     # 👨🏼‍💼 man office worker: medium-light skin tone
1F468 1F3FD 200D 1F4BC                     ; fully-qualified     # 👨🏽‍💼 man office worker: medium skin tone
1F468 1F3FE 200D 1F4BC                     ; fully-qualified     # 👨🏾‍💼 man office worker: medium-dark skin tone
1F468 1F3FF 200D 1F4BC                     ; fully-qualified     # 👨🏿‍💼 man office worker: dark skin tone
1F469 200D 1F4BC                           ; fully-qualified     # 👩‍💼 woman office worker
1F469 1F3FB 200D 1F4BC                     ; fully-qualified     # 👩🏻‍💼 woman office worker: light skin tone
1F469 1F3FC 200D 1F4BC                     ; fully-qualified     # 👩🏼‍💼 woman office worker: medium-light skin tone
1F469 1F3FD 200D 1F4BC                     ; fully-qualified     # 👩🏽‍💼 woman office worker: medium skin tone
1F469 1F3FE 200D 1F4BC                     ; fully-qualified     # 👩🏾‍💼 woman office worker: medium-dark skin tone
1F469 1F3FF 200D 1F4BC                     ; fully-qualified     # 👩🏿‍💼 woman office worker: dark skin tone
1F468 200D 1F52C                           ; fully-qualified     # 👨‍🔬 man scientist
1F468 1F3FB 200D 1F52C                     ; fully-qualified     # 👨🏻‍🔬 man scientist: light skin tone
1F468 1F3FC 200D 1F52C                     ; fully-qualified     # 👨🏼‍🔬 man scientist: medium-light skin tone
1F468 1F3FD 200D 1F52C                     ; fully-qualified     # 👨🏽‍🔬 man scientist: medium skin tone
1F468 1F3FE 200D 1F52C                     ; fully-qualified     # 👨🏾‍🔬 man scientist: medium-dark skin tone
1F468 1F3FF 200D 1F52C                     ; fully-qualified     # 👨🏿‍🔬 man scientist: dark skin tone
1F469 200D 1F52C                           ; fully-qualified     # 👩‍🔬 woman scientist
1F469 1F3FB 200D 1F52C                     ; fully-qualified     # 👩🏻‍🔬 woman scientist: light skin tone
1F469 1F3FC 200D 1F52C                     ; fully-qualified     # 👩🏼‍🔬 woman scientist: medium-light skin tone
1F469 1F3FD 200D 1F52C                     ; fully-qualified     # 👩🏽‍🔬 woman scientist: medium skin tone
1F469 1F3FE 200D 1F52C                     ; fully-qualified     # 👩🏾‍🔬 woman scientist: medium-dark skin tone
1F469 1F3FF 200D 1F52C                     ; fully-qualified     # 👩🏿‍🔬 woman scientist: dark skin tone
1F468 200D 1F4BB                           ; fully-qualified     # 👨‍💻 man technologist
1F468 1F3FB 200D 1F4BB                     ; fully-qualified     # 👨🏻‍💻 man technologist: light skin tone
1F468 1F3FC 200D 1F4BB                     ; fully-qualified     # 👨🏼‍💻 man technologist: medium-light skin tone
1F468 1F3FD 200D 1F4BB                     ; fully-qualified     # 👨🏽‍💻 man technologist: medium skin tone
1F468 1F3FE 200D 1F4BB                     ; fully-qualified     # 👨🏾‍💻 man technologist: medium-dark skin tone
1F468 1F3FF 200D 1F4BB                     ; fully-qualified     # 👨🏿‍💻 man technologist: dark skin tone
1F469 200D 1F4BB                           ; fully-qualified     # 👩‍💻 woman technologist
1F469 1F3FB 200D 1F4BB                     ; fully-qualified     # 👩🏻‍💻 woman technologist: light skin tone
1F469 1F3FC 200D 1F4BB                     ; fully-qualified     # 👩🏼‍💻 woman technologist: medium-light skin tone
1F469 1F3FD 200D 1F4BB                     ; fully-qualified     # 👩🏽‍💻 woman technologist: medium skin tone
1F469 1F3FE 200D 1F4BB                     ; fully-qualified     # 👩🏾‍💻 woman technologist: medium-dark skin tone
1F469 1F3FF 200D 1F4BB                     ; fully-qualified     # 👩🏿‍💻 woman technologist: dark skin tone
1F468 200D 1F3A4                           ; fully-qualified     # 👨‍🎤 man singer
1F468 1F3FB 200D 1F3A4                     ; fully-qualified     # 👨🏻‍🎤 man singer: light skin tone
1F468 1F3FC 200D 1F3A4                     ; fully-qualified     # 👨🏼‍🎤 man singer: medium-light skin tone
1F468 1F3FD 200D 1F3A4                     ; fully-qualified     # 👨🏽‍🎤 man singer: medium skin tone
1F468 1F3FE 200D 1F3A4                     ; fully-qualified     # 👨🏾‍🎤 man singer: medium-dark skin tone
1F468 1F3FF 200D 1F3A4                     ; fully-qualified     # 👨🏿‍🎤 man singer: dark skin tone
1F469 200D 1F3A4                           ; fully-qualified     # 👩‍🎤 woman singer
1F469 1F3FB 200D 1F3A4                     ; fully-qualified     # 👩🏻‍🎤 woman singer: light skin tone
1F469 1F3FC 200D 1F3A4                     ; fully-qualified     # 👩🏼‍🎤 woman singer: medium-light skin tone
1F469 1F3FD 200D 1F3A4                     ; fully-qualified     # 👩🏽‍🎤 woman singer: medium skin tone
1F469 1F3FE 200D 1F3A4                     ; fully-qualified     # 👩🏾‍🎤 woman singer: medium-dark skin tone
1F469 1F3FF 200D 1F3A4                     ; fully-qualified     # 👩🏿‍🎤 woman singer: dark skin tone
1F468 200D 1F3A8                           ; fully-qualified     # 👨‍🎨 man artist
1F468 1F3FB 200D 1F3A8                     ; fully-qualified     # 👨🏻‍🎨 man artist: light skin tone
1F468 1F3FC 200D 1F3A8                     ; fully-qualified     # 👨🏼‍🎨 man artist: medium-light skin tone
1F468 1F3FD 200D 1F3A8                     ; fully-qualified     # 👨🏽‍🎨 man artist: medium skin tone
1F468 1F3FE 200D 1F3A8                     ; fully-qualified     # 👨🏾‍🎨 man artist: medium-dark skin tone
1F468 1F3FF 200D 1F3A8                     ; fully-qualified     # 👨🏿‍🎨 man artist: dark skin tone
1F469 200D 1F3A8                           ; fully-qualified     # 👩‍🎨 woman artist
1F469 1F3FB 200D 1F3A8                     ; fully-qualified     # 👩🏻‍🎨 woman artist: light skin tone
1F469 1F3FC 200D 1F3A8                     ; fully-qualified     # 👩🏼‍🎨 woman artist: medium-light skin tone
1F469 1F3FD 200D 1F3A8                     ; fully-qualified     # 👩🏽‍🎨 woman artist: medium skin tone
1F469 1F3FE 200D 1F3A8                     ; fully-qualified     # 👩🏾‍🎨 woman artist: medium-dark skin tone
1F469 1F3FF 200D 1F3A8                     ; fully-qualified     # 👩🏿‍🎨 woman artist: dark skin tone
1F468 200D 2708 FE0F                       ; fully-qualified     # 👨‍✈️ man pilot
1F468 200D 2708                            ; minimally-qualified # 👨‍✈ man pilot
1F468 1F3FB 200D 2708 FE0F                 ; fully-qualified     # 👨🏻‍✈️ man pilot: light skin tone
1F468 1F3FB 200D 2708                      ; minimally-qualified # 👨🏻‍✈ man pilot: light skin tone
1F468 1F3FC 200D 2708 FE0F                 ; fully-qualified     # 👨🏼‍✈️ man pilot: medium-light skin tone
1F468 1F3FC 200D 2708                      ; minimally-qualified # 👨🏼‍✈ man pilot: medium-light skin tone
1F468 1F3FD 200D 2708 FE0F                 ; fully-qualified     # 👨🏽‍✈️ man pilot: medium skin tone
1F468 1F3FD 200D 2708                      ; minimally-qualified # 👨🏽‍✈ man pilot: medium skin tone
1F468 1F3FE 200D 2708 FE0F                 ; fully-qualified     # 👨🏾‍✈️ man pilot: medium-dark skin tone
1F468 1F3FE 200D 2708                      ; minimally-qualified # 👨🏾‍✈ man pilot: medium-dark skin tone
1F468 1F3FF 200D 2708 FE0F                 ; fully-qualified     # 👨🏿‍✈️ man pilot: dark skin tone
1F468 1F3FF 200D 2708                      ; minimally-qualified # 👨🏿‍✈ man pilot: dark skin tone
1F469 200D 2708 FE0F                       ; fully-qualified     # 👩‍✈️ woman pilot
1F469 200D 2708                            ; minimally-qualified # 👩‍✈ woman pilot
1F469 1F3FB 200D 2708 FE0F                 ; fully-qualified     # 👩🏻‍✈️ woman pilot: light skin tone
1F469 1F3FB 200D 2708                      ; minimally-qualified # 👩🏻‍✈ woman pilot: light skin tone
1F469 1F3FC 200D 2708 FE0F                 ; fully-qualified     # 👩🏼‍✈️ woman pilot: medium-light skin tone
1F469 1F3FC 200D 2708                      ; minimally-qualified # 👩🏼‍✈ woman pilot: medium-light skin tone
1F469 1F3FD 200D 2708 FE0F                 ; fully-qualified     # 👩🏽‍✈️ woman pilot: medium skin tone
1F469 1F3FD 200D 2708                      ; minimally-qualified # 👩🏽‍✈ woman pilot: medium skin tone
1F469 1F3FE 200D 2708 FE0F                 ; fully-qualified     # 👩🏾‍✈️ woman pilot: medium-dark skin tone
1F469 1F3FE 200D 2708                      ; minimally-qualified # 👩🏾‍✈ woman pilot: medium-dark skin tone
1F469 1F3FF 200D 2708 FE0F                 ; fully-qualified     # 👩🏿‍✈️ woman pilot: dark skin tone
1F469 1F3FF 200D 2708                      ; minimally-qualified # 👩🏿‍✈ woman pilot: dark skin tone
1F468 200D 1F680                           ; fully-qualified     # 👨‍🚀 man astronaut
1F468 1F3FB 200D 1F680                     ; fully-qualified     # 👨🏻‍🚀 man astronaut: light skin tone
1F468 1F3FC 200D 1F680                     ; fully-qualified     # 👨🏼‍🚀 man astronaut: medium-light skin tone
1F468 1F3FD 200D 1F680                     ; fully-qualified     # 👨🏽‍🚀 man astronaut: medium skin tone
1F468 1F3FE 200D 1F680                     ; fully-qualified     # 👨🏾‍🚀 man astronaut: medium-dark skin tone
1F468 1F3FF 200D 1F680                     ; fully-qualified     # 👨🏿‍🚀 man astronaut: dark skin tone
1F469 200D 1F680                           ; fully-qualified     # 👩‍🚀 woman astronaut
1F469 1F3FB 200D 1F680                     ; fully-qualified     # 👩🏻‍🚀 woman astronaut: light skin tone
1F469 1F3FC 200D 1F680                     ; fully-qualified     # 👩🏼‍🚀 woman astronaut: medium-light skin tone
1F469 1F3FD 200D 1F680                     ; fully-qualified     # 👩🏽‍🚀 woman astronaut: medium skin tone
1F469 1F3FE 200D 1F680                     ; fully-qualified     # 👩🏾‍🚀 woman astronaut: medium-dark skin tone
1F469 1F3FF 200D 1F680                     ; fully-qualified     # 👩🏿‍🚀 woman astronaut: dark skin tone
1F468 200D 1F692                           ; fully-qualified     # 👨‍🚒 man firefighter
1F468 1F3FB 200D 1F692                     ; fully-qualified     # 👨🏻‍🚒 man firefighter: light skin tone
1F468 1F3FC 200D 1F692                     ; fully-qualified     # 👨🏼‍🚒 man firefighter: medium-light skin tone
1F468 1F3FD 200D 1F692                     ; fully-qualified     # 👨🏽‍🚒 man firefighter: medium skin tone
1F468 1F3FE 200D 1F692                     ; fully-qualified     # 👨🏾‍🚒 man firefighter: medium-dark skin tone
1F468 1F3FF 200D 1F692                     ; fully-qualified     # 👨🏿‍🚒 man firefighter: dark skin tone
1F469 200D 1F692                           ; fully-qualified     # 👩‍🚒 woman firefighter
1F469 1F3FB 200D 1F692                     ; fully-qualified     # 👩🏻‍🚒 woman firefighter: light skin tone
1F469 1F3FC 200D 1F692                     ; fully-qualified     # 👩🏼‍🚒 woman firefighter: medium-light skin tone
1F469 1F3FD 200D 1F692                     ; fully-qualified     # 👩🏽‍🚒 woman firefighter: medium skin tone
1F469 1F3FE 200D 1F692                     ; fully-qualified     # 👩🏾‍🚒 woman firefighter: medium-dark skin tone
1F469 1F3FF 200D 1F692                     ; fully-qualified     # 👩🏿‍🚒 woman firefighter: dark skin tone
1F46E                                      ; fully-qualified     # 👮 police officer
1F46E 1F3FB                                ; fully-qualified     # 👮🏻 police officer: light skin tone
1F46E 1F3FC                                ; fully-qualified     # 👮🏼 police officer: medium-light skin tone
1F46E 1F3FD                                ; fully-qualified     # 👮🏽 police officer: medium skin tone
1F46E 1F3FE                                ; fully-qualified     # 👮🏾 police officer: medium-dark skin tone
1F46E 1F3FF                                ; fully-qualified     # 👮🏿 police officer: dark skin tone
1F46E 200D 2642 FE0F                       ; fully-qualified     # 👮‍♂️ man police officer
1F46E 200D 2642                            ; minimally-qualified # 👮‍♂ man police officer
1F46E 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 👮🏻‍♂️ man police officer: light skin tone
1F46E 1F3FB 200D 2642                      ; minimally-qualified # 👮🏻‍♂ man police officer: light skin tone
1F46E 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 👮🏼‍♂️ man police officer: medium-light skin tone
1F46E 1F3FC 200D 2642                      ; minimally-qualified # 👮🏼‍♂ man police officer: medium-light skin tone
1F46E 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 👮🏽‍♂️ man police officer: medium skin tone
1F46E 1F3FD 200D 2642                      ; minimally-qualified # 👮🏽‍♂ man police officer: medium skin tone
1F46E 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 👮🏾‍♂️ man police officer: medium-dark skin tone
1F46E 1F3FE 200D 2642                      ; minimally-qualified # 👮🏾‍♂ man police officer: medium-dark skin tone
1F46E 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 👮🏿‍♂️ man police officer: dark skin tone
1F46E 1F3FF 200D 2642                      ; minimally-qualified # 👮🏿‍♂ man police officer: dark skin tone
1F46E 200D 2640 FE0F                       ; fully-qualified     # 👮‍♀️ woman police officer
1F46E 200D 2640                            ; minimally-qualified # 👮‍♀ woman police officer
1F46E 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 👮🏻‍♀️ woman police officer: light skin tone
1F46E 1F3FB 200D 2640                      ; minimally-qualified # 👮🏻‍♀ woman police officer: light skin tone
1F46E 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 👮🏼‍♀️ woman police officer: medium-light skin tone
1F46E 1F3FC 200D 2640                      ; minimally-qualified # 👮🏼‍♀ woman police officer: medium-light skin tone
1F46E 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 👮🏽‍♀️ woman police officer: medium skin tone
1F46E 1F3FD 200D 2640                      ; minimally-qualified # 👮🏽‍♀ woman police officer: medium skin tone
1F46E 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 👮🏾‍♀️ woman police officer: medium-dark skin tone
1F46E 1F3FE 200D 2640                      ; minimally-qualified # 👮🏾‍♀ woman police officer: medium-dark skin tone
1F46E 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 👮🏿‍♀️ woman police officer: dark skin tone
1F46E 1F3FF 200D 2640                      ; minimally-qualified # 👮🏿‍♀ woman police officer: dark skin tone
1F575 FE0F                                 ; fully-qualified     # 🕵️ detective
1F575                                      ; unqualified         # 🕵 detective
1F575 1F3FB                                ; fully-qualified     # 🕵🏻 detective: light skin tone
1F575 1F3FC                                ; fully-qualified     # 🕵🏼 detective: medium-light skin tone
1F575 1F3FD                                ; fully-qualified     # 🕵🏽 detective: medium skin tone
1F575 1F3FE                                ; fully-qualified     # 🕵🏾 detective: medium-dark skin tone
1F575 1F3FF                                ; fully-qualified     # 🕵🏿 detective: dark skin tone
1F575 FE0F 200D 2642 FE0F                  ; fully-qualified     # 🕵️‍♂️ man detective
1F575 200D 2642 FE0F                       ; unqualified         # 🕵‍♂️ man detective
1F575 FE0F 200D 2642                       ; unqualified         # 🕵️‍♂ man detective
1F575 200D 2642                            ; unqualified         # 🕵‍♂ man detective
1F575 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🕵🏻‍♂️ man detective: light skin tone
1F575 1F3FB 200D 2642                      ; minimally-qualified # 🕵🏻‍♂ man detective: light skin tone
1F575 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🕵🏼‍♂️ man detective: medium-light skin tone
1F575 1F3FC 200D 2642                      ; minimally-qualified # 🕵🏼‍♂ man detective: medium-light skin tone
1F575 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🕵🏽‍♂️ man detective: medium skin tone
1F575 1F3FD 200D 2642                      ; minimally-qualified # 🕵🏽‍♂ man detective: medium skin tone
1F575 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🕵🏾‍♂️ man detective: medium-dark skin tone
1F575 1F3FE 200D 2642                      ; minimally-qualified # 🕵🏾‍♂ man detective: medium-dark skin tone
1F575 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🕵🏿‍♂️ man detective: dark skin tone
1F575 1F3FF 200D 2642                      ; minimally-qualified # 🕵🏿‍♂ man detective: dark skin tone
1F575 FE0F 200D 2640 FE0F                  ; fully-qualified     # 🕵️‍♀️ woman detective
1F575 200D 2640 FE0F                       ; unqualified         # 🕵‍♀️ woman detective
1F575 FE0F 200D 2640                       ; unqualified         # 🕵️‍♀ woman detective
1F575 200D 2640                            ; unqualified         # 🕵‍♀ woman detective
1F575 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🕵🏻‍♀️ woman detective: light skin tone
1F575 1F3FB 200D 2640                      ; minimally-qualified # 🕵🏻‍♀ woman detective: light skin tone
1F575 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🕵🏼‍♀️ woman detective: medium-light skin tone
1F575 1F3FC 200D 2640                      ; minimally-qualified # 🕵🏼‍♀ woman detective: medium-light skin tone
1F575 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🕵🏽‍♀️ woman detective: medium skin tone
1F575 1F3FD 200D 2640                      ; minimally-qualified # 🕵🏽‍♀ woman detective: medium skin tone
1F575 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🕵🏾‍♀️ woman detective: medium-dark skin tone
1F575 1F3FE 200D 2640                      ; minimally-qualified # 🕵🏾‍♀ woman detective: medium-dark skin tone
1F575 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🕵🏿‍♀️ woman detective: dark skin tone
1F575 1F3FF 200D 2640                      ; minimally-qualified # 🕵🏿‍♀ woman detective: dark skin tone
1F482                                      ; fully-qualified     # 💂 guard
1F482 1F3FB                                ; fully-qualified     # 💂🏻 guard: light skin tone
1F482 1F3FC                                ; fully-qualified     # 💂🏼 guard: medium-light skin tone
1F482 1F3FD                                ; fully-qualified     # 💂🏽 guard: medium skin tone
1F482 1F3FE                                ; fully-qualified     # 💂🏾 guard: medium-dark skin tone
1F482 1F3FF                                ; fully-qualified     # 💂🏿 guard: dark skin tone
1F482 200D 2642 FE0F                       ; fully-qualified     # 💂‍♂️ man guard
1F482 200D 2642                            ; minimally-qualified # 💂‍♂ man guard
1F482 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 💂🏻‍♂️ man guard: light skin tone
1F482 1F3FB 200D 2642                      ; minimally-qualified # 💂🏻‍♂ man guard: light skin tone
1F482 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 💂🏼‍♂️ man guard: medium-light skin tone
1F482 1F3FC 200D 2642                      ; minimally-qualified # 💂🏼‍♂ man guard: medium-light skin tone
1F482 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 💂🏽‍♂️ man guard: medium skin tone
1F482 1F3FD 200D 2642                      ; minimally-qualified # 💂🏽‍♂ man guard: medium skin tone
1F482 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 💂🏾‍♂️ man guard: medium-dark skin tone
1F482 1F3FE 200D 2642                      ; minimally-qualified # 💂🏾‍♂ man guard: medium-dark skin tone
1F482 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 💂🏿‍♂️ man guard: dark skin tone
1F482 1F3FF 200D 2642                      ; minimally-qualified # 💂🏿‍♂ man guard: dark skin tone
1F482 200D 2640 FE0F                       ; fully-qualified     # 💂‍♀️ woman guard
1F482 200D 2640                            ; minimally-qualified # 💂‍♀ woman guard
1F482 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 💂🏻‍♀️ woman guard: light skin tone
1F482 1F3FB 200D 2640                      ; minimally-qualified # 💂🏻‍♀ woman guard: light skin tone
1F482 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 💂🏼‍♀️ woman guard: medium-light skin tone
1F482 1F3FC 200D 2640                      ; minimally-qualified # 💂🏼‍♀ woman guard: medium-light skin tone
1F482 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 💂🏽‍♀️ woman guard: medium skin tone
1F482 1F3FD 200D 2640                      ; minimally-qualified # 💂🏽‍♀ woman guard: medium skin tone
1F482 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 💂🏾‍♀️ woman guard: medium-dark skin tone
1F482 1F3FE 200D 2640                      ; minimally-qualified # 💂🏾‍♀ woman guard: medium-dark skin tone
1F482 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 💂🏿‍♀️ woman guard: dark skin tone
1F482 1F3FF 200D 2640                      ; minimally-qualified # 💂🏿‍♀ woman guard: dark skin tone
1F477                                      ; fully-qualified     # 👷 construction worker
1F477 1F3FB                                ; fully-qualified     # 👷🏻 construction worker: light skin tone
1F477 1F3FC                                ; fully-qualified     # 👷🏼 construction worker: medium-light skin tone
1F477 1F3FD                                ; fully-qualified     # 👷🏽 construction worker: medium skin tone
1F477 1F3FE                                ; fully-qualified     # 👷🏾 construction worker: medium-dark skin tone
1F477 1F3FF                                ; fully-qualified     # 👷🏿 construction worker: dark skin tone
1F477 200D 2642 FE0F                       ; fully-qualified     # 👷‍♂️ man construction worker
1F477 200D 2642                            ; minimally-qualified # 👷‍♂ man construction worker
1F477 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 👷🏻‍♂️ man construction worker: light skin tone
1F477 1F3FB 200D 2642                      ; minimally-qualified # 👷🏻‍♂ man construction worker: light skin tone
1F477 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 👷🏼‍♂️ man construction worker: medium-light skin tone
1F477 1F3FC 200D 2642                      ; minimally-qualified # 👷🏼‍♂ man construction worker: medium-light skin tone
1F477 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 👷🏽‍♂️ man construction worker: medium skin tone
1F477 1F3FD 200D 2642                      ; minimally-qualified # 👷🏽‍♂ man construction worker: medium skin tone
1F477 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 👷🏾‍♂️ man construction worker: medium-dark skin tone
1F477 1F3FE 200D 2642                      ; minimally-qualified # 👷🏾‍♂ man construction worker: medium-dark skin tone
1F477 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 👷🏿‍♂️ man construction worker: dark skin tone
1F477 1F3FF 200D 2642                      ; minimally-qualified # 👷🏿‍♂ man construction worker: dark skin tone
1F477 200D 2640 FE0F                       ; fully-qualified     # 👷‍♀️ woman construction worker
1F477 200D 2640                            ; minimally-qualified # 👷‍♀ woman construction worker
1F477 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 👷🏻‍♀️ woman construction worker: light skin tone
1F477 1F3FB 200D 2640                      ; minimally-qualified # 👷🏻‍♀ woman construction worker: light skin tone
1F477 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 👷🏼‍♀️ woman construction worker: medium-light skin tone
1F477 1F3FC 200D 2640                      ; minimally-qualified # 👷🏼‍♀ woman construction worker: medium-light skin tone
1F477 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 👷🏽‍♀️ woman construction worker: medium skin tone
1F477 1F3FD 200D 2640                      ; minimally-qualified # 👷🏽‍♀ woman construction worker: medium skin tone
1F477 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 👷🏾‍♀️ woman construction worker: medium-dark skin tone
1F477 1F3FE 200D 2640                      ; minimally-qualified # 👷🏾‍♀ woman construction worker: medium-dark skin tone
1F477 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 👷🏿‍♀️ woman construction worker: dark skin tone
1F477 1F3FF 200D 2640                      ; minimally-qualified # 👷🏿‍♀ woman construction worker: dark skin tone
1F934                                      ; fully-qualified     # 🤴 prince
1F934 1F3FB                                ; fully-qualified     # 🤴🏻 prince: light skin tone
1F934 1F3FC                                ; fully-qualified     # 🤴🏼 prince: medium-light skin tone
1F934 1F3FD                                ; fully-qualified     # 🤴🏽 prince: medium skin tone
1F934 1F3FE                                ; fully-qualified     # 🤴🏾 prince: medium-dark skin tone
1F934 1F3FF                                ; fully-qualified     # 🤴🏿 prince: dark skin tone
1F478                                      ; fully-qualified     # 👸 princess
1F478 1F3FB                                ; fully-qualified     # 👸🏻 princess: light skin tone
1F478 1F3FC                                ; fully-qualified     # 👸🏼 princess: medium-light skin tone
1F478 1F3FD                                ; fully-qualified     # 👸🏽 princess: medium skin tone
1F478 1F3FE                                ; fully-qualified     # 👸🏾 princess: medium-dark skin tone
1F478 1F3FF                                ; fully-qualified     # 👸🏿 princess: dark skin tone
1F473                                      ; fully-qualified     # 👳 person wearing turban
1F473 1F3FB                                ; fully-qualified     # 👳🏻 person wearing turban: light skin tone
1F473 1F3FC                                ; fully-qualified     # 👳🏼 person wearing turban: medium-light skin tone
1F473 1F3FD                                ; fully-qualified     # 👳🏽 person wearing turban: medium skin tone
1F473 1F3FE                                ; fully-qualified     # 👳🏾 person wearing turban: medium-dark skin tone
1F473 1F3FF                                ; fully-qualified     # 👳🏿 person wearing turban: dark skin tone
1F473 200D 2642 FE0F                       ; fully-qualified     # 👳‍♂️ man wearing turban
1F473 200D 2642                            ; minimally-qualified # 👳‍♂ man wearing turban
1F473 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 👳🏻‍♂️ man wearing turban: light skin tone
1F473 1F3FB 200D 2642                      ; minimally-qualified # 👳🏻‍♂ man wearing turban: light skin tone
1F473 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 👳🏼‍♂️ man wearing turban: medium-light skin tone
1F473 1F3FC 200D 2642                      ; minimally-qualified # 👳🏼‍♂ man wearing turban: medium-light skin tone
1F473 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 👳🏽‍♂️ man wearing turban: medium skin tone
1F473 1F3FD 200D 2642                      ; minimally-qualified # 👳🏽‍♂ man wearing turban: medium skin tone
1F473 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 👳🏾‍♂️ man wearing turban: medium-dark skin tone
1F473 1F3FE 200D 2642                      ; minimally-qualified # 👳🏾‍♂ man wearing turban: medium-dark skin tone
1F473 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 👳🏿‍♂️ man wearing turban: dark skin tone
1F473 1F3FF 200D 2642                      ; minimally-qualified # 👳🏿‍♂ man wearing turban: dark skin tone
1F473 200D 2640 FE0F                       ; fully-qualified     # 👳‍♀️ woman wearing turban
1F473 200D 2640                            ; minimally-qualified # 👳‍♀ woman wearing turban
1F473 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 👳🏻‍♀️ woman wearing turban: light skin tone
1F473 1F3FB 200D 2640                      ; minimally-qualified # 👳🏻‍♀ woman wearing turban: light skin tone
1F473 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 👳🏼‍♀️ woman wearing turban: medium-light skin tone
1F473 1F3FC 200D 2640                      ; minimally-qualified # 👳🏼‍♀ woman wearing turban: medium-light skin tone
1F473 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 👳🏽‍♀️ woman wearing turban: medium skin tone
1F473 1F3FD 200D 2640                      ; minimally-qualified # 👳🏽‍♀ woman wearing turban: medium skin tone
1F473 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 👳🏾‍♀️ woman wearing turban: medium-dark skin tone
1F473 1F3FE 200D 2640                      ; minimally-qualified # 👳🏾‍♀ woman wearing turban: medium-dark skin tone
1F473 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 👳🏿‍♀️ woman wearing turban: dark skin tone
1F473 1F3FF 200D 2640                      ; minimally-qualified # 👳🏿‍♀ woman wearing turban: dark skin tone
1F472                                      ; fully-qualified     # 👲 man with Chinese cap
1F472 1F3FB                                ; fully-qualified     # 👲🏻 man with Chinese cap: light skin tone
1F472 1F3FC                                ; fully-qualified     # 👲🏼 man with Chinese cap: medium-light skin tone
1F472 1F3FD                                ; fully-qualified     # 👲🏽 man with Chinese cap: medium skin tone
1F472 1F3FE                                ; fully-qualified     # 👲🏾 man with Chinese cap: medium-dark skin tone
1F472 1F3FF                                ; fully-qualified     # 👲🏿 man with Chinese cap: dark skin tone
1F9D5                                      ; fully-qualified     # 🧕 woman with headscarf
1F9D5 1F3FB                                ; fully-qualified     # 🧕🏻 woman with headscarf: light skin tone
1F9D5 1F3FC                                ; fully-qualified     # 🧕🏼 woman with headscarf: medium-light skin tone
1F9D5 1F3FD                                ; fully-qualified     # 🧕🏽 woman with headscarf: medium skin tone
1F9D5 1F3FE                                ; fully-qualified     # 🧕🏾 woman with headscarf: medium-dark skin tone
1F9D5 1F3FF                                ; fully-qualified     # 🧕🏿 woman with headscarf: dark skin tone
1F935                                      ; fully-qualified     # 🤵 man in tuxedo
1F935 1F3FB                                ; fully-qualified     # 🤵🏻 man in tuxedo: light skin tone
1F935 1F3FC                                ; fully-qualified     # 🤵🏼 man in tuxedo: medium-light skin tone
1F935 1F3FD                                ; fully-qualified     # 🤵🏽 man in tuxedo: medium skin tone
1F935 1F3FE                                ; fully-qualified     # 🤵🏾 man in tuxedo: medium-dark skin tone
1F935 1F3FF                                ; fully-qualified     # 🤵🏿 man in tuxedo: dark skin tone
1F470                                      ; fully-qualified     # 👰 bride with veil
1F470 1F3FB                                ; fully-qualified     # 👰🏻 bride with veil: light skin tone
1F470 1F3FC                                ; fully-qualified     # 👰🏼 bride with veil: medium-light skin tone
1F470 1F3FD                                ; fully-qualified     # 👰🏽 bride with veil: medium skin tone
1F470 1F3FE                                ; fully-qualified     # 👰🏾 bride with veil: medium-dark skin tone
1F470 1F3FF                                ; fully-qualified     # 👰🏿 bride with veil: dark skin tone
1F930                                      ; fully-qualified     # 🤰 pregnant woman
1F930 1F3FB                                ; fully-qualified     # 🤰🏻 pregnant woman: light skin tone
1F930 1F3FC                                ; fully-qualified     # 🤰🏼 pregnant woman: medium-light skin tone
1F930 1F3FD                                ; fully-qualified     # 🤰🏽 pregnant woman: medium skin tone
1F930 1F3FE                                ; fully-qualified     # 🤰🏾 pregnant woman: medium-dark skin tone
1F930 1F3FF                                ; fully-qualified     # 🤰🏿 pregnant woman: dark skin tone
1F931                                      ; fully-qualified     # 🤱 breast-feeding
1F931 1F3FB                                ; fully-qualified     # 🤱🏻 breast-feeding: light skin tone
1F931 1F3FC                                ; fully-qualified     # 🤱🏼 breast-feeding: medium-light skin tone
1F931 1F3FD                                ; fully-qualified     # 🤱🏽 breast-feeding: medium skin tone
1F931 1F3FE                                ; fully-qualified     # 🤱🏾 breast-feeding: medium-dark skin tone
1F931 1F3FF                                ; fully-qualified     # 🤱🏿 breast-feeding: dark skin tone

# subgroup: person-fantasy
1F47C                                      ; fully-qualified     # 👼 baby angel
1F47C 1F3FB                                ; fully-qualified     # 👼🏻 baby angel: light skin tone
1F47C 1F3FC                                ; fully-qualified     # 👼🏼 baby angel: medium-light skin tone
1F47C 1F3FD                                ; fully-qualified     # 👼🏽 baby angel: medium skin tone
1F47C 1F3FE                                ; fully-qualified     # 👼🏾 baby angel: medium-dark skin tone
1F47C 1F3FF                                ; fully-qualified     # 👼🏿 baby angel: dark skin tone
1F385                                      ; fully-qualified     # 🎅 Santa Claus
1F385 1F3FB                                ; fully-qualified     # 🎅🏻 Santa Claus: light skin tone
1F385 1F3FC                                ; fully-qualified     # 🎅🏼 Santa Claus: medium-light skin tone
1F385 1F3FD                                ; fully-qualified     # 🎅🏽 Santa Claus: medium skin tone
1F385 1F3FE                                ; fully-qualified     # 🎅🏾 Santa Claus: medium-dark skin tone
1F385 1F3FF                                ; fully-qualified     # 🎅🏿 Santa Claus: dark skin tone
1F936                                      ; fully-qualified     # 🤶 Mrs. Claus
1F936 1F3FB                                ; fully-qualified     # 🤶🏻 Mrs. Claus: light skin tone
1F936 1F3FC                                ; fully-qualified     # 🤶🏼 Mrs. Claus: medium-light skin tone
1F936 1F3FD                                ; fully-qualified     # 🤶🏽 Mrs. Claus: medium skin tone
1F936 1F3FE                                ; fully-qualified     # 🤶🏾 Mrs. Claus: medium-dark skin tone
1F936 1F3FF                                ; fully-qualified     # 🤶🏿 Mrs. Claus: dark skin tone
1F9B8                                      ; fully-qualified     # 🦸 superhero
1F9B8 1F3FB                                ; fully-qualified     # 🦸🏻 superhero: light skin tone
1F9B8 1F3FC                                ; fully-qualified     # 🦸🏼 superhero: medium-light skin tone
1F9B8 1F3FD                                ; fully-qualified     # 🦸🏽 superhero: medium skin tone
1F9B8 1F3FE                                ; fully-qualified     # 🦸🏾 superhero: medium-dark skin tone
1F9B8 1F3FF                                ; fully-qualified     # 🦸🏿 superhero: dark skin tone
1F9B8 200D 2642 FE0F                       ; fully-qualified     # 🦸‍♂️ man superhero
1F9B8 200D 2642                            ; minimally-qualified # 🦸‍♂ man superhero
1F9B8 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🦸🏻‍♂️ man superhero: light skin tone
1F9B8 1F3FB 200D 2642                      ; minimally-qualified # 🦸🏻‍♂ man superhero: light skin tone
1F9B8 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🦸🏼‍♂️ man superhero: medium-light skin tone
1F9B8 1F3FC 200D 2642                      ; minimally-qualified # 🦸🏼‍♂ man superhero: medium-light skin tone
1F9B8 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🦸🏽‍♂️ man superhero: medium skin tone
1F9B8 1F3FD 200D 2642                      ; minimally-qualified # 🦸🏽‍♂ man superhero: medium skin tone
1F9B8 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🦸🏾‍♂️ man superhero: medium-dark skin tone
1F9B8 1F3FE 200D 2642                      ; minimally-qualified # 🦸🏾‍♂ man superhero: medium-dark skin tone
1F9B8 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🦸🏿‍♂️ man superhero: dark skin tone
1F9B8 1F3FF 200D 2642                      ; minimally-qualified # 🦸🏿‍♂ man superhero: dark skin tone
1F9B8 200D 2640 FE0F                       ; fully-qualified     # 🦸‍♀️ woman superhero
1F9B8 200D 2640                            ; minimally-qualified # 🦸‍♀ woman superhero
1F9B8 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🦸🏻‍♀️ woman superhero: light skin tone
1F9B8 1F3FB 200D 2640                      ; minimally-qualified # 🦸🏻‍♀ woman superhero: light skin tone
1F9B8 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🦸🏼‍♀️ woman superhero: medium-light skin tone
1F9B8 1F3FC 200D 2640                      ; minimally-qualified # 🦸🏼‍♀ woman superhero: medium-light skin tone
1F9B8 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🦸🏽‍♀️ woman superhero: medium skin tone
1F9B8 1F3FD 200D 2640                      ; minimally-qualified # 🦸🏽‍♀ woman superhero: medium skin tone
1F9B8 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🦸🏾‍♀️ woman superhero: medium-dark skin tone
1F9B8 1F3FE 200D 2640                      ; minimally-qualified # 🦸🏾‍♀ woman superhero: medium-dark skin tone
1F9B8 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🦸🏿‍♀️ woman superhero: dark skin tone
1F9B8 1F3FF 200D 2640                      ; minimally-qualified # 🦸🏿‍♀ woman superhero: dark skin tone
1F9B9                                      ; fully-qualified     # 🦹 supervillain
1F9B9 1F3FB                                ; fully-qualified     # 🦹🏻 supervillain: light skin tone
1F9B9 1F3FC                                ; fully-qualified     # 🦹🏼 supervillain: medium-light skin tone
1F9B9 1F3FD                                ; fully-qualified     # 🦹🏽 supervillain: medium skin tone
1F9B9 1F3FE                                ; fully-qualified     # 🦹🏾 supervillain: medium-dark skin tone
1F9B9 1F3FF                                ; fully-qualified     # 🦹🏿 supervillain: dark skin tone
1F9B9 200D 2642 FE0F                       ; fully-qualified     # 🦹‍♂️ man supervillain
1F9B9 200D 2642                            ; minimally-qualified # 🦹‍♂ man supervillain
1F9B9 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🦹🏻‍♂️ man supervillain: light skin tone
1F9B9 1F3FB 200D 2642                      ; minimally-qualified # 🦹🏻‍♂ man supervillain: light skin tone
1F9B9 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🦹🏼‍♂️ man supervillain: medium-light skin tone
1F9B9 1F3FC 200D 2642                      ; minimally-qualified # 🦹🏼‍♂ man supervillain: medium-light skin tone
1F9B9 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🦹🏽‍♂️ man supervillain: medium skin tone
1F9B9 1F3FD 200D 2642                      ; minimally-qualified # 🦹🏽‍♂ man supervillain: medium skin tone
1F9B9 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🦹🏾‍♂️ man supervillain: medium-dark skin tone
1F9B9 1F3FE 200D 2642                      ; minimally-qualified # 🦹🏾‍♂ man supervillain: medium-dark skin tone
1F9B9 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🦹🏿‍♂️ man supervillain: dark skin tone
1F9B9 1F3FF 200D 2642                      ; minimally-qualified # 🦹🏿‍♂ man supervillain: dark skin tone
1F9B9 200D 2640 FE0F                       ; fully-qualified     # 🦹‍♀️ woman supervillain
1F9B9 200D 2640                            ; minimally-qualified # 🦹‍♀ woman supervillain
1F9B9 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🦹🏻‍♀️ woman supervillain: light skin tone
1F9B9 1F3FB 200D 2640                      ; minimally-qualified # 🦹🏻‍♀ woman supervillain: light skin tone
1F9B9 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🦹🏼‍♀️ woman supervillain: medium-light skin tone
1F9B9 1F3FC 200D 2640                      ; minimally-qualified # 🦹🏼‍♀ woman supervillain: medium-light skin tone
1F9B9 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🦹🏽‍♀️ woman supervillain: medium skin tone
1F9B9 1F3FD 200D 2640                      ; minimally-qualified # 🦹🏽‍♀ woman supervillain: medium skin tone
1F9B9 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🦹🏾‍♀️ woman supervillain: medium-dark skin tone
1F9B9 1F3FE 200D 2640                      ; minimally-qualified # 🦹🏾‍♀ woman supervillain: medium-dark skin tone
1F9B9 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🦹🏿‍♀️ woman supervillain: dark skin tone
1F9B9 1F3FF 200D 2640                      ; minimally-qualified # 🦹🏿‍♀ woman supervillain: dark skin tone
1F9D9                                      ; fully-qualified     # 🧙 mage
1F9D9 1F3FB                                ; fully-qualified     # 🧙🏻 mage: light skin tone
1F9D9 1F3FC                                ; fully-qualified     # 🧙🏼 mage: medium-light skin tone
1F9D9 1F3FD                                ; fully-qualified     # 🧙🏽 mage: medium skin tone
1F9D9 1F3FE                                ; fully-qualified     # 🧙🏾 mage: medium-dark skin tone
1F9D9 1F3FF                                ; fully-qualified     # 🧙🏿 mage: dark skin tone
1F9D9 200D 2642 FE0F                       ; fully-qualified     # 🧙‍♂️ man mage
1F9D9 200D 2642                            ; minimally-qualified # 🧙‍♂ man mage
1F9D9 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧙🏻‍♂️ man mage: light skin tone
1F9D9 1F3FB 200D 2642                      ; minimally-qualified # 🧙🏻‍♂ man mage: light skin tone
1F9D9 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧙🏼‍♂️ man mage: medium-light skin tone
1F9D9 1F3FC 200D 2642                      ; minimally-qualified # 🧙🏼‍♂ man mage: medium-light skin tone
1F9D9 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧙🏽‍♂️ man mage: medium skin tone
1F9D9 1F3FD 200D 2642                      ; minimally-qualified # 🧙🏽‍♂ man mage: medium skin tone
1F9D9 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧙🏾‍♂️ man mage: medium-dark skin tone
1F9D9 1F3FE 200D 2642                      ; minimally-qualified # 🧙🏾‍♂ man mage: medium-dark skin tone
1F9D9 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧙🏿‍♂️ man mage: dark skin tone
1F9D9 1F3FF 200D 2642                      ; minimally-qualified # 🧙🏿‍♂ man mage: dark skin tone
1F9D9 200D 2640 FE0F                       ; fully-qualified     # 🧙‍♀️ woman mage
1F9D9 200D 2640                            ; minimally-qualified # 🧙‍♀ woman mage
1F9D9 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧙🏻‍♀️ woman mage: light skin tone
1F9D9 1F3FB 200D 2640                      ; minimally-qualified # 🧙🏻‍♀ woman mage: light skin tone
1F9D9 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧙🏼‍♀️ woman mage: medium-light skin tone
1F9D9 1F3FC 200D 2640                      ; minimally-qualified # 🧙🏼‍♀ woman mage: medium-light skin tone
1F9D9 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧙🏽‍♀️ woman mage: medium skin tone
1F9D9 1F3FD 200D 2640                      ; minimally-qualified # 🧙🏽‍♀ woman mage: medium skin tone
1F9D9 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧙🏾‍♀️ woman mage: medium-dark skin tone
1F9D9 1F3FE 200D 2640                      ; minimally-qualified # 🧙🏾‍♀ woman mage: medium-dark skin tone
1F9D9 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧙🏿‍♀️ woman mage: dark skin tone
1F9D9 1F3FF 200D 2640                      ; minimally-qualified # 🧙🏿‍♀ woman mage: dark skin tone
1F9DA                                      ; fully-qualified     # 🧚 fairy
1F9DA 1F3FB                                ; fully-qualified     # 🧚🏻 fairy: light skin tone
1F9DA 1F3FC                                ; fully-qualified     # 🧚🏼 fairy: medium-light skin tone
1F9DA 1F3FD                                ; fully-qualified     # 🧚🏽 fairy: medium skin tone
1F9DA 1F3FE                                ; fully-qualified     # 🧚🏾 fairy: medium-dark skin tone
1F9DA 1F3FF                                ; fully-qualified     # 🧚🏿 fairy: dark skin tone
1F9DA 200D 2642 FE0F                       ; fully-qualified     # 🧚‍♂️ man fairy
1F9DA 200D 2642                            ; minimally-qualified # 🧚‍♂ man fairy
1F9DA 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧚🏻‍♂️ man fairy: light skin tone
1F9DA 1F3FB 200D 2642                      ; minimally-qualified # 🧚🏻‍♂ man fairy: light skin tone
1F9DA 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧚🏼‍♂️ man fairy: medium-light skin tone
1F9DA 1F3FC 200D 2642                      ; minimally-qualified # 🧚🏼‍♂ man fairy: medium-light skin tone
1F9DA 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧚🏽‍♂️ man fairy: medium skin tone
1F9DA 1F3FD 200D 2642                      ; minimally-qualified # 🧚🏽‍♂ man fairy: medium skin tone
1F9DA 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧚🏾‍♂️ man fairy: medium-dark skin tone
1F9DA 1F3FE 200D 2642                      ; minimally-qualified # 🧚🏾‍♂ man fairy: medium-dark skin tone
1F9DA 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧚🏿‍♂️ man fairy: dark skin tone
1F9DA 1F3FF 200D 2642                      ; minimally-qualified # 🧚🏿‍♂ man fairy: dark skin tone
1F9DA 200D 2640 FE0F                       ; fully-qualified     # 🧚‍♀️ woman fairy
1F9DA 200D 2640                            ; minimally-qualified # 🧚‍♀ woman fairy
1F9DA 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧚🏻‍♀️ woman fairy: light skin tone
1F9DA 1F3FB 200D 2640                      ; minimally-qualified # 🧚🏻‍♀ woman fairy: light skin tone
1F9DA 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧚🏼‍♀️ woman fairy: medium-light skin tone
1F9DA 1F3FC 200D 2640                      ; minimally-qualified # 🧚🏼‍♀ woman fairy: medium-light skin tone
1F9DA 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧚🏽‍♀️ woman fairy: medium skin tone
1F9DA 1F3FD 200D 2640                      ; minimally-qualified # 🧚🏽‍♀ woman fairy: medium skin tone
1F9DA 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧚🏾‍♀️ woman fairy: medium-dark skin tone
1F9DA 1F3FE 200D 2640                      ; minimally-qualified # 🧚🏾‍♀ woman fairy: medium-dark skin tone
1F9DA 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧚🏿‍♀️ woman fairy: dark skin tone
1F9DA 1F3FF 200D 2640                      ; minimally-qualified # 🧚🏿‍♀ woman fairy: dark skin tone
1F9DB                                      ; fully-qualified     # 🧛 vampire
1F9DB 1F3FB                                ; fully-qualified     # 🧛🏻 vampire: light skin tone
1F9DB 1F3FC                                ; fully-qualified     # 🧛🏼 vampire: medium-light skin tone
1F9DB 1F3FD                                ; fully-qualified     # 🧛🏽 vampire: medium skin tone
1F9DB 1F3FE                                ; fully-qualified     # 🧛🏾 vampire: medium-dark skin tone
1F9DB 1F3FF                                ; fully-qualified     # 🧛🏿 vampire: dark skin tone
1F9DB 200D 2642 FE0F                       ; fully-qualified     # 🧛‍♂️ man vampire
1F9DB 200D 2642                            ; minimally-qualified # 🧛‍♂ man vampire
1F9DB 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧛🏻‍♂️ man vampire: light skin tone
1F9DB 1F3FB 200D 2642                      ; minimally-qualified # 🧛🏻‍♂ man vampire: light skin tone
1F9DB 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧛🏼‍♂️ man vampire: medium-light skin tone
1F9DB 1F3FC 200D 2642                      ; minimally-qualified # 🧛🏼‍♂ man vampire: medium-light skin tone
1F9DB 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧛🏽‍♂️ man vampire: medium skin tone
1F9DB 1F3FD 200D 2642                      ; minimally-qualified # 🧛🏽‍♂ man vampire: medium skin tone
1F9DB 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧛🏾‍♂️ man vampire: medium-dark skin tone
1F9DB 1F3FE 200D 2642                      ; minimally-qualified # 🧛🏾‍♂ man vampire: medium-dark skin tone
1F9DB 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧛🏿‍♂️ man vampire: dark skin tone
1F9DB 1F3FF 200D 2642                      ; minimally-qualified # 🧛🏿‍♂ man vampire: dark skin tone
1F9DB 200D 2640 FE0F                       ; fully-qualified     # 🧛‍♀️ woman vampire
1F9DB 200D 2640                            ; minimally-qualified # 🧛‍♀ woman vampire
1F9DB 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧛🏻‍♀️ woman vampire: light skin tone
1F9DB 1F3FB 200D 2640                      ; minimally-qualified # 🧛🏻‍♀ woman vampire: light skin tone
1F9DB 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧛🏼‍♀️ woman vampire: medium-light skin tone
1F9DB 1F3FC 200D 2640                      ; minimally-qualified # 🧛🏼‍♀ woman vampire: medium-light skin tone
1F9DB 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧛🏽‍♀️ woman vampire: medium skin tone
1F9DB 1F3FD 200D 2640                      ; minimally-qualified # 🧛🏽‍♀ woman vampire: medium skin tone
1F9DB 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧛🏾‍♀️ woman vampire: medium-dark skin tone
1F9DB 1F3FE 200D 2640                      ; minimally-qualified # 🧛🏾‍♀ woman vampire: medium-dark skin tone
1F9DB 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧛🏿‍♀️ woman vampire: dark skin tone
1F9DB 1F3FF 200D 2640                      ; minimally-qualified # 🧛🏿‍♀ woman vampire: dark skin tone
1F9DC                                      ; fully-qualified     # 🧜 merperson
1F9DC 1F3FB                                ; fully-qualified     # 🧜🏻 merperson: light skin tone
1F9DC 1F3FC                                ; fully-qualified     # 🧜🏼 merperson: medium-light skin tone
1F9DC 1F3FD                                ; fully-qualified     # 🧜🏽 merperson: medium skin tone
1F9DC 1F3FE                                ; fully-qualified     # 🧜🏾 merperson: medium-dark skin tone
1F9DC 1F3FF                                ; fully-qualified     # 🧜🏿 merperson: dark skin tone
1F9DC 200D 2642 FE0F                       ; fully-qualified     # 🧜‍♂️ merman
1F9DC 200D 2642                            ; minimally-qualified # 🧜‍♂ merman
1F9DC 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧜🏻‍♂️ merman: light skin tone
1F9DC 1F3FB 200D 2642                      ; minimally-qualified # 🧜🏻‍♂ merman: light skin tone
1F9DC 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧜🏼‍♂️ merman: medium-light skin tone
1F9DC 1F3FC 200D 2642                      ; minimally-qualified # 🧜🏼‍♂ merman: medium-light skin tone
1F9DC 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧜🏽‍♂️ merman: medium skin tone
1F9DC 1F3FD 200D 2642                      ; minimally-qualified # 🧜🏽‍♂ merman: medium skin tone
1F9DC 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧜🏾‍♂️ merman: medium-dark skin tone
1F9DC 1F3FE 200D 2642                      ; minimally-qualified # 🧜🏾‍♂ merman: medium-dark skin tone
1F9DC 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧜🏿‍♂️ merman: dark skin tone
1F9DC 1F3FF 200D 2642                      ; minimally-qualified # 🧜🏿‍♂ merman: dark skin tone
1F9DC 200D 2640 FE0F                       ; fully-qualified     # 🧜‍♀️ mermaid
1F9DC 200D 2640                            ; minimally-qualified # 🧜‍♀ mermaid
1F9DC 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧜🏻‍♀️ mermaid: light skin tone
1F9DC 1F3FB 200D 2640                      ; minimally-qualified # 🧜🏻‍♀ mermaid: light skin tone
1F9DC 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧜🏼‍♀️ mermaid: medium-light skin tone
1F9DC 1F3FC 200D 2640                      ; minimally-qualified # 🧜🏼‍♀ mermaid: medium-light skin tone
1F9DC 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧜🏽‍♀️ mermaid: medium skin tone
1F9DC 1F3FD 200D 2640                      ; minimally-qualified # 🧜🏽‍♀ mermaid: medium skin tone
1F9DC 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧜🏾‍♀️ mermaid: medium-dark skin tone
1F9DC 1F3FE 200D 2640                      ; minimally-qualified # 🧜🏾‍♀ mermaid: medium-dark skin tone
1F9DC 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧜🏿‍♀️ mermaid: dark skin tone
1F9DC 1F3FF 200D 2640                      ; minimally-qualified # 🧜🏿‍♀ mermaid: dark skin tone
1F9DD                                      ; fully-qualified     # 🧝 elf
1F9DD 1F3FB                                ; fully-qualified     # 🧝🏻 elf: light skin tone
1F9DD 1F3FC                                ; fully-qualified     # 🧝🏼 elf: medium-light skin tone
1F9DD 1F3FD                                ; fully-qualified     # 🧝🏽 elf: medium skin tone
1F9DD 1F3FE                                ; fully-qualified     # 🧝🏾 elf: medium-dark skin tone
1F9DD 1F3FF                                ; fully-qualified     # 🧝🏿 elf: dark skin tone
1F9DD 200D 2642 FE0F                       ; fully-qualified     # 🧝‍♂️ man elf
1F9DD 200D 2642                            ; minimally-qualified # 🧝‍♂ man elf
1F9DD 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧝🏻‍♂️ man elf: light skin tone
1F9DD 1F3FB 200D 2642                      ; minimally-qualified # 🧝🏻‍♂ man elf: light skin tone
1F9DD 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧝🏼‍♂️ man elf: medium-light skin tone
1F9DD 1F3FC 200D 2642                      ; minimally-qualified # 🧝🏼‍♂ man elf: medium-light skin tone
1F9DD 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧝🏽‍♂️ man elf: medium skin tone
1F9DD 1F3FD 200D 2642                      ; minimally-qualified # 🧝🏽‍♂ man elf: medium skin tone
1F9DD 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧝🏾‍♂️ man elf: medium-dark skin tone
1F9DD 1F3FE 200D 2642                      ; minimally-qualified # 🧝🏾‍♂ man elf: medium-dark skin tone
1F9DD 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧝🏿‍♂️ man elf: dark skin tone
1F9DD 1F3FF 200D 2642                      ; minimally-qualified # 🧝🏿‍♂ man elf: dark skin tone
1F9DD 200D 2640 FE0F                       ; fully-qualified     # 🧝‍♀️ woman elf
1F9DD 200D 2640                            ; minimally-qualified # 🧝‍♀ woman elf
1F9DD 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧝🏻‍♀️ woman elf: light skin tone
1F9DD 1F3FB 200D 2640                      ; minimally-qualified # 🧝🏻‍♀ woman elf: light skin tone
1F9DD 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧝🏼‍♀️ woman elf: medium-light skin tone
1F9DD 1F3FC 200D 2640                      ; minimally-qualified # 🧝🏼‍♀ woman elf: medium-light skin tone
1F9DD 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧝🏽‍♀️ woman elf: medium skin tone
1F9DD 1F3FD 200D 2640                      ; minimally-qualified # 🧝🏽‍♀ woman elf: medium skin tone
1F9DD 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧝🏾‍♀️ woman elf: medium-dark skin tone
1F9DD 1F3FE 200D 2640                      ; minimally-qualified # 🧝🏾‍♀ woman elf: medium-dark skin tone
1F9DD 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧝🏿‍♀️ woman elf: dark skin tone
1F9DD 1F3FF 200D 2640                      ; minimally-qualified # 🧝🏿‍♀ woman elf: dark skin tone
1F9DE                                      ; fully-qualified     # 🧞 genie
1F9DE 200D 2642 FE0F                       ; fully-qualified     # 🧞‍♂️ man genie
1F9DE 200D 2642                            ; minimally-qualified # 🧞‍♂ man genie
1F9DE 200D 2640 FE0F                       ; fully-qualified     # 🧞‍♀️ woman genie
1F9DE 200D 2640                            ; minimally-qualified # 🧞‍♀ woman genie
1F9DF                                      ; fully-qualified     # 🧟 zombie
1F9DF 200D 2642 FE0F                       ; fully-qualified     # 🧟‍♂️ man zombie
1F9DF 200D 2642                            ; minimally-qualified # 🧟‍♂ man zombie
1F9DF 200D 2640 FE0F                       ; fully-qualified     # 🧟‍♀️ woman zombie
1F9DF 200D 2640                            ; minimally-qualified # 🧟‍♀ woman zombie

# subgroup: person-activity
1F486                                      ; fully-qualified     # 💆 person getting massage
1F486 1F3FB                                ; fully-qualified     # 💆🏻 person getting massage: light skin tone
1F486 1F3FC                                ; fully-qualified     # 💆🏼 person getting massage: medium-light skin tone
1F486 1F3FD                                ; fully-qualified     # 💆🏽 person getting massage: medium skin tone
1F486 1F3FE                                ; fully-qualified     # 💆🏾 person getting massage: medium-dark skin tone
1F486 1F3FF                                ; fully-qualified     # 💆🏿 person getting massage: dark skin tone
1F486 200D 2642 FE0F                       ; fully-qualified     # 💆‍♂️ man getting massage
1F486 200D 2642                            ; minimally-qualified # 💆‍♂ man getting massage
1F486 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 💆🏻‍♂️ man getting massage: light skin tone
1F486 1F3FB 200D 2642                      ; minimally-qualified # 💆🏻‍♂ man getting massage: light skin tone
1F486 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 💆🏼‍♂️ man getting massage: medium-light skin tone
1F486 1F3FC 200D 2642                      ; minimally-qualified # 💆🏼‍♂ man getting massage: medium-light skin tone
1F486 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 💆🏽‍♂️ man getting massage: medium skin tone
1F486 1F3FD 200D 2642                      ; minimally-qualified # 💆🏽‍♂ man getting massage: medium skin tone
1F486 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 💆🏾‍♂️ man getting massage: medium-dark skin tone
1F486 1F3FE 200D 2642                      ; minimally-qualified # 💆🏾‍♂ man getting massage: medium-dark skin tone
1F486 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 💆🏿‍♂️ man getting massage: dark skin tone
1F486 1F3FF 200D 2642                      ; minimally-qualified # 💆🏿‍♂ man getting massage: dark skin tone
1F486 200D 2640 FE0F                       ; fully-qualified     # 💆‍♀️ woman getting massage
1F486 200D 2640                            ; minimally-qualified # 💆‍♀ woman getting massage
1F486 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 💆🏻‍♀️ woman getting massage: light skin tone
1F486 1F3FB 200D 2640                      ; minimally-qualified # 💆🏻‍♀ woman getting massage: light skin tone
1F486 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 💆🏼‍♀️ woman getting massage: medium-light skin tone
1F486 1F3FC 200D 2640                      ; minimally-qualified # 💆🏼‍♀ woman getting massage: medium-light skin tone
1F486 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 💆🏽‍♀️ woman getting massage: medium skin tone
1F486 1F3FD 200D 2640                      ; minimally-qualified # 💆🏽‍♀ woman getting massage: medium skin tone
1F486 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 💆🏾‍♀️ woman getting massage: medium-dark skin tone
1F486 1F3FE 200D 2640                      ; minimally-qualified # 💆🏾‍♀ woman getting massage: medium-dark skin tone
1F486 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 💆🏿‍♀️ woman getting massage: dark skin tone
1F486 1F3FF 200D 2640                      ; minimally-qualified # 💆🏿‍♀ woman getting massage: dark skin tone
1F487                                      ; fully-qualified     # 💇 person getting haircut
1F487 1F3FB                                ; fully-qualified     # 💇🏻 person getting haircut: light skin tone
1F487 1F3FC                                ; fully-qualified     # 💇🏼 person getting haircut: medium-light skin tone
1F487 1F3FD                                ; fully-qualified     # 💇🏽 person getting haircut: medium skin tone
1F487 1F3FE                                ; fully-qualified     # 💇🏾 person getting haircut: medium-dark skin tone
1F487 1F3FF                                ; fully-qualified     # 💇🏿 person getting haircut: dark skin tone
1F487 200D 2642 FE0F                       ; fully-qualified     # 💇‍♂️ man getting haircut
1F487 200D 2642                            ; minimally-qualified # 💇‍♂ man getting haircut
1F487 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 💇🏻‍♂️ man getting haircut: light skin tone
1F487 1F3FB 200D 2642                      ; minimally-qualified # 💇🏻‍♂ man getting haircut: light skin tone
1F487 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 💇🏼‍♂️ man getting haircut: medium-light skin tone
1F487 1F3FC 200D 2642                      ; minimally-qualified # 💇🏼‍♂ man getting haircut: medium-light skin tone
1F487 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 💇🏽‍♂️ man getting haircut: medium skin tone
1F487 1F3FD 200D 2642                      ; minimally-qualified # 💇🏽‍♂ man getting haircut: medium skin tone
1F487 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 💇🏾‍♂️ man getting haircut: medium-dark skin tone
1F487 1F3FE 200D 2642                      ; minimally-qualified # 💇🏾‍♂ man getting haircut: medium-dark skin tone
1F487 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 💇🏿‍♂️ man getting haircut: dark skin tone
1F487 1F3FF 200D 2642                      ; minimally-qualified # 💇🏿‍♂ man getting haircut: dark skin tone
1F487 200D 2640 FE0F                       ; fully-qualified     # 💇‍♀️ woman getting haircut
1F487 200D 2640                            ; minimally-qualified # 💇‍♀ woman getting haircut
1F487 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 💇🏻‍♀️ woman getting haircut: light skin tone
1F487 1F3FB 200D 2640                      ; minimally-qualified # 💇🏻‍♀ woman getting haircut: light skin tone
1F487 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 💇🏼‍♀️ woman getting haircut: medium-light skin tone
1F487 1F3FC 200D 2640                      ; minimally-qualified # 💇🏼‍♀ woman getting haircut: medium-light skin tone
1F487 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 💇🏽‍♀️ woman getting haircut: medium skin tone
1F487 1F3FD 200D 2640                      ; minimally-qualified # 💇🏽‍♀ woman getting haircut: medium skin tone
1F487 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 💇🏾‍♀️ woman getting haircut: medium-dark skin tone
1F487 1F3FE 200D 2640                      ; minimally-qualified # 💇🏾‍♀ woman getting haircut: medium-dark skin tone
1F487 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 💇🏿‍♀️ woman getting haircut: dark skin tone
1F487 1F3FF 200D 2640                      ; minimally-qualified # 💇🏿‍♀ woman getting haircut: dark skin tone
1F6B6                                      ; fully-qualified     # 🚶 person walking
1F6B6 1F3FB                                ; fully-qualified     # 🚶🏻 person walking: light skin tone
1F6B6 1F3FC                                ; fully-qualified     # 🚶🏼 person walking: medium-light skin tone
1F6B6 1F3FD                                ; fully-qualified     # 🚶🏽 person walking: medium skin tone
1F6B6 1F3FE                                ; fully-qualified     # 🚶🏾 person walking: medium-dark skin tone
1F6B6 1F3FF                                ; fully-qualified     # 🚶🏿 person walking: dark skin tone
1F6B6 200D 2642 FE0F                       ; fully-qualified     # 🚶‍♂️ man walking
1F6B6 200D 2642                            ; minimally-qualified # 🚶‍♂ man walking
1F6B6 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🚶🏻‍♂️ man walking: light skin tone
1F6B6 1F3FB 200D 2642                      ; minimally-qualified # 🚶🏻‍♂ man walking: light skin tone
1F6B6 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🚶🏼‍♂️ man walking: medium-light skin tone
1F6B6 1F3FC 200D 2642                      ; minimally-qualified # 🚶🏼‍♂ man walking: medium-light skin tone
1F6B6 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🚶🏽‍♂️ man walking: medium skin tone
1F6B6 1F3FD 200D 2642                      ; minimally-qualified # 🚶🏽‍♂ man walking: medium skin tone
1F6B6 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🚶🏾‍♂️ man walking: medium-dark skin tone
1F6B6 1F3FE 200D 2642                      ; minimally-qualified # 🚶🏾‍♂ man walking: medium-dark skin tone
1F6B6 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🚶🏿‍♂️ man walking: dark skin tone
1F6B6 1F3FF 200D 2642                      ; minimally-qualified # 🚶🏿‍♂ man walking: dark skin tone
1F6B6 200D 2640 FE0F                       ; fully-qualified     # 🚶‍♀️ woman walking
1F6B6 200D 2640                            ; minimally-qualified # 🚶‍♀ woman walking
1F6B6 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🚶🏻‍♀️ woman walking: light skin tone
1F6B6 1F3FB 200D 2640                      ; minimally-qualified # 🚶🏻‍♀ woman walking: light skin tone
1F6B6 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🚶🏼‍♀️ woman walking: medium-light skin tone
1F6B6 1F3FC 200D 2640                      ; minimally-qualified # 🚶🏼‍♀ woman walking: medium-light skin tone
1F6B6 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🚶🏽‍♀️ woman walking: medium skin tone
1F6B6 1F3FD 200D 2640                      ; minimally-qualified # 🚶🏽‍♀ woman walking: medium skin tone
1F6B6 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🚶🏾‍♀️ woman walking: medium-dark skin tone
1F6B6 1F3FE 200D 2640                      ; minimally-qualified # 🚶🏾‍♀ woman walking: medium-dark skin tone
1F6B6 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🚶🏿‍♀️ woman walking: dark skin tone
1F6B6 1F3FF 200D 2640                      ; minimally-qualified # 🚶🏿‍♀ woman walking: dark skin tone
1F9CD                                      ; fully-qualified     # 🧍 person standing
1F9CD 1F3FB                                ; fully-qualified     # 🧍🏻 person standing: light skin tone
1F9CD 1F3FC                                ; fully-qualified     # 🧍🏼 person standing: medium-light skin tone
1F9CD 1F3FD                                ; fully-qualified     # 🧍🏽 person standing: medium skin tone
1F9CD 1F3FE                                ; fully-qualified     # 🧍🏾 person standing: medium-dark skin tone
1F9CD 1F3FF                                ; fully-qualified     # 🧍🏿 person standing: dark skin tone
1F9CD 200D 2642 FE0F                       ; fully-qualified     # 🧍‍♂️ man standing
1F9CD 200D 2642                            ; minimally-qualified # 🧍‍♂ man standing
1F9CD 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧍🏻‍♂️ man standing: light skin tone
1F9CD 1F3FB 200D 2642                      ; minimally-qualified # 🧍🏻‍♂ man standing: light skin tone
1F9CD 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧍🏼‍♂️ man standing: medium-light skin tone
1F9CD 1F3FC 200D 2642                      ; minimally-qualified # 🧍🏼‍♂ man standing: medium-light skin tone
1F9CD 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧍🏽‍♂️ man standing: medium skin tone
1F9CD 1F3FD 200D 2642                      ; minimally-qualified # 🧍🏽‍♂ man standing: medium skin tone
1F9CD 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧍🏾‍♂️ man standing: medium-dark skin tone
1F9CD 1F3FE 200D 2642                      ; minimally-qualified # 🧍🏾‍♂ man standing: medium-dark skin tone
1F9CD 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧍🏿‍♂️ man standing: dark skin tone
1F9CD 1F3FF 200D 2642                      ; minimally-qualified # 🧍🏿‍♂ man standing: dark skin tone
1F9CD 200D 2640 FE0F                       ; fully-qualified     # 🧍‍♀️ woman standing
1F9CD 200D 2640                            ; minimally-qualified # 🧍‍♀ woman standing
1F9CD 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧍🏻‍♀️ woman standing: light skin tone
1F9CD 1F3FB 200D 2640                      ; minimally-qualified # 🧍🏻‍♀ woman standing: light skin tone
1F9CD 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧍🏼‍♀️ woman standing: medium-light skin tone
1F9CD 1F3FC 200D 2640                      ; minimally-qualified # 🧍🏼‍♀ woman standing: medium-light skin tone
1F9CD 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧍🏽‍♀️ woman standing: medium skin tone
1F9CD 1F3FD 200D 2640                      ; minimally-qualified # 🧍🏽‍♀ woman standing: medium skin tone
1F9CD 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧍🏾‍♀️ woman standing: medium-dark skin tone
1F9CD 1F3FE 200D 2640                      ; minimally-qualified # 🧍🏾‍♀ woman standing: medium-dark skin tone
1F9CD 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧍🏿‍♀️ woman standing: dark skin tone
1F9CD 1F3FF 200D 2640                      ; minimally-qualified # 🧍🏿‍♀ woman standing: dark skin tone
1F9CE                                      ; fully-qualified     # 🧎 person kneeling
1F9CE 1F3FB                                ; fully-qualified     # 🧎🏻 person kneeling: light skin tone
1F9CE 1F3FC                                ; fully-qualified     # 🧎🏼 person kneeling: medium-light skin tone
1F9CE 1F3FD                                ; fully-qualified     # 🧎🏽 person kneeling: medium skin tone
1F9CE 1F3FE                                ; fully-qualified     # 🧎🏾 person kneeling: medium-dark skin tone
1F9CE 1F3FF                                ; fully-qualified     # 🧎🏿 person kneeling: dark skin tone
1F9CE 200D 2642 FE0F                       ; fully-qualified     # 🧎‍♂️ man kneeling
1F9CE 200D 2642                            ; minimally-qualified # 🧎‍♂ man kneeling
1F9CE 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧎🏻‍♂️ man kneeling: light skin tone
1F9CE 1F3FB 200D 2642                      ; minimally-qualified # 🧎🏻‍♂ man kneeling: light skin tone
1F9CE 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧎🏼‍♂️ man kneeling: medium-light skin tone
1F9CE 1F3FC 200D 2642                      ; minimally-qualified # 🧎🏼‍♂ man kneeling: medium-light skin tone
1F9CE 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧎🏽‍♂️ man kneeling: medium skin tone
1F9CE 1F3FD 200D 2642                      ; minimally-qualified # 🧎🏽‍♂ man kneeling: medium skin tone
1F9CE 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧎🏾‍♂️ man kneeling: medium-dark skin tone
1F9CE 1F3FE 200D 2642                      ; minimally-qualified # 🧎🏾‍♂ man kneeling: medium-dark skin tone
1F9CE 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧎🏿‍♂️ man kneeling: dark skin tone
1F9CE 1F3FF 200D 2642                      ; minimally-qualified # 🧎🏿‍♂ man kneeling: dark skin tone
1F9CE 200D 2640 FE0F                       ; fully-qualified     # 🧎‍♀️ woman kneeling
1F9CE 200D 2640                            ; minimally-qualified # 🧎‍♀ woman kneeling
1F9CE 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧎🏻‍♀️ woman kneeling: light skin tone
1F9CE 1F3FB 200D 2640                      ; minimally-qualified # 🧎🏻‍♀ woman kneeling: light skin tone
1F9CE 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧎🏼‍♀️ woman kneeling: medium-light skin tone
1F9CE 1F3FC 200D 2640                      ; minimally-qualified # 🧎🏼‍♀ woman kneeling: medium-light skin tone
1F9CE 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧎🏽‍♀️ woman kneeling: medium skin tone
1F9CE 1F3FD 200D 2640                      ; minimally-qualified # 🧎🏽‍♀ woman kneeling: medium skin tone
1F9CE 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧎🏾‍♀️ woman kneeling: medium-dark skin tone
1F9CE 1F3FE 200D 2640                      ; minimally-qualified # 🧎🏾‍♀ woman kneeling: medium-dark skin tone
1F9CE 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧎🏿‍♀️ woman kneeling: dark skin tone
1F9CE 1F3FF 200D 2640                      ; minimally-qualified # 🧎🏿‍♀ woman kneeling: dark skin tone
1F468 200D 1F9AF                           ; fully-qualified     # 👨‍🦯 man with probing cane
1F468 1F3FB 200D 1F9AF                     ; fully-qualified     # 👨🏻‍🦯 man with probing cane: light skin tone
1F468 1F3FC 200D 1F9AF                     ; fully-qualified     # 👨🏼‍🦯 man with probing cane: medium-light skin tone
1F468 1F3FD 200D 1F9AF                     ; fully-qualified     # 👨🏽‍🦯 man with probing cane: medium skin tone
1F468 1F3FE 200D 1F9AF                     ; fully-qualified     # 👨🏾‍🦯 man with probing cane: medium-dark skin tone
1F468 1F3FF 200D 1F9AF                     ; fully-qualified     # 👨🏿‍🦯 man with probing cane: dark skin tone
1F469 200D 1F9AF                           ; fully-qualified     # 👩‍🦯 woman with probing cane
1F469 1F3FB 200D 1F9AF                     ; fully-qualified     # 👩🏻‍🦯 woman with probing cane: light skin tone
1F469 1F3FC 200D 1F9AF                     ; fully-qualified     # 👩🏼‍🦯 woman with probing cane: medium-light skin tone
1F469 1F3FD 200D 1F9AF                     ; fully-qualified     # 👩🏽‍🦯 woman with probing cane: medium skin tone
1F469 1F3FE 200D 1F9AF                     ; fully-qualified     # 👩🏾‍🦯 woman with probing cane: medium-dark skin tone
1F469 1F3FF 200D 1F9AF                     ; fully-qualified     # 👩🏿‍🦯 woman with probing cane: dark skin tone
1F468 200D 1F9BC                           ; fully-qualified     # 👨‍🦼 man in motorized wheelchair
1F468 1F3FB 200D 1F9BC                     ; fully-qualified     # 👨🏻‍🦼 man in motorized wheelchair: light skin tone
1F468 1F3FC 200D 1F9BC                     ; fully-qualified     # 👨🏼‍🦼 man in motorized wheelchair: medium-light skin tone
1F468 1F3FD 200D 1F9BC                     ; fully-qualified     # 👨🏽‍🦼 man in motorized wheelchair: medium skin tone
1F468 1F3FE 200D 1F9BC                     ; fully-qualified     # 👨🏾‍🦼 man in motorized wheelchair: medium-dark skin tone
1F468 1F3FF 200D 1F9BC                     ; fully-qualified     # 👨🏿‍🦼 man in motorized wheelchair: dark skin tone
1F469 200D 1F9BC                           ; fully-qualified     # 👩‍🦼 woman in motorized wheelchair
1F469 1F3FB 200D 1F9BC                     ; fully-qualified     # 👩🏻‍🦼 woman in motorized wheelchair: light skin tone
1F469 1F3FC 200D 1F9BC                     ; fully-qualified     # 👩🏼‍🦼 woman in motorized wheelchair: medium-light skin tone
1F469 1F3FD 200D 1F9BC                     ; fully-qualified     # 👩🏽‍🦼 woman in motorized wheelchair: medium skin tone
1F469 1F3FE 200D 1F9BC                     ; fully-qualified     # 👩🏾‍🦼 woman in motorized wheelchair: medium-dark skin tone
1F469 1F3FF 200D 1F9BC                     ; fully-qualified     # 👩🏿‍🦼 woman in motorized wheelchair: dark skin tone
1F468 200D 1F9BD                           ; fully-qualified     # 👨‍🦽 man in manual wheelchair
1F468 1F3FB 200D 1F9BD                     ; fully-qualified     # 👨🏻‍🦽 man in manual wheelchair: light skin tone
1F468 1F3FC 200D 1F9BD                     ; fully-qualified     # 👨🏼‍🦽 man in manual wheelchair: medium-light skin tone
1F468 1F3FD 200D 1F9BD                     ; fully-qualified     # 👨🏽‍🦽 man in manual wheelchair: medium skin tone
1F468 1F3FE 200D 1F9BD                     ; fully-qualified     # 👨🏾‍🦽 man in manual wheelchair: medium-dark skin tone
1F468 1F3FF 200D 1F9BD                     ; fully-qualified     # 👨🏿‍🦽 man in manual wheelchair: dark skin tone
1F469 200D 1F9BD                           ; fully-qualified     # 👩‍🦽 woman in manual wheelchair
1F469 1F3FB 200D 1F9BD                     ; fully-qualified     # 👩🏻‍🦽 woman in manual wheelchair: light skin tone
1F469 1F3FC 200D 1F9BD                     ; fully-qualified     # 👩🏼‍🦽 woman in manual wheelchair: medium-light skin tone
1F469 1F3FD 200D 1F9BD                     ; fully-qualified     # 👩🏽‍🦽 woman in manual wheelchair: medium skin tone
1F469 1F3FE 200D 1F9BD                     ; fully-qualified     # 👩🏾‍🦽 woman in manual wheelchair: medium-dark skin tone
1F469 1F3FF 200D 1F9BD                     ; fully-qualified     # 👩🏿‍🦽 woman in manual wheelchair: dark skin tone
1F3C3                                      ; fully-qualified     # 🏃 person running
1F3C3 1F3FB                                ; fully-qualified     # 🏃🏻 person running: light skin tone
1F3C3 1F3FC                                ; fully-qualified     # 🏃🏼 person running: medium-light skin tone
1F3C3 1F3FD                                ; fully-qualified     # 🏃🏽 person running: medium skin tone
1F3C3 1F3FE                                ; fully-qualified     # 🏃🏾 person running: medium-dark skin tone
1F3C3 1F3FF                                ; fully-qualified     # 🏃🏿 person running: dark skin tone
1F3C3 200D 2642 FE0F                       ; fully-qualified     # 🏃‍♂️ man running
1F3C3 200D 2642                            ; minimally-qualified # 🏃‍♂ man running
1F3C3 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🏃🏻‍♂️ man running: light skin tone
1F3C3 1F3FB 200D 2642                      ; minimally-qualified # 🏃🏻‍♂ man running: light skin tone
1F3C3 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🏃🏼‍♂️ man running: medium-light skin tone
1F3C3 1F3FC 200D 2642                      ; minimally-qualified # 🏃🏼‍♂ man running: medium-light skin tone
1F3C3 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🏃🏽‍♂️ man running: medium skin tone
1F3C3 1F3FD 200D 2642                      ; minimally-qualified # 🏃🏽‍♂ man running: medium skin tone
1F3C3 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🏃🏾‍♂️ man running: medium-dark skin tone
1F3C3 1F3FE 200D 2642                      ; minimally-qualified # 🏃🏾‍♂ man running: medium-dark skin tone
1F3C3 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🏃🏿‍♂️ man running: dark skin tone
1F3C3 1F3FF 200D 2642                      ; minimally-qualified # 🏃🏿‍♂ man running: dark skin tone
1F3C3 200D 2640 FE0F                       ; fully-qualified     # 🏃‍♀️ woman running
1F3C3 200D 2640                            ; minimally-qualified # 🏃‍♀ woman running
1F3C3 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🏃🏻‍♀️ woman running: light skin tone
1F3C3 1F3FB 200D 2640                      ; minimally-qualified # 🏃🏻‍♀ woman running: light skin tone
1F3C3 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🏃🏼‍♀️ woman running: medium-light skin tone
1F3C3 1F3FC 200D 2640                      ; minimally-qualified # 🏃🏼‍♀ woman running: medium-light skin tone
1F3C3 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🏃🏽‍♀️ woman running: medium skin tone
1F3C3 1F3FD 200D 2640                      ; minimally-qualified # 🏃🏽‍♀ woman running: medium skin tone
1F3C3 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🏃🏾‍♀️ woman running: medium-dark skin tone
1F3C3 1F3FE 200D 2640                      ; minimally-qualified # 🏃🏾‍♀ woman running: medium-dark skin tone
1F3C3 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🏃🏿‍♀️ woman running: dark skin tone
1F3C3 1F3FF 200D 2640                      ; minimally-qualified # 🏃🏿‍♀ woman running: dark skin tone
1F483                                      ; fully-qualified     # 💃 woman dancing
1F483 1F3FB                                ; fully-qualified     # 💃🏻 woman dancing: light skin tone
1F483 1F3FC                                ; fully-qualified     # 💃🏼 woman dancing: medium-light skin tone
1F483 1F3FD                                ; fully-qualified     # 💃🏽 woman dancing: medium skin tone
1F483 1F3FE                                ; fully-qualified     # 💃🏾 woman dancing: medium-dark skin tone
1F483 1F3FF                                ; fully-qualified     # 💃🏿 woman dancing: dark skin tone
1F57A                                      ; fully-qualified     # 🕺 man dancing
1F57A 1F3FB                                ; fully-qualified     # 🕺🏻 man dancing: light skin tone
1F57A 1F3FC                                ; fully-qualified     # 🕺🏼 man dancing: medium-light skin tone
1F57A 1F3FD                                ; fully-qualified     # 🕺🏽 man dancing: medium skin tone
1F57A 1F3FE                                ; fully-qualified     # 🕺🏾 man dancing: medium-dark skin tone
1F57A 1F3FF                                ; fully-qualified     # 🕺🏿 man dancing: dark skin tone
1F574 FE0F                                 ; fully-qualified     # 🕴️ man in suit levitating
1F574                                      ; unqualified         # 🕴 man in suit levitating
1F574 1F3FB                                ; fully-qualified     # 🕴🏻 man in suit levitating: light skin tone
1F574 1F3FC                                ; fully-qualified     # 🕴🏼 man in suit levitating: medium-light skin tone
1F574 1F3FD                                ; fully-qualified     # 🕴🏽 man in suit levitating: medium skin tone
1F574 1F3FE                                ; fully-qualified     # 🕴🏾 man in suit levitating: medium-dark skin tone
1F574 1F3FF                                ; fully-qualified     # 🕴🏿 man in suit levitating: dark skin tone
1F46F                                      ; fully-qualified     # 👯 people with bunny ears
1F46F 200D 2642 FE0F                       ; fully-qualified     # 👯‍♂️ men with bunny ears
1F46F 200D 2642                            ; minimally-qualified # 👯‍♂ men with bunny ears
1F46F 200D 2640 FE0F                       ; fully-qualified     # 👯‍♀️ women with bunny ears
1F46F 200D 2640                            ; minimally-qualified # 👯‍♀ women with bunny ears
1F9D6                                      ; fully-qualified     # 🧖 person in steamy room
1F9D6 1F3FB                                ; fully-qualified     # 🧖🏻 person in steamy room: light skin tone
1F9D6 1F3FC                                ; fully-qualified     # 🧖🏼 person in steamy room: medium-light skin tone
1F9D6 1F3FD                                ; fully-qualified     # 🧖🏽 person in steamy room: medium skin tone
1F9D6 1F3FE                                ; fully-qualified     # 🧖🏾 person in steamy room: medium-dark skin tone
1F9D6 1F3FF                                ; fully-qualified     # 🧖🏿 person in steamy room: dark skin tone
1F9D6 200D 2642 FE0F                       ; fully-qualified     # 🧖‍♂️ man in steamy room
1F9D6 200D 2642                            ; minimally-qualified # 🧖‍♂ man in steamy room
1F9D6 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧖🏻‍♂️ man in steamy room: light skin tone
1F9D6 1F3FB 200D 2642                      ; minimally-qualified # 🧖🏻‍♂ man in steamy room: light skin tone
1F9D6 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧖🏼‍♂️ man in steamy room: medium-light skin tone
1F9D6 1F3FC 200D 2642                      ; minimally-qualified # 🧖🏼‍♂ man in steamy room: medium-light skin tone
1F9D6 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧖🏽‍♂️ man in steamy room: medium skin tone
1F9D6 1F3FD 200D 2642                      ; minimally-qualified # 🧖🏽‍♂ man in steamy room: medium skin tone
1F9D6 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧖🏾‍♂️ man in steamy room: medium-dark skin tone
1F9D6 1F3FE 200D 2642                      ; minimally-qualified # 🧖🏾‍♂ man in steamy room: medium-dark skin tone
1F9D6 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧖🏿‍♂️ man in steamy room: dark skin tone
1F9D6 1F3FF 200D 2642                      ; minimally-qualified # 🧖🏿‍♂ man in steamy room: dark skin tone
1F9D6 200D 2640 FE0F                       ; fully-qualified     # 🧖‍♀️ woman in steamy room
1F9D6 200D 2640                            ; minimally-qualified # 🧖‍♀ woman in steamy room
1F9D6 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧖🏻‍♀️ woman in steamy room: light skin tone
1F9D6 1F3FB 200D 2640                      ; minimally-qualified # 🧖🏻‍♀ woman in steamy room: light skin tone
1F9D6 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧖🏼‍♀️ woman in steamy room: medium-light skin tone
1F9D6 1F3FC 200D 2640                      ; minimally-qualified # 🧖🏼‍♀ woman in steamy room: medium-light skin tone
1F9D6 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧖🏽‍♀️ woman in steamy room: medium skin tone
1F9D6 1F3FD 200D 2640                      ; minimally-qualified # 🧖🏽‍♀ woman in steamy room: medium skin tone
1F9D6 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧖🏾‍♀️ woman in steamy room: medium-dark skin tone
1F9D6 1F3FE 200D 2640                      ; minimally-qualified # 🧖🏾‍♀ woman in steamy room: medium-dark skin tone
1F9D6 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧖🏿‍♀️ woman in steamy room: dark skin tone
1F9D6 1F3FF 200D 2640                      ; minimally-qualified # 🧖🏿‍♀ woman in steamy room: dark skin tone
1F9D7                                      ; fully-qualified     # 🧗 person climbing
1F9D7 1F3FB                                ; fully-qualified     # 🧗🏻 person climbing: light skin tone
1F9D7 1F3FC                                ; fully-qualified     # 🧗🏼 person climbing: medium-light skin tone
1F9D7 1F3FD                                ; fully-qualified     # 🧗🏽 person climbing: medium skin tone
1F9D7 1F3FE                                ; fully-qualified     # 🧗🏾 person climbing: medium-dark skin tone
1F9D7 1F3FF                                ; fully-qualified     # 🧗🏿 person climbing: dark skin tone
1F9D7 200D 2642 FE0F                       ; fully-qualified     # 🧗‍♂️ man climbing
1F9D7 200D 2642                            ; minimally-qualified # 🧗‍♂ man climbing
1F9D7 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧗🏻‍♂️ man climbing: light skin tone
1F9D7 1F3FB 200D 2642                      ; minimally-qualified # 🧗🏻‍♂ man climbing: light skin tone
1F9D7 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧗🏼‍♂️ man climbing: medium-light skin tone
1F9D7 1F3FC 200D 2642                      ; minimally-qualified # 🧗🏼‍♂ man climbing: medium-light skin tone
1F9D7 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧗🏽‍♂️ man climbing: medium skin tone
1F9D7 1F3FD 200D 2642                      ; minimally-qualified # 🧗🏽‍♂ man climbing: medium skin tone
1F9D7 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧗🏾‍♂️ man climbing: medium-dark skin tone
1F9D7 1F3FE 200D 2642                      ; minimally-qualified # 🧗🏾‍♂ man climbing: medium-dark skin tone
1F9D7 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧗🏿‍♂️ man climbing: dark skin tone
1F9D7 1F3FF 200D 2642                      ; minimally-qualified # 🧗🏿‍♂ man climbing: dark skin tone
1F9D7 200D 2640 FE0F                       ; fully-qualified     # 🧗‍♀️ woman climbing
1F9D7 200D 2640                            ; minimally-qualified # 🧗‍♀ woman climbing
1F9D7 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧗🏻‍♀️ woman climbing: light skin tone
1F9D7 1F3FB 200D 2640                      ; minimally-qualified # 🧗🏻‍♀ woman climbing: light skin tone
1F9D7 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧗🏼‍♀️ woman climbing: medium-light skin tone
1F9D7 1F3FC 200D 2640                      ; minimally-qualified # 🧗🏼‍♀ woman climbing: medium-light skin tone
1F9D7 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧗🏽‍♀️ woman climbing: medium skin tone
1F9D7 1F3FD 200D 2640                      ; minimally-qualified # 🧗🏽‍♀ woman climbing: medium skin tone
1F9D7 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧗🏾‍♀️ woman climbing: medium-dark skin tone
1F9D7 1F3FE 200D 2640                      ; minimally-qualified # 🧗🏾‍♀ woman climbing: medium-dark skin tone
1F9D7 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧗🏿‍♀️ woman climbing: dark skin tone
1F9D7 1F3FF 200D 2640                      ; minimally-qualified # 🧗🏿‍♀ woman climbing: dark skin tone

# subgroup: person-sport
1F93A                                      ; fully-qualified     # 🤺 person fencing
1F3C7                                      ; fully-qualified     # 🏇 horse racing
1F3C7 1F3FB                                ; fully-qualified     # 🏇🏻 horse racing: light skin tone
1F3C7 1F3FC                                ; fully-qualified     # 🏇🏼 horse racing: medium-light skin tone
1F3C7 1F3FD                                ; fully-qualified     # 🏇🏽 horse racing: medium skin tone
1F3C7 1F3FE                                ; fully-qualified     # 🏇🏾 horse racing: medium-dark skin tone
1F3C7 1F3FF                                ; fully-qualified     # 🏇🏿 horse racing: dark skin tone
26F7 FE0F                                  ; fully-qualified     # ⛷️ skier
26F7                                       ; unqualified         # ⛷ skier
1F3C2                                      ; fully-qualified     # 🏂 snowboarder
1F3C2 1F3FB                                ; fully-qualified     # 🏂🏻 snowboarder: light skin tone
1F3C2 1F3FC                                ; fully-qualified     # 🏂🏼 snowboarder: medium-light skin tone
1F3C2 1F3FD                                ; fully-qualified     # 🏂🏽 snowboarder: medium skin tone
1F3C2 1F3FE                                ; fully-qualified     # 🏂🏾 snowboarder: medium-dark skin tone
1F3C2 1F3FF                                ; fully-qualified     # 🏂🏿 snowboarder: dark skin tone
1F3CC FE0F                                 ; fully-qualified     # 🏌️ person golfing
1F3CC                                      ; unqualified         # 🏌 person golfing
1F3CC 1F3FB                                ; fully-qualified     # 🏌🏻 person golfing: light skin tone
1F3CC 1F3FC                                ; fully-qualified     # 🏌🏼 person golfing: medium-light skin tone
1F3CC 1F3FD                                ; fully-qualified     # 🏌🏽 person golfing: medium skin tone
1F3CC 1F3FE                                ; fully-qualified     # 🏌🏾 person golfing: medium-dark skin tone
1F3CC 1F3FF                                ; fully-qualified     # 🏌🏿 person golfing: dark skin tone
1F3CC FE0F 200D 2642 FE0F                  ; fully-qualified     # 🏌️‍♂️ man golfing
1F3CC 200D 2642 FE0F                       ; unqualified         # 🏌‍♂️ man golfing
1F3CC FE0F 200D 2642                       ; unqualified         # 🏌️‍♂ man golfing
1F3CC 200D 2642                            ; unqualified         # 🏌‍♂ man golfing
1F3CC 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🏌🏻‍♂️ man golfing: light skin tone
1F3CC 1F3FB 200D 2642                      ; minimally-qualified # 🏌🏻‍♂ man golfing: light skin tone
1F3CC 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🏌🏼‍♂️ man golfing: medium-light skin tone
1F3CC 1F3FC 200D 2642                      ; minimally-qualified # 🏌🏼‍♂ man golfing: medium-light skin tone
1F3CC 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🏌🏽‍♂️ man golfing: medium skin tone
1F3CC 1F3FD 200D 2642                      ; minimally-qualified # 🏌🏽‍♂ man golfing: medium skin tone
1F3CC 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🏌🏾‍♂️ man golfing: medium-dark skin tone
1F3CC 1F3FE 200D 2642                      ; minimally-qualified # 🏌🏾‍♂ man golfing: medium-dark skin tone
1F3CC 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🏌🏿‍♂️ man golfing: dark skin tone
1F3CC 1F3FF 200D 2642                      ; minimally-qualified # 🏌🏿‍♂ man golfing: dark skin tone
1F3CC FE0F 200D 2640 FE0F                  ; fully-qualified     # 🏌️‍♀️ woman golfing
1F3CC 200D 2640 FE0F                       ; unqualified         # 🏌‍♀️ woman golfing
1F3CC FE0F 200D 2640                       ; unqualified         # 🏌️‍♀ woman golfing
1F3CC 200D 2640                            ; unqualified         # 🏌‍♀ woman golfing
1F3CC 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🏌🏻‍♀️ woman golfing: light skin tone
1F3CC 1F3FB 200D 2640                      ; minimally-qualified # 🏌🏻‍♀ woman golfing: light skin tone
1F3CC 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🏌🏼‍♀️ woman golfing: medium-light skin tone
1F3CC 1F3FC 200D 2640                      ; minimally-qualified # 🏌🏼‍♀ woman golfing: medium-light skin tone
1F3CC 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🏌🏽‍♀️ woman golfing: medium skin tone
1F3CC 1F3FD 200D 2640                      ; minimally-qualified # 🏌🏽‍♀ woman golfing: medium skin tone
1F3CC 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🏌🏾‍♀️ woman golfing: medium-dark skin tone
1F3CC 1F3FE 200D 2640                      ; minimally-qualified # 🏌🏾‍♀ woman golfing: medium-dark skin tone
1F3CC 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🏌🏿‍♀️ woman golfing: dark skin tone
1F3CC 1F3FF 200D 2640                      ; minimally-qualified # 🏌🏿‍♀ woman golfing: dark skin tone
1F3C4                                      ; fully-qualified     # 🏄 person surfing
1F3C4 1F3FB                                ; fully-qualified     # 🏄🏻 person surfing: light skin tone
1F3C4 1F3FC                                ; fully-qualified     # 🏄🏼 person surfing: medium-light skin tone
1F3C4 1F3FD                                ; fully-qualified     # 🏄🏽 person surfing: medium skin tone
1F3C4 1F3FE                                ; fully-qualified     # 🏄🏾 person surfing: medium-dark skin tone
1F3C4 1F3FF                                ; fully-qualified     # 🏄🏿 person surfing: dark skin tone
1F3C4 200D 2642 FE0F                       ; fully-qualified     # 🏄‍♂️ man surfing
1F3C4 200D 2642                            ; minimally-qualified # 🏄‍♂ man surfing
1F3C4 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🏄🏻‍♂️ man surfing: light skin tone
1F3C4 1F3FB 200D 2642                      ; minimally-qualified # 🏄🏻‍♂ man surfing: light skin tone
1F3C4 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🏄🏼‍♂️ man surfing: medium-light skin tone
1F3C4 1F3FC 200D 2642                      ; minimally-qualified # 🏄🏼‍♂ man surfing: medium-light skin tone
1F3C4 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🏄🏽‍♂️ man surfing: medium skin tone
1F3C4 1F3FD 200D 2642                      ; minimally-qualified # 🏄🏽‍♂ man surfing: medium skin tone
1F3C4 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🏄🏾‍♂️ man surfing: medium-dark skin tone
1F3C4 1F3FE 200D 2642                      ; minimally-qualified # 🏄🏾‍♂ man surfing: medium-dark skin tone
1F3C4 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🏄🏿‍♂️ man surfing: dark skin tone
1F3C4 1F3FF 200D 2642                      ; minimally-qualified # 🏄🏿‍♂ man surfing: dark skin tone
1F3C4 200D 2640 FE0F                       ; fully-qualified     # 🏄‍♀️ woman surfing
1F3C4 200D 2640                            ; minimally-qualified # 🏄‍♀ woman surfing
1F3C4 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🏄🏻‍♀️ woman surfing: light skin tone
1F3C4 1F3FB 200D 2640                      ; minimally-qualified # 🏄🏻‍♀ woman surfing: light skin tone
1F3C4 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🏄🏼‍♀️ woman surfing: medium-light skin tone
1F3C4 1F3FC 200D 2640                      ; minimally-qualified # 🏄🏼‍♀ woman surfing: medium-light skin tone
1F3C4 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🏄🏽‍♀️ woman surfing: medium skin tone
1F3C4 1F3FD 200D 2640                      ; minimally-qualified # 🏄🏽‍♀ woman surfing: medium skin tone
1F3C4 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🏄🏾‍♀️ woman surfing: medium-dark skin tone
1F3C4 1F3FE 200D 2640                      ; minimally-qualified # 🏄🏾‍♀ woman surfing: medium-dark skin tone
1F3C4 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🏄🏿‍♀️ woman surfing: dark skin tone
1F3C4 1F3FF 200D 2640                      ; minimally-qualified # 🏄🏿‍♀ woman surfing: dark skin tone
1F6A3                                      ; fully-qualified     # 🚣 person rowing boat
1F6A3 1F3FB                                ; fully-qualified     # 🚣🏻 person rowing boat: light skin tone
1F6A3 1F3FC                                ; fully-qualified     # 🚣🏼 person rowing boat: medium-light skin tone
1F6A3 1F3FD                                ; fully-qualified     # 🚣🏽 person rowing boat: medium skin tone
1F6A3 1F3FE                                ; fully-qualified     # 🚣🏾 person rowing boat: medium-dark skin tone
1F6A3 1F3FF                                ; fully-qualified     # 🚣🏿 person rowing boat: dark skin tone
1F6A3 200D 2642 FE0F                       ; fully-qualified     # 🚣‍♂️ man rowing boat
1F6A3 200D 2642                            ; minimally-qualified # 🚣‍♂ man rowing boat
1F6A3 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🚣🏻‍♂️ man rowing boat: light skin tone
1F6A3 1F3FB 200D 2642                      ; minimally-qualified # 🚣🏻‍♂ man rowing boat: light skin tone
1F6A3 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🚣🏼‍♂️ man rowing boat: medium-light skin tone
1F6A3 1F3FC 200D 2642                      ; minimally-qualified # 🚣🏼‍♂ man rowing boat: medium-light skin tone
1F6A3 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🚣🏽‍♂️ man rowing boat: medium skin tone
1F6A3 1F3FD 200D 2642                      ; minimally-qualified # 🚣🏽‍♂ man rowing boat: medium skin tone
1F6A3 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🚣🏾‍♂️ man rowing boat: medium-dark skin tone
1F6A3 1F3FE 200D 2642                      ; minimally-qualified # 🚣🏾‍♂ man rowing boat: medium-dark skin tone
1F6A3 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🚣🏿‍♂️ man rowing boat: dark skin tone
1F6A3 1F3FF 200D 2642                      ; minimally-qualified # 🚣🏿‍♂ man rowing boat: dark skin tone
1F6A3 200D 2640 FE0F                       ; fully-qualified     # 🚣‍♀️ woman rowing boat
1F6A3 200D 2640                            ; minimally-qualified # 🚣‍♀ woman rowing boat
1F6A3 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🚣🏻‍♀️ woman rowing boat: light skin tone
1F6A3 1F3FB 200D 2640                      ; minimally-qualified # 🚣🏻‍♀ woman rowing boat: light skin tone
1F6A3 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🚣🏼‍♀️ woman rowing boat: medium-light skin tone
1F6A3 1F3FC 200D 2640                      ; minimally-qualified # 🚣🏼‍♀ woman rowing boat: medium-light skin tone
1F6A3 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🚣🏽‍♀️ woman rowing boat: medium skin tone
1F6A3 1F3FD 200D 2640                      ; minimally-qualified # 🚣🏽‍♀ woman rowing boat: medium skin tone
1F6A3 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🚣🏾‍♀️ woman rowing boat: medium-dark skin tone
1F6A3 1F3FE 200D 2640                      ; minimally-qualified # 🚣🏾‍♀ woman rowing boat: medium-dark skin tone
1F6A3 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🚣🏿‍♀️ woman rowing boat: dark skin tone
1F6A3 1F3FF 200D 2640                      ; minimally-qualified # 🚣🏿‍♀ woman rowing boat: dark skin tone
1F3CA                                      ; fully-qualified     # 🏊 person swimming
1F3CA 1F3FB                                ; fully-qualified     # 🏊🏻 person swimming: light skin tone
1F3CA 1F3FC                                ; fully-qualified     # 🏊🏼 person swimming: medium-light skin tone
1F3CA 1F3FD                                ; fully-qualified     # 🏊🏽 person swimming: medium skin tone
1F3CA 1F3FE                                ; fully-qualified     # 🏊🏾 person swimming: medium-dark skin tone
1F3CA 1F3FF                                ; fully-qualified     # 🏊🏿 person swimming: dark skin tone
1F3CA 200D 2642 FE0F                       ; fully-qualified     # 🏊‍♂️ man swimming
1F3CA 200D 2642                            ; minimally-qualified # 🏊‍♂ man swimming
1F3CA 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🏊🏻‍♂️ man swimming: light skin tone
1F3CA 1F3FB 200D 2642                      ; minimally-qualified # 🏊🏻‍♂ man swimming: light skin tone
1F3CA 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🏊🏼‍♂️ man swimming: medium-light skin tone
1F3CA 1F3FC 200D 2642                      ; minimally-qualified # 🏊🏼‍♂ man swimming: medium-light skin tone
1F3CA 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🏊🏽‍♂️ man swimming: medium skin tone
1F3CA 1F3FD 200D 2642                      ; minimally-qualified # 🏊🏽‍♂ man swimming: medium skin tone
1F3CA 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🏊🏾‍♂️ man swimming: medium-dark skin tone
1F3CA 1F3FE 200D 2642                      ; minimally-qualified # 🏊🏾‍♂ man swimming: medium-dark skin tone
1F3CA 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🏊🏿‍♂️ man swimming: dark skin tone
1F3CA 1F3FF 200D 2642                      ; minimally-qualified # 🏊🏿‍♂ man swimming: dark skin tone
1F3CA 200D 2640 FE0F                       ; fully-qualified     # 🏊‍♀️ woman swimming
1F3CA 200D 2640                            ; minimally-qualified # 🏊‍♀ woman swimming
1F3CA 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🏊🏻‍♀️ woman swimming: light skin tone
1F3CA 1F3FB 200D 2640                      ; minimally-qualified # 🏊🏻‍♀ woman swimming: light skin tone
1F3CA 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🏊🏼‍♀️ woman swimming: medium-light skin tone
1F3CA 1F3FC 200D 2640                      ; minimally-qualified # 🏊🏼‍♀ woman swimming: medium-light skin tone
1F3CA 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🏊🏽‍♀️ woman swimming: medium skin tone
1F3CA 1F3FD 200D 2640                      ; minimally-qualified # 🏊🏽‍♀ woman swimming: medium skin tone
1F3CA 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🏊🏾‍♀️ woman swimming: medium-dark skin tone
1F3CA 1F3FE 200D 2640                      ; minimally-qualified # 🏊🏾‍♀ woman swimming: medium-dark skin tone
1F3CA 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🏊🏿‍♀️ woman swimming: dark skin tone
1F3CA 1F3FF 200D 2640                      ; minimally-qualified # 🏊🏿‍♀ woman swimming: dark skin tone
26F9 FE0F                                  ; fully-qualified     # ⛹️ person bouncing ball
26F9                                       ; unqualified         # ⛹ person bouncing ball
26F9 1F3FB                                 ; fully-qualified     # ⛹🏻 person bouncing ball: light skin tone
26F9 1F3FC                                 ; fully-qualified     # ⛹🏼 person bouncing ball: medium-light skin tone
26F9 1F3FD                                 ; fully-qualified     # ⛹🏽 person bouncing ball: medium skin tone
26F9 1F3FE                                 ; fully-qualified     # ⛹🏾 person bouncing ball: medium-dark skin tone
26F9 1F3FF                                 ; fully-qualified     # ⛹🏿 person bouncing ball: dark skin tone
26F9 FE0F 200D 2642 FE0F                   ; fully-qualified     # ⛹️‍♂️ man bouncing ball
26F9 200D 2642 FE0F                        ; unqualified         # ⛹‍♂️ man bouncing ball
26F9 FE0F 200D 2642                        ; unqualified         # ⛹️‍♂ man bouncing ball
26F9 200D 2642                             ; unqualified         # ⛹‍♂ man bouncing ball
26F9 1F3FB 200D 2642 FE0F                  ; fully-qualified     # ⛹🏻‍♂️ man bouncing ball: light skin tone
26F9 1F3FB 200D 2642                       ; minimally-qualified # ⛹🏻‍♂ man bouncing ball: light skin tone
26F9 1F3FC 200D 2642 FE0F                  ; fully-qualified     # ⛹🏼‍♂️ man bouncing ball: medium-light skin tone
26F9 1F3FC 200D 2642                       ; minimally-qualified # ⛹🏼‍♂ man bouncing ball: medium-light skin tone
26F9 1F3FD 200D 2642 FE0F                  ; fully-qualified     # ⛹🏽‍♂️ man bouncing ball: medium skin tone
26F9 1F3FD 200D 2642                       ; minimally-qualified # ⛹🏽‍♂ man bouncing ball: medium skin tone
26F9 1F3FE 200D 2642 FE0F                  ; fully-qualified     # ⛹🏾‍♂️ man bouncing ball: medium-dark skin tone
26F9 1F3FE 200D 2642                       ; minimally-qualified # ⛹🏾‍♂ man bouncing ball: medium-dark skin tone
26F9 1F3FF 200D 2642 FE0F                  ; fully-qualified     # ⛹🏿‍♂️ man bouncing ball: dark skin tone
26F9 1F3FF 200D 2642                       ; minimally-qualified # ⛹🏿‍♂ man bouncing ball: dark skin tone
26F9 FE0F 200D 2640 FE0F                   ; fully-qualified     # ⛹️‍♀️ woman bouncing ball
26F9 200D 2640 FE0F                        ; unqualified         # ⛹‍♀️ woman bouncing ball
26F9 FE0F 200D 2640                        ; unqualified         # ⛹️‍♀ woman bouncing ball
26F9 200D 2640                             ; unqualified         # ⛹‍♀ woman bouncing ball
26F9 1F3FB 200D 2640 FE0F                  ; fully-qualified     # ⛹🏻‍♀️ woman bouncing ball: light skin tone
26F9 1F3FB 200D 2640                       ; minimally-qualified # ⛹🏻‍♀ woman bouncing ball: light skin tone
26F9 1F3FC 200D 2640 FE0F                  ; fully-qualified     # ⛹🏼‍♀️ woman bouncing ball: medium-light skin tone
26F9 1F3FC 200D 2640                       ; minimally-qualified # ⛹🏼‍♀ woman bouncing ball: medium-light skin tone
26F9 1F3FD 200D 2640 FE0F                  ; fully-qualified     # ⛹🏽‍♀️ woman bouncing ball: medium skin tone
26F9 1F3FD 200D 2640                       ; minimally-qualified # ⛹🏽‍♀ woman bouncing ball: medium skin tone
26F9 1F3FE 200D 2640 FE0F                  ; fully-qualified     # ⛹🏾‍♀️ woman bouncing ball: medium-dark skin tone
26F9 1F3FE 200D 2640                       ; minimally-qualified # ⛹🏾‍♀ woman bouncing ball: medium-dark skin tone
26F9 1F3FF 200D 2640 FE0F                  ; fully-qualified     # ⛹🏿‍♀️ woman bouncing ball: dark skin tone
26F9 1F3FF 200D 2640                       ; minimally-qualified # ⛹🏿‍♀ woman bouncing ball: dark skin tone
1F3CB FE0F                                 ; fully-qualified     # 🏋️ person lifting weights
1F3CB                                      ; unqualified         # 🏋 person lifting weights
1F3CB 1F3FB                                ; fully-qualified     # 🏋🏻 person lifting weights: light skin tone
1F3CB 1F3FC                                ; fully-qualified     # 🏋🏼 person lifting weights: medium-light skin tone
1F3CB 1F3FD                                ; fully-qualified     # 🏋🏽 person lifting weights: medium skin tone
1F3CB 1F3FE                                ; fully-qualified     # 🏋🏾 person lifting weights: medium-dark skin tone
1F3CB 1F3FF                                ; fully-qualified     # 🏋🏿 person lifting weights: dark skin tone
1F3CB FE0F 200D 2642 FE0F                  ; fully-qualified     # 🏋️‍♂️ man lifting weights
1F3CB 200D 2642 FE0F                       ; unqualified         # 🏋‍♂️ man lifting weights
1F3CB FE0F 200D 2642                       ; unqualified         # 🏋️‍♂ man lifting weights
1F3CB 200D 2642                            ; unqualified         # 🏋‍♂ man lifting weights
1F3CB 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🏋🏻‍♂️ man lifting weights: light skin tone
1F3CB 1F3FB 200D 2642                      ; minimally-qualified # 🏋🏻‍♂ man lifting weights: light skin tone
1F3CB 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🏋🏼‍♂️ man lifting weights: medium-light skin tone
1F3CB 1F3FC 200D 2642                      ; minimally-qualified # 🏋🏼‍♂ man lifting weights: medium-light skin tone
1F3CB 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🏋🏽‍♂️ man lifting weights: medium skin tone
1F3CB 1F3FD 200D 2642                      ; minimally-qualified # 🏋🏽‍♂ man lifting weights: medium skin tone
1F3CB 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🏋🏾‍♂️ man lifting weights: medium-dark skin tone
1F3CB 1F3FE 200D 2642                      ; minimally-qualified # 🏋🏾‍♂ man lifting weights: medium-dark skin tone
1F3CB 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🏋🏿‍♂️ man lifting weights: dark skin tone
1F3CB 1F3FF 200D 2642                      ; minimally-qualified # 🏋🏿‍♂ man lifting weights: dark skin tone
1F3CB FE0F 200D 2640 FE0F                  ; fully-qualified     # 🏋️‍♀️ woman lifting weights
1F3CB 200D 2640 FE0F                       ; unqualified         # 🏋‍♀️ woman lifting weights
1F3CB FE0F 200D 2640                       ; unqualified         # 🏋️‍♀ woman lifting weights
1F3CB 200D 2640                            ; unqualified         # 🏋‍♀ woman lifting weights
1F3CB 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🏋🏻‍♀️ woman lifting weights: light skin tone
1F3CB 1F3FB 200D 2640                      ; minimally-qualified # 🏋🏻‍♀ woman lifting weights: light skin tone
1F3CB 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🏋🏼‍♀️ woman lifting weights: medium-light skin tone
1F3CB 1F3FC 200D 2640                      ; minimally-qualified # 🏋🏼‍♀ woman lifting weights: medium-light skin tone
1F3CB 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🏋🏽‍♀️ woman lifting weights: medium skin tone
1F3CB 1F3FD 200D 2640                      ; minimally-qualified # 🏋🏽‍♀ woman lifting weights: medium skin tone
1F3CB 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🏋🏾‍♀️ woman lifting weights: medium-dark skin tone
1F3CB 1F3FE 200D 2640                      ; minimally-qualified # 🏋🏾‍♀ woman lifting weights: medium-dark skin tone
1F3CB 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🏋🏿‍♀️ woman lifting weights: dark skin tone
1F3CB 1F3FF 200D 2640                      ; minimally-qualified # 🏋🏿‍♀ woman lifting weights: dark skin tone
1F6B4                                      ; fully-qualified     # 🚴 person biking
1F6B4 1F3FB                                ; fully-qualified     # 🚴🏻 person biking: light skin tone
1F6B4 1F3FC                                ; fully-qualified     # 🚴🏼 person biking: medium-light skin tone
1F6B4 1F3FD                                ; fully-qualified     # 🚴🏽 person biking: medium skin tone
1F6B4 1F3FE                                ; fully-qualified     # 🚴🏾 person biking: medium-dark skin tone
1F6B4 1F3FF                                ; fully-qualified     # 🚴🏿 person biking: dark skin tone
1F6B4 200D 2642 FE0F                       ; fully-qualified     # 🚴‍♂️ man biking
1F6B4 200D 2642                            ; minimally-qualified # 🚴‍♂ man biking
1F6B4 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🚴🏻‍♂️ man biking: light skin tone
1F6B4 1F3FB 200D 2642                      ; minimally-qualified # 🚴🏻‍♂ man biking: light skin tone
1F6B4 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🚴🏼‍♂️ man biking: medium-light skin tone
1F6B4 1F3FC 200D 2642                      ; minimally-qualified # 🚴🏼‍♂ man biking: medium-light skin tone
1F6B4 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🚴🏽‍♂️ man biking: medium skin tone
1F6B4 1F3FD 200D 2642                      ; minimally-qualified # 🚴🏽‍♂ man biking: medium skin tone
1F6B4 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🚴🏾‍♂️ man biking: medium-dark skin tone
1F6B4 1F3FE 200D 2642                      ; minimally-qualified # 🚴🏾‍♂ man biking: medium-dark skin tone
1F6B4 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🚴🏿‍♂️ man biking: dark skin tone
1F6B4 1F3FF 200D 2642                      ; minimally-qualified # 🚴🏿‍♂ man biking: dark skin tone
1F6B4 200D 2640 FE0F                       ; fully-qualified     # 🚴‍♀️ woman biking
1F6B4 200D 2640                            ; minimally-qualified # 🚴‍♀ woman biking
1F6B4 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🚴🏻‍♀️ woman biking: light skin tone
1F6B4 1F3FB 200D 2640                      ; minimally-qualified # 🚴🏻‍♀ woman biking: light skin tone
1F6B4 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🚴🏼‍♀️ woman biking: medium-light skin tone
1F6B4 1F3FC 200D 2640                      ; minimally-qualified # 🚴🏼‍♀ woman biking: medium-light skin tone
1F6B4 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🚴🏽‍♀️ woman biking: medium skin tone
1F6B4 1F3FD 200D 2640                      ; minimally-qualified # 🚴🏽‍♀ woman biking: medium skin tone
1F6B4 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🚴🏾‍♀️ woman biking: medium-dark skin tone
1F6B4 1F3FE 200D 2640                      ; minimally-qualified # 🚴🏾‍♀ woman biking: medium-dark skin tone
1F6B4 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🚴🏿‍♀️ woman biking: dark skin tone
1F6B4 1F3FF 200D 2640                      ; minimally-qualified # 🚴🏿‍♀ woman biking: dark skin tone
1F6B5                                      ; fully-qualified     # 🚵 person mountain biking
1F6B5 1F3FB                                ; fully-qualified     # 🚵🏻 person mountain biking: light skin tone
1F6B5 1F3FC                                ; fully-qualified     # 🚵🏼 person mountain biking: medium-light skin tone
1F6B5 1F3FD                                ; fully-qualified     # 🚵🏽 person mountain biking: medium skin tone
1F6B5 1F3FE                                ; fully-qualified     # 🚵🏾 person mountain biking: medium-dark skin tone
1F6B5 1F3FF                                ; fully-qualified     # 🚵🏿 person mountain biking: dark skin tone
1F6B5 200D 2642 FE0F                       ; fully-qualified     # 🚵‍♂️ man mountain biking
1F6B5 200D 2642                            ; minimally-qualified # 🚵‍♂ man mountain biking
1F6B5 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🚵🏻‍♂️ man mountain biking: light skin tone
1F6B5 1F3FB 200D 2642                      ; minimally-qualified # 🚵🏻‍♂ man mountain biking: light skin tone
1F6B5 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🚵🏼‍♂️ man mountain biking: medium-light skin tone
1F6B5 1F3FC 200D 2642                      ; minimally-qualified # 🚵🏼‍♂ man mountain biking: medium-light skin tone
1F6B5 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🚵🏽‍♂️ man mountain biking: medium skin tone
1F6B5 1F3FD 200D 2642                      ; minimally-qualified # 🚵🏽‍♂ man mountain biking: medium skin tone
1F6B5 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🚵🏾‍♂️ man mountain biking: medium-dark skin tone
1F6B5 1F3FE 200D 2642                      ; minimally-qualified # 🚵🏾‍♂ man mountain biking: medium-dark skin tone
1F6B5 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🚵🏿‍♂️ man mountain biking: dark skin tone
1F6B5 1F3FF 200D 2642                      ; minimally-qualified # 🚵🏿‍♂ man mountain biking: dark skin tone
1F6B5 200D 2640 FE0F                       ; fully-qualified     # 🚵‍♀️ woman mountain biking
1F6B5 200D 2640                            ; minimally-qualified # 🚵‍♀ woman mountain biking
1F6B5 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🚵🏻‍♀️ woman mountain biking: light skin tone
1F6B5 1F3FB 200D 2640                      ; minimally-qualified # 🚵🏻‍♀ woman mountain biking: light skin tone
1F6B5 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🚵🏼‍♀️ woman mountain biking: medium-light skin tone
1F6B5 1F3FC 200D 2640                      ; minimally-qualified # 🚵🏼‍♀ woman mountain biking: medium-light skin tone
1F6B5 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🚵🏽‍♀️ woman mountain biking: medium skin tone
1F6B5 1F3FD 200D 2640                      ; minimally-qualified # 🚵🏽‍♀ woman mountain biking: medium skin tone
1F6B5 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🚵🏾‍♀️ woman mountain biking: medium-dark skin tone
1F6B5 1F3FE 200D 2640                      ; minimally-qualified # 🚵🏾‍♀ woman mountain biking: medium-dark skin tone
1F6B5 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🚵🏿‍♀️ woman mountain biking: dark skin tone
1F6B5 1F3FF 200D 2640                      ; minimally-qualified # 🚵🏿‍♀ woman mountain biking: dark skin tone
1F938                                      ; fully-qualified     # 🤸 person cartwheeling
1F938 1F3FB                                ; fully-qualified     # 🤸🏻 person cartwheeling: light skin tone
1F938 1F3FC                                ; fully-qualified     # 🤸🏼 person cartwheeling: medium-light skin tone
1F938 1F3FD                                ; fully-qualified     # 🤸🏽 person cartwheeling: medium skin tone
1F938 1F3FE                                ; fully-qualified     # 🤸🏾 person cartwheeling: medium-dark skin tone
1F938 1F3FF                                ; fully-qualified     # 🤸🏿 person cartwheeling: dark skin tone
1F938 200D 2642 FE0F                       ; fully-qualified     # 🤸‍♂️ man cartwheeling
1F938 200D 2642                            ; minimally-qualified # 🤸‍♂ man cartwheeling
1F938 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🤸🏻‍♂️ man cartwheeling: light skin tone
1F938 1F3FB 200D 2642                      ; minimally-qualified # 🤸🏻‍♂ man cartwheeling: light skin tone
1F938 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🤸🏼‍♂️ man cartwheeling: medium-light skin tone
1F938 1F3FC 200D 2642                      ; minimally-qualified # 🤸🏼‍♂ man cartwheeling: medium-light skin tone
1F938 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🤸🏽‍♂️ man cartwheeling: medium skin tone
1F938 1F3FD 200D 2642                      ; minimally-qualified # 🤸🏽‍♂ man cartwheeling: medium skin tone
1F938 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🤸🏾‍♂️ man cartwheeling: medium-dark skin tone
1F938 1F3FE 200D 2642                      ; minimally-qualified # 🤸🏾‍♂ man cartwheeling: medium-dark skin tone
1F938 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🤸🏿‍♂️ man cartwheeling: dark skin tone
1F938 1F3FF 200D 2642                      ; minimally-qualified # 🤸🏿‍♂ man cartwheeling: dark skin tone
1F938 200D 2640 FE0F                       ; fully-qualified     # 🤸‍♀️ woman cartwheeling
1F938 200D 2640                            ; minimally-qualified # 🤸‍♀ woman cartwheeling
1F938 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🤸🏻‍♀️ woman cartwheeling: light skin tone
1F938 1F3FB 200D 2640                      ; minimally-qualified # 🤸🏻‍♀ woman cartwheeling: light skin tone
1F938 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🤸🏼‍♀️ woman cartwheeling: medium-light skin tone
1F938 1F3FC 200D 2640                      ; minimally-qualified # 🤸🏼‍♀ woman cartwheeling: medium-light skin tone
1F938 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🤸🏽‍♀️ woman cartwheeling: medium skin tone
1F938 1F3FD 200D 2640                      ; minimally-qualified # 🤸🏽‍♀ woman cartwheeling: medium skin tone
1F938 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🤸🏾‍♀️ woman cartwheeling: medium-dark skin tone
1F938 1F3FE 200D 2640                      ; minimally-qualified # 🤸🏾‍♀ woman cartwheeling: medium-dark skin tone
1F938 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🤸🏿‍♀️ woman cartwheeling: dark skin tone
1F938 1F3FF 200D 2640                      ; minimally-qualified # 🤸🏿‍♀ woman cartwheeling: dark skin tone
1F93C                                      ; fully-qualified     # 🤼 people wrestling
1F93C 200D 2642 FE0F                       ; fully-qualified     # 🤼‍♂️ men wrestling
1F93C 200D 2642                            ; minimally-qualified # 🤼‍♂ men wrestling
1F93C 200D 2640 FE0F                       ; fully-qualified     # 🤼‍♀️ women wrestling
1F93C 200D 2640                            ; minimally-qualified # 🤼‍♀ women wrestling
1F93D                                      ; fully-qualified     # 🤽 person playing water polo
1F93D 1F3FB                                ; fully-qualified     # 🤽🏻 person playing water polo: light skin tone
1F93D 1F3FC                                ; fully-qualified     # 🤽🏼 person playing water polo: medium-light skin tone
1F93D 1F3FD                                ; fully-qualified     # 🤽🏽 person playing water polo: medium skin tone
1F93D 1F3FE                                ; fully-qualified     # 🤽🏾 person playing water polo: medium-dark skin tone
1F93D 1F3FF                                ; fully-qualified     # 🤽🏿 person playing water polo: dark skin tone
1F93D 200D 2642 FE0F                       ; fully-qualified     # 🤽‍♂️ man playing water polo
1F93D 200D 2642                            ; minimally-qualified # 🤽‍♂ man playing water polo
1F93D 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🤽🏻‍♂️ man playing water polo: light skin tone
1F93D 1F3FB 200D 2642                      ; minimally-qualified # 🤽🏻‍♂ man playing water polo: light skin tone
1F93D 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🤽🏼‍♂️ man playing water polo: medium-light skin tone
1F93D 1F3FC 200D 2642                      ; minimally-qualified # 🤽🏼‍♂ man playing water polo: medium-light skin tone
1F93D 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🤽🏽‍♂️ man playing water polo: medium skin tone
1F93D 1F3FD 200D 2642                      ; minimally-qualified # 🤽🏽‍♂ man playing water polo: medium skin tone
1F93D 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🤽🏾‍♂️ man playing water polo: medium-dark skin tone
1F93D 1F3FE 200D 2642                      ; minimally-qualified # 🤽🏾‍♂ man playing water polo: medium-dark skin tone
1F93D 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🤽🏿‍♂️ man playing water polo: dark skin tone
1F93D 1F3FF 200D 2642                      ; minimally-qualified # 🤽🏿‍♂ man playing water polo: dark skin tone
1F93D 200D 2640 FE0F                       ; fully-qualified     # 🤽‍♀️ woman playing water polo
1F93D 200D 2640                            ; minimally-qualified # 🤽‍♀ woman playing water polo
1F93D 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🤽🏻‍♀️ woman playing water polo: light skin tone
1F93D 1F3FB 200D 2640                      ; minimally-qualified # 🤽🏻‍♀ woman playing water polo: light skin tone
1F93D 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🤽🏼‍♀️ woman playing water polo: medium-light skin tone
1F93D 1F3FC 200D 2640                      ; minimally-qualified # 🤽🏼‍♀ woman playing water polo: medium-light skin tone
1F93D 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🤽🏽‍♀️ woman playing water polo: medium skin tone
1F93D 1F3FD 200D 2640                      ; minimally-qualified # 🤽🏽‍♀ woman playing water polo: medium skin tone
1F93D 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🤽🏾‍♀️ woman playing water polo: medium-dark skin tone
1F93D 1F3FE 200D 2640                      ; minimally-qualified # 🤽🏾‍♀ woman playing water polo: medium-dark skin tone
1F93D 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🤽🏿‍♀️ woman playing water polo: dark skin tone
1F93D 1F3FF 200D 2640                      ; minimally-qualified # 🤽🏿‍♀ woman playing water polo: dark skin tone
1F93E                                      ; fully-qualified     # 🤾 person playing handball
1F93E 1F3FB                                ; fully-qualified     # 🤾🏻 person playing handball: light skin tone
1F93E 1F3FC                                ; fully-qualified     # 🤾🏼 person playing handball: medium-light skin tone
1F93E 1F3FD                                ; fully-qualified     # 🤾🏽 person playing handball: medium skin tone
1F93E 1F3FE                                ; fully-qualified     # 🤾🏾 person playing handball: medium-dark skin tone
1F93E 1F3FF                                ; fully-qualified     # 🤾🏿 person playing handball: dark skin tone
1F93E 200D 2642 FE0F                       ; fully-qualified     # 🤾‍♂️ man playing handball
1F93E 200D 2642                            ; minimally-qualified # 🤾‍♂ man playing handball
1F93E 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🤾🏻‍♂️ man playing handball: light skin tone
1F93E 1F3FB 200D 2642                      ; minimally-qualified # 🤾🏻‍♂ man playing handball: light skin tone
1F93E 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🤾🏼‍♂️ man playing handball: medium-light skin tone
1F93E 1F3FC 200D 2642                      ; minimally-qualified # 🤾🏼‍♂ man playing handball: medium-light skin tone
1F93E 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🤾🏽‍♂️ man playing handball: medium skin tone
1F93E 1F3FD 200D 2642                      ; minimally-qualified # 🤾🏽‍♂ man playing handball: medium skin tone
1F93E 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🤾🏾‍♂️ man playing handball: medium-dark skin tone
1F93E 1F3FE 200D 2642                      ; minimally-qualified # 🤾🏾‍♂ man playing handball: medium-dark skin tone
1F93E 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🤾🏿‍♂️ man playing handball: dark skin tone
1F93E 1F3FF 200D 2642                      ; minimally-qualified # 🤾🏿‍♂ man playing handball: dark skin tone
1F93E 200D 2640 FE0F                       ; fully-qualified     # 🤾‍♀️ woman playing handball
1F93E 200D 2640                            ; minimally-qualified # 🤾‍♀ woman playing handball
1F93E 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🤾🏻‍♀️ woman playing handball: light skin tone
1F93E 1F3FB 200D 2640                      ; minimally-qualified # 🤾🏻‍♀ woman playing handball: light skin tone
1F93E 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🤾🏼‍♀️ woman playing handball: medium-light skin tone
1F93E 1F3FC 200D 2640                      ; minimally-qualified # 🤾🏼‍♀ woman playing handball: medium-light skin tone
1F93E 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🤾🏽‍♀️ woman playing handball: medium skin tone
1F93E 1F3FD 200D 2640                      ; minimally-qualified # 🤾🏽‍♀ woman playing handball: medium skin tone
1F93E 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🤾🏾‍♀️ woman playing handball: medium-dark skin tone
1F93E 1F3FE 200D 2640                      ; minimally-qualified # 🤾🏾‍♀ woman playing handball: medium-dark skin tone
1F93E 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🤾🏿‍♀️ woman playing handball: dark skin tone
1F93E 1F3FF 200D 2640                      ; minimally-qualified # 🤾🏿‍♀ woman playing handball: dark skin tone
1F939                                      ; fully-qualified     # 🤹 person juggling
1F939 1F3FB                                ; fully-qualified     # 🤹🏻 person juggling: light skin tone
1F939 1F3FC                                ; fully-qualified     # 🤹🏼 person juggling: medium-light skin tone
1F939 1F3FD                                ; fully-qualified     # 🤹🏽 person juggling: medium skin tone
1F939 1F3FE                                ; fully-qualified     # 🤹🏾 person juggling: medium-dark skin tone
1F939 1F3FF                                ; fully-qualified     # 🤹🏿 person juggling: dark skin tone
1F939 200D 2642 FE0F                       ; fully-qualified     # 🤹‍♂️ man juggling
1F939 200D 2642                            ; minimally-qualified # 🤹‍♂ man juggling
1F939 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🤹🏻‍♂️ man juggling: light skin tone
1F939 1F3FB 200D 2642                      ; minimally-qualified # 🤹🏻‍♂ man juggling: light skin tone
1F939 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🤹🏼‍♂️ man juggling: medium-light skin tone
1F939 1F3FC 200D 2642                      ; minimally-qualified # 🤹🏼‍♂ man juggling: medium-light skin tone
1F939 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🤹🏽‍♂️ man juggling: medium skin tone
1F939 1F3FD 200D 2642                      ; minimally-qualified # 🤹🏽‍♂ man juggling: medium skin tone
1F939 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🤹🏾‍♂️ man juggling: medium-dark skin tone
1F939 1F3FE 200D 2642                      ; minimally-qualified # 🤹🏾‍♂ man juggling: medium-dark skin tone
1F939 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🤹🏿‍♂️ man juggling: dark skin tone
1F939 1F3FF 200D 2642                      ; minimally-qualified # 🤹🏿‍♂ man juggling: dark skin tone
1F939 200D 2640 FE0F                       ; fully-qualified     # 🤹‍♀️ woman juggling
1F939 200D 2640                            ; minimally-qualified # 🤹‍♀ woman juggling
1F939 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🤹🏻‍♀️ woman juggling: light skin tone
1F939 1F3FB 200D 2640                      ; minimally-qualified # 🤹🏻‍♀ woman juggling: light skin tone
1F939 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🤹🏼‍♀️ woman juggling: medium-light skin tone
1F939 1F3FC 200D 2640                      ; minimally-qualified # 🤹🏼‍♀ woman juggling: medium-light skin tone
1F939 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🤹🏽‍♀️ woman juggling: medium skin tone
1F939 1F3FD 200D 2640                      ; minimally-qualified # 🤹🏽‍♀ woman juggling: medium skin tone
1F939 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🤹🏾‍♀️ woman juggling: medium-dark skin tone
1F939 1F3FE 200D 2640                      ; minimally-qualified # 🤹🏾‍♀ woman juggling: medium-dark skin tone
1F939 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🤹🏿‍♀️ woman juggling: dark skin tone
1F939 1F3FF 200D 2640                      ; minimally-qualified # 🤹🏿‍♀ woman juggling: dark skin tone

# subgroup: person-resting
1F9D8                                      ; fully-qualified     # 🧘 person in lotus position
1F9D8 1F3FB                                ; fully-qualified     # 🧘🏻 person in lotus position: light skin tone
1F9D8 1F3FC                                ; fully-qualified     # 🧘🏼 person in lotus position: medium-light skin tone
1F9D8 1F3FD                                ; fully-qualified     # 🧘🏽 person in lotus position: medium skin tone
1F9D8 1F3FE                                ; fully-qualified     # 🧘🏾 person in lotus position: medium-dark skin tone
1F9D8 1F3FF                                ; fully-qualified     # 🧘🏿 person in lotus position: dark skin tone
1F9D8 200D 2642 FE0F                       ; fully-qualified     # 🧘‍♂️ man in lotus position
1F9D8 200D 2642                            ; minimally-qualified # 🧘‍♂ man in lotus position
1F9D8 1F3FB 200D 2642 FE0F                 ; fully-qualified     # 🧘🏻‍♂️ man in lotus position: light skin tone
1F9D8 1F3FB 200D 2642                      ; minimally-qualified # 🧘🏻‍♂ man in lotus position: light skin tone
1F9D8 1F3FC 200D 2642 FE0F                 ; fully-qualified     # 🧘🏼‍♂️ man in lotus position: medium-light skin tone
1F9D8 1F3FC 200D 2642                      ; minimally-qualified # 🧘🏼‍♂ man in lotus position: medium-light skin tone
1F9D8 1F3FD 200D 2642 FE0F                 ; fully-qualified     # 🧘🏽‍♂️ man in lotus position: medium skin tone
1F9D8 1F3FD 200D 2642                      ; minimally-qualified # 🧘🏽‍♂ man in lotus position: medium skin tone
1F9D8 1F3FE 200D 2642 FE0F                 ; fully-qualified     # 🧘🏾‍♂️ man in lotus position: medium-dark skin tone
1F9D8 1F3FE 200D 2642                      ; minimally-qualified # 🧘🏾‍♂ man in lotus position: medium-dark skin tone
1F9D8 1F3FF 200D 2642 FE0F                 ; fully-qualified     # 🧘🏿‍♂️ man in lotus position: dark skin tone
1F9D8 1F3FF 200D 2642                      ; minimally-qualified # 🧘🏿‍♂ man in lotus position: dark skin tone
1F9D8 200D 2640 FE0F                       ; fully-qualified     # 🧘‍♀️ woman in lotus position
1F9D8 200D 2640                            ; minimally-qualified # 🧘‍♀ woman in lotus position
1F9D8 1F3FB 200D 2640 FE0F                 ; fully-qualified     # 🧘🏻‍♀️ woman in lotus position: light skin tone
1F9D8 1F3FB 200D 2640                      ; minimally-qualified # 🧘🏻‍♀ woman in lotus position: light skin tone
1F9D8 1F3FC 200D 2640 FE0F                 ; fully-qualified     # 🧘🏼‍♀️ woman in lotus position: medium-light skin tone
1F9D8 1F3FC 200D 2640                      ; minimally-qualified # 🧘🏼‍♀ woman in lotus position: medium-light skin tone
1F9D8 1F3FD 200D 2640 FE0F                 ; fully-qualified     # 🧘🏽‍♀️ woman in lotus position: medium skin tone
1F9D8 1F3FD 200D 2640                      ; minimally-qualified # 🧘🏽‍♀ woman in lotus position: medium skin tone
1F9D8 1F3FE 200D 2640 FE0F                 ; fully-qualified     # 🧘🏾‍♀️ woman in lotus position: medium-dark skin tone
1F9D8 1F3FE 200D 2640                      ; minimally-qualified # 🧘🏾‍♀ woman in lotus position: medium-dark skin tone
1F9D8 1F3FF 200D 2640 FE0F                 ; fully-qualified     # 🧘🏿‍♀️ woman in lotus position: dark skin tone
1F9D8 1F3FF 200D 2640                      ; minimally-qualified # 🧘🏿‍♀ woman in lotus position: dark skin tone
1F6C0                                      ; fully-qualified     # 🛀 person taking bath
1F6C0 1F3FB                                ; fully-qualified     # 🛀🏻 person taking bath: light skin tone
1F6C0 1F3FC                                ; fully-qualified     # 🛀🏼 person taking bath: medium-light skin tone
1F6C0 1F3FD                                ; fully-qualified     # 🛀🏽 person taking bath: medium skin tone
1F6C0 1F3FE                                ; fully-qualified     # 🛀🏾 person taking bath: medium-dark skin tone
1F6C0 1F3FF                                ; fully-qualified     # 🛀🏿 person taking bath: dark skin tone
1F6CC                                      ; fully-qualified     # 🛌 person in bed
1F6CC 1F3FB                                ; fully-qualified     # 🛌🏻 person in bed: light skin tone
1F6CC 1F3FC                                ; fully-qualified     # 🛌🏼 person in bed: medium-light skin tone
1F6CC 1F3FD                                ; fully-qualified     # 🛌🏽 person in bed: medium skin tone
1F6CC 1F3FE                                ; fully-qualified     # 🛌🏾 person in bed: medium-dark skin tone
1F6CC 1F3FF                                ; fully-qualified     # 🛌🏿 person in bed: dark skin tone

# subgroup: family
1F9D1 200D 1F91D 200D 1F9D1                ; fully-qualified     # 🧑‍🤝‍🧑 people holding hands
1F9D1 1F3FB 200D 1F91D 200D 1F9D1 1F3FB    ; fully-qualified     # 🧑🏻‍🤝‍🧑🏻 people holding hands: light skin tone
1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FB    ; fully-qualified     # 🧑🏼‍🤝‍🧑🏻 people holding hands: medium-light skin tone, light skin tone
1F9D1 1F3FC 200D 1F91D 200D 1F9D1 1F3FC    ; fully-qualified     # 🧑🏼‍🤝‍🧑🏼 people holding hands: medium-light skin tone
1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FB    ; fully-qualified     # 🧑🏽‍🤝‍🧑🏻 people holding hands: medium skin tone, light skin tone
1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FC    ; fully-qualified     # 🧑🏽‍🤝‍🧑🏼 people holding hands: medium skin tone, medium-light skin tone
1F9D1 1F3FD 200D 1F91D 200D 1F9D1 1F3FD    ; fully-qualified     # 🧑🏽‍🤝‍🧑🏽 people holding hands: medium skin tone
1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FB    ; fully-qualified     # 🧑🏾‍🤝‍🧑🏻 people holding hands: medium-dark skin tone, light skin tone
1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FC    ; fully-qualified     # 🧑🏾‍🤝‍🧑🏼 people holding hands: medium-dark skin tone, medium-light skin tone
1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FD    ; fully-qualified     # 🧑🏾‍🤝‍🧑🏽 people holding hands: medium-dark skin tone, medium skin tone
1F9D1 1F3FE 200D 1F91D 200D 1F9D1 1F3FE    ; fully-qualified     # 🧑🏾‍🤝‍🧑🏾 people holding hands: medium-dark skin tone
1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FB    ; fully-qualified     # 🧑🏿‍🤝‍🧑🏻 people holding hands: dark skin tone, light skin tone
1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FC    ; fully-qualified     # 🧑🏿‍🤝‍🧑🏼 people holding hands: dark skin tone, medium-light skin tone
1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FD    ; fully-qualified     # 🧑🏿‍🤝‍🧑🏽 people holding hands: dark skin tone, medium skin tone
1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FE    ; fully-qualified     # 🧑🏿‍🤝‍🧑🏾 people holding hands: dark skin tone, medium-dark skin tone
1F9D1 1F3FF 200D 1F91D 200D 1F9D1 1F3FF    ; fully-qualified     # 🧑🏿‍🤝‍🧑🏿 people holding hands: dark skin tone
1F46D                                      ; fully-qualified     # 👭 women holding hands
1F46D 1F3FB                                ; fully-qualified     # 👭🏻 women holding hands: light skin tone
1F469 1F3FC 200D 1F91D 200D 1F469 1F3FB    ; fully-qualified     # 👩🏼‍🤝‍👩🏻 women holding hands: medium-light skin tone, light skin tone
1F46D 1F3FC                                ; fully-qualified     # 👭🏼 women holding hands: medium-light skin tone
1F469 1F3FD 200D 1F91D 200D 1F469 1F3FB    ; fully-qualified     # 👩🏽‍🤝‍👩🏻 women holding hands: medium skin tone, light skin tone
1F469 1F3FD 200D 1F91D 200D 1F469 1F3FC    ; fully-qualified     # 👩🏽‍🤝‍👩🏼 women holding hands: medium skin tone, medium-light skin tone
1F46D 1F3FD                                ; fully-qualified     # 👭🏽 women holding hands: medium skin tone
1F469 1F3FE 200D 1F91D 200D 1F469 1F3FB    ; fully-qualified     # 👩🏾‍🤝‍👩🏻 women holding hands: medium-dark skin tone, light skin tone
1F469 1F3FE 200D 1F91D 200D 1F469 1F3FC    ; fully-qualified     # 👩🏾‍🤝‍👩🏼 women holding hands: medium-dark skin tone, medium-light skin tone
1F469 1F3FE 200D 1F91D 200D 1F469 1F3FD    ; fully-qualified     # 👩🏾‍🤝‍👩🏽 women holding hands: medium-dark skin tone, medium skin tone
1F46D 1F3FE                                ; fully-qualified     # 👭🏾 women holding hands: medium-dark skin tone
1F469 1F3FF 200D 1F91D 200D 1F469 1F3FB    ; fully-qualified     # 👩🏿‍🤝‍👩🏻 women holding hands: dark skin tone, light skin tone
1F469 1F3FF 200D 1F91D 200D 1F469 1F3FC    ; fully-qualified     # 👩🏿‍🤝‍👩🏼 women holding hands: dark skin tone, medium-light skin tone
1F469 1F3FF 200D 1F91D 200D 1F469 1F3FD    ; fully-qualified     # 👩🏿‍🤝‍👩🏽 women holding hands: dark skin tone, medium skin tone
1F469 1F3FF 200D 1F91D 200D 1F469 1F3FE    ; fully-qualified     # 👩🏿‍🤝‍👩🏾 women holding hands: dark skin tone, medium-dark skin tone
1F46D 1F3FF                                ; fully-qualified     # 👭🏿 women holding hands: dark skin tone
1F46B                                      ; fully-qualified     # 👫 woman and man holding hands
1F46B 1F3FB                                ; fully-qualified     # 👫🏻 woman and man holding hands: light skin tone
1F469 1F3FB 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👩🏻‍🤝‍👨🏼 woman and man holding hands: light skin tone, medium-light skin tone
1F469 1F3FB 200D 1F91D 200D 1F468 1F3FD    ; fully-qualified     # 👩🏻‍🤝‍👨🏽 woman and man holding hands: light skin tone, medium skin tone
1F469 1F3FB 200D 1F91D 200D 1F468 1F3FE    ; fully-qualified     # 👩🏻‍🤝‍👨🏾 woman and man holding hands: light skin tone, medium-dark skin tone
1F469 1F3FB 200D 1F91D 200D 1F468 1F3FF    ; fully-qualified     # 👩🏻‍🤝‍👨🏿 woman and man holding hands: light skin tone, dark skin tone
1F469 1F3FC 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👩🏼‍🤝‍👨🏻 woman and man holding hands: medium-light skin tone, light skin tone
1F46B 1F3FC                                ; fully-qualified     # 👫🏼 woman and man holding hands: medium-light skin tone
1F469 1F3FC 200D 1F91D 200D 1F468 1F3FD    ; fully-qualified     # 👩🏼‍🤝‍👨🏽 woman and man holding hands: medium-light skin tone, medium skin tone
1F469 1F3FC 200D 1F91D 200D 1F468 1F3FE    ; fully-qualified     # 👩🏼‍🤝‍👨🏾 woman and man holding hands: medium-light skin tone, medium-dark skin tone
1F469 1F3FC 200D 1F91D 200D 1F468 1F3FF    ; fully-qualified     # 👩🏼‍🤝‍👨🏿 woman and man holding hands: medium-light skin tone, dark skin tone
1F469 1F3FD 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👩🏽‍🤝‍👨🏻 woman and man holding hands: medium skin tone, light skin tone
1F469 1F3FD 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👩🏽‍🤝‍👨🏼 woman and man holding hands: medium skin tone, medium-light skin tone
1F46B 1F3FD                                ; fully-qualified     # 👫🏽 woman and man holding hands: medium skin tone
1F469 1F3FD 200D 1F91D 200D 1F468 1F3FE    ; fully-qualified     # 👩🏽‍🤝‍👨🏾 woman and man holding hands: medium skin tone, medium-dark skin tone
1F469 1F3FD 200D 1F91D 200D 1F468 1F3FF    ; fully-qualified     # 👩🏽‍🤝‍👨🏿 woman and man holding hands: medium skin tone, dark skin tone
1F469 1F3FE 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👩🏾‍🤝‍👨🏻 woman and man holding hands: medium-dark skin tone, light skin tone
1F469 1F3FE 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👩🏾‍🤝‍👨🏼 woman and man holding hands: medium-dark skin tone, medium-light skin tone
1F469 1F3FE 200D 1F91D 200D 1F468 1F3FD    ; fully-qualified     # 👩🏾‍🤝‍👨🏽 woman and man holding hands: medium-dark skin tone, medium skin tone
1F46B 1F3FE                                ; fully-qualified     # 👫🏾 woman and man holding hands: medium-dark skin tone
1F469 1F3FE 200D 1F91D 200D 1F468 1F3FF    ; fully-qualified     # 👩🏾‍🤝‍👨🏿 woman and man holding hands: medium-dark skin tone, dark skin tone
1F469 1F3FF 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👩🏿‍🤝‍👨🏻 woman and man holding hands: dark skin tone, light skin tone
1F469 1F3FF 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👩🏿‍🤝‍👨🏼 woman and man holding hands: dark skin tone, medium-light skin tone
1F469 1F3FF 200D 1F91D 200D 1F468 1F3FD    ; fully-qualified     # 👩🏿‍🤝‍👨🏽 woman and man holding hands: dark skin tone, medium skin tone
1F469 1F3FF 200D 1F91D 200D 1F468 1F3FE    ; fully-qualified     # 👩🏿‍🤝‍👨🏾 woman and man holding hands: dark skin tone, medium-dark skin tone
1F46B 1F3FF                                ; fully-qualified     # 👫🏿 woman and man holding hands: dark skin tone
1F46C                                      ; fully-qualified     # 👬 men holding hands
1F46C 1F3FB                                ; fully-qualified     # 👬🏻 men holding hands: light skin tone
1F468 1F3FC 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👨🏼‍🤝‍👨🏻 men holding hands: medium-light skin tone, light skin tone
1F46C 1F3FC                                ; fully-qualified     # 👬🏼 men holding hands: medium-light skin tone
1F468 1F3FD 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👨🏽‍🤝‍👨🏻 men holding hands: medium skin tone, light skin tone
1F468 1F3FD 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👨🏽‍🤝‍👨🏼 men holding hands: medium skin tone, medium-light skin tone
1F46C 1F3FD                                ; fully-qualified     # 👬🏽 men holding hands: medium skin tone
1F468 1F3FE 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👨🏾‍🤝‍👨🏻 men holding hands: medium-dark skin tone, light skin tone
1F468 1F3FE 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👨🏾‍🤝‍👨🏼 men holding hands: medium-dark skin tone, medium-light skin tone
1F468 1F3FE 200D 1F91D 200D 1F468 1F3FD    ; fully-qualified     # 👨🏾‍🤝‍👨🏽 men holding hands: medium-dark skin tone, medium skin tone
1F46C 1F3FE                                ; fully-qualified     # 👬🏾 men holding hands: medium-dark skin tone
1F468 1F3FF 200D 1F91D 200D 1F468 1F3FB    ; fully-qualified     # 👨🏿‍🤝‍👨🏻 men holding hands: dark skin tone, light skin tone
1F468 1F3FF 200D 1F91D 200D 1F468 1F3FC    ; fully-qualified     # 👨🏿‍🤝‍👨🏼 men holding hands: dark skin tone, medium-light skin tone
1F468 1F3FF 200D 1F91D 200D 1F468 1F3FD    ; fully-qualified     # 👨🏿‍🤝‍👨🏽 men holding hands: dark skin tone, medium skin tone
1F468 1F3FF 200D 1F91D 200D 1F468 1F3FE    ; fully-qualified     # 👨🏿‍🤝‍👨🏾 men holding hands: dark skin tone, medium-dark skin tone
1F46C 1F3FF                                ; fully-qualified     # 👬🏿 men holding hands: dark skin tone
1F48F                                      ; fully-qualified     # 💏 kiss
1F469 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified     # 👩‍❤️‍💋‍👨 kiss: woman, man
1F469 200D 2764 200D 1F48B 200D 1F468      ; minimally-qualified # 👩‍❤‍💋‍👨 kiss: woman, man
1F468 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified     # 👨‍❤️‍💋‍👨 kiss: man, man
1F468 200D 2764 200D 1F48B 200D 1F468      ; minimally-qualified # 👨‍❤‍💋‍👨 kiss: man, man
1F469 200D 2764 FE0F 200D 1F48B 200D 1F469 ; fully-qualified     # 👩‍❤️‍💋‍👩 kiss: woman, woman
1F469 200D 2764 200D 1F48B 200D 1F469      ; minimally-qualified # 👩‍❤‍💋‍👩 kiss: woman, woman
1F491                                      ; fully-qualified     # 💑 couple with heart
1F469 200D 2764 FE0F 200D 1F468            ; fully-qualified     # 👩‍❤️‍👨 couple with heart: woman, man
1F469 200D 2764 200D 1F468                 ; minimally-qualified # 👩‍❤‍👨 couple with heart: woman, man
1F468 200D 2764 FE0F 200D 1F468            ; fully-qualified     # 👨‍❤️‍👨 couple with heart: man, man
1F468 200D 2764 200D 1F468                 ; minimally-qualified # 👨‍❤‍👨 couple with heart: man, man
1F469 200D 2764 FE0F 200D 1F469            ; fully-qualified     # 👩‍❤️‍👩 couple with heart: woman, woman
1F469 200D 2764 200D 1F469                 ; minimally-qualified # 👩‍❤‍👩 couple with heart: woman, woman
1F46A                                      ; fully-qualified     # 👪 family
1F468 200D 1F469 200D 1F466                ; fully-qualified     # 👨‍👩‍👦 family: man, woman, boy
1F468 200D 1F469 200D 1F467                ; fully-qualified     # 👨‍👩‍👧 family: man, woman, girl
1F468 200D 1F469 200D 1F467 200D 1F466     ; fully-qualified     # 👨‍👩‍👧‍👦 family: man, woman, girl, boy
1F468 200D 1F469 200D 1F466 200D 1F466     ; fully-qualified     # 👨‍👩‍👦‍👦 family: man, woman, boy, boy
1F468 200D 1F469 200D 1F467 200D 1F467     ; fully-qualified     # 👨‍👩‍👧‍👧 family: man, woman, girl, girl
1F468 200D 1F468 200D 1F466                ; fully-qualified     # 👨‍👨‍👦 family: man, man, boy
1F468 200D 1F468 200D 1F467                ; fully-qualified     # 👨‍👨‍👧 family: man, man, girl
1F468 200D 1F468 200D 1F467 200D 1F466     ; fully-qualified     # 👨‍👨‍👧‍👦 family: man, man, girl, boy
1F468 200D 1F468 200D 1F466 200D 1F466     ; fully-qualified     # 👨‍👨‍👦‍👦 family: man, man, boy, boy
1F468 200D 1F468 200D 1F467 200D 1F467     ; fully-qualified     # 👨‍👨‍👧‍👧 family: man, man, girl, girl
1F469 200D 1F469 200D 1F466                ; fully-qualified     # 👩‍👩‍👦 family: woman, woman, boy
1F469 200D 1F469 200D 1F467                ; fully-qualified     # 👩‍👩‍👧 family: woman, woman, girl
1F469 200D 1F469 200D 1F467 200D 1F466     ; fully-qualified     # 👩‍👩‍👧‍👦 family: woman, woman, girl, boy
1F469 200D 1F469 200D 1F466 200D 1F466     ; fully-qualified     # 👩‍👩‍👦‍👦 family: woman, woman, boy, boy
1F469 200D 1F469 200D 1F467 200D 1F467     ; fully-qualified     # 👩‍👩‍👧‍👧 family: woman, woman, girl, girl
1F468 200D 1F466                           ; fully-qualified     # 👨‍👦 family: man, boy
1F468 200D 1F466 200D 1F466                ; fully-qualified     # 👨‍👦‍👦 family: man, boy, boy
1F468 200D 1F467                           ; fully-qualified     # 👨‍👧 family: man, girl
1F468 200D 1F467 200D 1F466                ; fully-qualified     # 👨‍👧‍👦 family: man, girl, boy
1F468 200D 1F467 200D 1F467                ; fully-qualified     # 👨‍👧‍👧 family: man, girl, girl
1F469 200D 1F466                           ; fully-qualified     # 👩‍👦 family: woman, boy
1F469 200D 1F466 200D 1F466                ; fully-qualified     # 👩‍👦‍👦 family: woman, boy, boy
1F469 200D 1F467                           ; fully-qualified     # 👩‍👧 family: woman, girl
1F469 200D 1F467 200D 1F466                ; fully-qualified     # 👩‍👧‍👦 family: woman, girl, boy
1F469 200D 1F467 200D 1F467                ; fully-qualified     # 👩‍👧‍👧 family: woman, girl, girl

# subgroup: person-symbol
1F5E3 FE0F                                 ; fully-qualified     # 🗣️ speaking head
1F5E3                                      ; unqualified         # 🗣 speaking head
1F464                                      ; fully-qualified     # 👤 bust in silhouette
1F465                                      ; fully-qualified     # 👥 busts in silhouette
1F463                                      ; fully-qualified     # 👣 footprints

# People & Body subtotal:\t\t2212
# People & Body subtotal:\t\t447\tw/o modifiers

# group: Component

# subgroup: skin-tone
1F3FB                                      ; component           # 🏻 light skin tone
1F3FC                                      ; component           # 🏼 medium-light skin tone
1F3FD                                      ; component           # 🏽 medium skin tone
1F3FE                                      ; component           # 🏾 medium-dark skin tone
1F3FF                                      ; component           # 🏿 dark skin tone

# subgroup: hair-style
1F9B0                                      ; component           # 🦰 red hair
1F9B1                                      ; component           # 🦱 curly hair
1F9B3                                      ; component           # 🦳 white hair
1F9B2                                      ; component           # 🦲 bald

# Component subtotal:\t\t9
# Component subtotal:\t\t4\tw/o modifiers

# group: Animals & Nature

# subgroup: animal-mammal
1F435                                      ; fully-qualified     # 🐵 monkey face
1F412                                      ; fully-qualified     # 🐒 monkey
1F98D                                      ; fully-qualified     # 🦍 gorilla
1F9A7                                      ; fully-qualified     # 🦧 orangutan
1F436                                      ; fully-qualified     # 🐶 dog face
1F415                                      ; fully-qualified     # 🐕 dog
1F9AE                                      ; fully-qualified     # 🦮 guide dog
1F415 200D 1F9BA                           ; fully-qualified     # 🐕‍🦺 service dog
1F429                                      ; fully-qualified     # 🐩 poodle
1F43A                                      ; fully-qualified     # 🐺 wolf
1F98A                                      ; fully-qualified     # 🦊 fox
1F99D                                      ; fully-qualified     # 🦝 raccoon
1F431                                      ; fully-qualified     # 🐱 cat face
1F408                                      ; fully-qualified     # 🐈 cat
1F981                                      ; fully-qualified     # 🦁 lion
1F42F                                      ; fully-qualified     # 🐯 tiger face
1F405                                      ; fully-qualified     # 🐅 tiger
1F406                                      ; fully-qualified     # 🐆 leopard
1F434                                      ; fully-qualified     # 🐴 horse face
1F40E                                      ; fully-qualified     # 🐎 horse
1F984                                      ; fully-qualified     # 🦄 unicorn
1F993                                      ; fully-qualified     # 🦓 zebra
1F98C                                      ; fully-qualified     # 🦌 deer
1F42E                                      ; fully-qualified     # 🐮 cow face
1F402                                      ; fully-qualified     # 🐂 ox
1F403                                      ; fully-qualified     # 🐃 water buffalo
1F404                                      ; fully-qualified     # 🐄 cow
1F437                                      ; fully-qualified     # 🐷 pig face
1F416                                      ; fully-qualified     # 🐖 pig
1F417                                      ; fully-qualified     # 🐗 boar
1F43D                                      ; fully-qualified     # 🐽 pig nose
1F40F                                      ; fully-qualified     # 🐏 ram
1F411                                      ; fully-qualified     # 🐑 ewe
1F410                                      ; fully-qualified     # 🐐 goat
1F42A                                      ; fully-qualified     # 🐪 camel
1F42B                                      ; fully-qualified     # 🐫 two-hump camel
1F999                                      ; fully-qualified     # 🦙 llama
1F992                                      ; fully-qualified     # 🦒 giraffe
1F418                                      ; fully-qualified     # 🐘 elephant
1F98F                                      ; fully-qualified     # 🦏 rhinoceros
1F99B                                      ; fully-qualified     # 🦛 hippopotamus
1F42D                                      ; fully-qualified     # 🐭 mouse face
1F401                                      ; fully-qualified     # 🐁 mouse
1F400                                      ; fully-qualified     # 🐀 rat
1F439                                      ; fully-qualified     # 🐹 hamster
1F430                                      ; fully-qualified     # 🐰 rabbit face
1F407                                      ; fully-qualified     # 🐇 rabbit
1F43F FE0F                                 ; fully-qualified     # 🐿️ chipmunk
1F43F                                      ; unqualified         # 🐿 chipmunk
1F994                                      ; fully-qualified     # 🦔 hedgehog
1F987                                      ; fully-qualified     # 🦇 bat
1F43B                                      ; fully-qualified     # 🐻 bear
1F428                                      ; fully-qualified     # 🐨 koala
1F43C                                      ; fully-qualified     # 🐼 panda
1F9A5                                      ; fully-qualified     # 🦥 sloth
1F9A6                                      ; fully-qualified     # 🦦 otter
1F9A8                                      ; fully-qualified     # 🦨 skunk
1F998                                      ; fully-qualified     # 🦘 kangaroo
1F9A1                                      ; fully-qualified     # 🦡 badger
1F43E                                      ; fully-qualified     # 🐾 paw prints

# subgroup: animal-bird
1F983                                      ; fully-qualified     # 🦃 turkey
1F414                                      ; fully-qualified     # 🐔 chicken
1F413                                      ; fully-qualified     # 🐓 rooster
1F423                                      ; fully-qualified     # 🐣 hatching chick
1F424                                      ; fully-qualified     # 🐤 baby chick
1F425                                      ; fully-qualified     # 🐥 front-facing baby chick
1F426                                      ; fully-qualified     # 🐦 bird
1F427                                      ; fully-qualified     # 🐧 penguin
1F54A FE0F                                 ; fully-qualified     # 🕊️ dove
1F54A                                      ; unqualified         # 🕊 dove
1F985                                      ; fully-qualified     # 🦅 eagle
1F986                                      ; fully-qualified     # 🦆 duck
1F9A2                                      ; fully-qualified     # 🦢 swan
1F989                                      ; fully-qualified     # 🦉 owl
1F9A9                                      ; fully-qualified     # 🦩 flamingo
1F99A                                      ; fully-qualified     # 🦚 peacock
1F99C                                      ; fully-qualified     # 🦜 parrot

# subgroup: animal-amphibian
1F438                                      ; fully-qualified     # 🐸 frog

# subgroup: animal-reptile
1F40A                                      ; fully-qualified     # 🐊 crocodile
1F422                                      ; fully-qualified     # 🐢 turtle
1F98E                                      ; fully-qualified     # 🦎 lizard
1F40D                                      ; fully-qualified     # 🐍 snake
1F432                                      ; fully-qualified     # 🐲 dragon face
1F409                                      ; fully-qualified     # 🐉 dragon
1F995                                      ; fully-qualified     # 🦕 sauropod
1F996                                      ; fully-qualified     # 🦖 T-Rex

# subgroup: animal-marine
1F433                                      ; fully-qualified     # 🐳 spouting whale
1F40B                                      ; fully-qualified     # 🐋 whale
1F42C                                      ; fully-qualified     # 🐬 dolphin
1F41F                                      ; fully-qualified     # 🐟 fish
1F420                                      ; fully-qualified     # 🐠 tropical fish
1F421                                      ; fully-qualified     # 🐡 blowfish
1F988                                      ; fully-qualified     # 🦈 shark
1F419                                      ; fully-qualified     # 🐙 octopus
1F41A                                      ; fully-qualified     # 🐚 spiral shell

# subgroup: animal-bug
1F40C                                      ; fully-qualified     # 🐌 snail
1F98B                                      ; fully-qualified     # 🦋 butterfly
1F41B                                      ; fully-qualified     # 🐛 bug
1F41C                                      ; fully-qualified     # 🐜 ant
1F41D                                      ; fully-qualified     # 🐝 honeybee
1F41E                                      ; fully-qualified     # 🐞 lady beetle
1F997                                      ; fully-qualified     # 🦗 cricket
1F577 FE0F                                 ; fully-qualified     # 🕷️ spider
1F577                                      ; unqualified         # 🕷 spider
1F578 FE0F                                 ; fully-qualified     # 🕸️ spider web
1F578                                      ; unqualified         # 🕸 spider web
1F982                                      ; fully-qualified     # 🦂 scorpion
1F99F                                      ; fully-qualified     # 🦟 mosquito
1F9A0                                      ; fully-qualified     # 🦠 microbe

# subgroup: plant-flower
1F490                                      ; fully-qualified     # 💐 bouquet
1F338                                      ; fully-qualified     # 🌸 cherry blossom
1F4AE                                      ; fully-qualified     # 💮 white flower
1F3F5 FE0F                                 ; fully-qualified     # 🏵️ rosette
1F3F5                                      ; unqualified         # 🏵 rosette
1F339                                      ; fully-qualified     # 🌹 rose
1F940                                      ; fully-qualified     # 🥀 wilted flower
1F33A                                      ; fully-qualified     # 🌺 hibiscus
1F33B                                      ; fully-qualified     # 🌻 sunflower
1F33C                                      ; fully-qualified     # 🌼 blossom
1F337                                      ; fully-qualified     # 🌷 tulip

# subgroup: plant-other
1F331                                      ; fully-qualified     # 🌱 seedling
1F332                                      ; fully-qualified     # 🌲 evergreen tree
1F333                                      ; fully-qualified     # 🌳 deciduous tree
1F334                                      ; fully-qualified     # 🌴 palm tree
1F335                                      ; fully-qualified     # 🌵 cactus
1F33E                                      ; fully-qualified     # 🌾 sheaf of rice
1F33F                                      ; fully-qualified     # 🌿 herb
2618 FE0F                                  ; fully-qualified     # ☘️ shamrock
2618                                       ; unqualified         # ☘ shamrock
1F340                                      ; fully-qualified     # 🍀 four leaf clover
1F341                                      ; fully-qualified     # 🍁 maple leaf
1F342                                      ; fully-qualified     # 🍂 fallen leaf
1F343                                      ; fully-qualified     # 🍃 leaf fluttering in wind

# Animals & Nature subtotal:\t\t133
# Animals & Nature subtotal:\t\t133\tw/o modifiers

# group: Food & Drink

# subgroup: food-fruit
1F347                                      ; fully-qualified     # 🍇 grapes
1F348                                      ; fully-qualified     # 🍈 melon
1F349                                      ; fully-qualified     # 🍉 watermelon
1F34A                                      ; fully-qualified     # 🍊 tangerine
1F34B                                      ; fully-qualified     # 🍋 lemon
1F34C                                      ; fully-qualified     # 🍌 banana
1F34D                                      ; fully-qualified     # 🍍 pineapple
1F96D                                      ; fully-qualified     # 🥭 mango
1F34E                                      ; fully-qualified     # 🍎 red apple
1F34F                                      ; fully-qualified     # 🍏 green apple
1F350                                      ; fully-qualified     # 🍐 pear
1F351                                      ; fully-qualified     # 🍑 peach
1F352                                      ; fully-qualified     # 🍒 cherries
1F353                                      ; fully-qualified     # 🍓 strawberry
1F95D                                      ; fully-qualified     # 🥝 kiwi fruit
1F345                                      ; fully-qualified     # 🍅 tomato
1F965                                      ; fully-qualified     # 🥥 coconut

# subgroup: food-vegetable
1F951                                      ; fully-qualified     # 🥑 avocado
1F346                                      ; fully-qualified     # 🍆 eggplant
1F954                                      ; fully-qualified     # 🥔 potato
1F955                                      ; fully-qualified     # 🥕 carrot
1F33D                                      ; fully-qualified     # 🌽 ear of corn
1F336 FE0F                                 ; fully-qualified     # 🌶️ hot pepper
1F336                                      ; unqualified         # 🌶 hot pepper
1F952                                      ; fully-qualified     # 🥒 cucumber
1F96C                                      ; fully-qualified     # 🥬 leafy green
1F966                                      ; fully-qualified     # 🥦 broccoli
1F9C4                                      ; fully-qualified     # 🧄 garlic
1F9C5                                      ; fully-qualified     # 🧅 onion
1F344                                      ; fully-qualified     # 🍄 mushroom
1F95C                                      ; fully-qualified     # 🥜 peanuts
1F330                                      ; fully-qualified     # 🌰 chestnut

# subgroup: food-prepared
1F35E                                      ; fully-qualified     # 🍞 bread
1F950                                      ; fully-qualified     # 🥐 croissant
1F956                                      ; fully-qualified     # 🥖 baguette bread
1F968                                      ; fully-qualified     # 🥨 pretzel
1F96F                                      ; fully-qualified     # 🥯 bagel
1F95E                                      ; fully-qualified     # 🥞 pancakes
1F9C7                                      ; fully-qualified     # 🧇 waffle
1F9C0                                      ; fully-qualified     # 🧀 cheese wedge
1F356                                      ; fully-qualified     # 🍖 meat on bone
1F357                                      ; fully-qualified     # 🍗 poultry leg
1F969                                      ; fully-qualified     # 🥩 cut of meat
1F953                                      ; fully-qualified     # 🥓 bacon
1F354                                      ; fully-qualified     # 🍔 hamburger
1F35F                                      ; fully-qualified     # 🍟 french fries
1F355                                      ; fully-qualified     # 🍕 pizza
1F32D                                      ; fully-qualified     # 🌭 hot dog
1F96A                                      ; fully-qualified     # 🥪 sandwich
1F32E                                      ; fully-qualified     # 🌮 taco
1F32F                                      ; fully-qualified     # 🌯 burrito
1F959                                      ; fully-qualified     # 🥙 stuffed flatbread
1F9C6                                      ; fully-qualified     # 🧆 falafel
1F95A                                      ; fully-qualified     # 🥚 egg
1F373                                      ; fully-qualified     # 🍳 cooking
1F958                                      ; fully-qualified     # 🥘 shallow pan of food
1F372                                      ; fully-qualified     # 🍲 pot of food
1F963                                      ; fully-qualified     # 🥣 bowl with spoon
1F957                                      ; fully-qualified     # 🥗 green salad
1F37F                                      ; fully-qualified     # 🍿 popcorn
1F9C8                                      ; fully-qualified     # 🧈 butter
1F9C2                                      ; fully-qualified     # 🧂 salt
1F96B                                      ; fully-qualified     # 🥫 canned food

# subgroup: food-asian
1F371                                      ; fully-qualified     # 🍱 bento box
1F358                                      ; fully-qualified     # 🍘 rice cracker
1F359                                      ; fully-qualified     # 🍙 rice ball
1F35A                                      ; fully-qualified     # 🍚 cooked rice
1F35B                                      ; fully-qualified     # 🍛 curry rice
1F35C                                      ; fully-qualified     # 🍜 steaming bowl
1F35D                                      ; fully-qualified     # 🍝 spaghetti
1F360                                      ; fully-qualified     # 🍠 roasted sweet potato
1F362                                      ; fully-qualified     # 🍢 oden
1F363                                      ; fully-qualified     # 🍣 sushi
1F364                                      ; fully-qualified     # 🍤 fried shrimp
1F365                                      ; fully-qualified     # 🍥 fish cake with swirl
1F96E                                      ; fully-qualified     # 🥮 moon cake
1F361                                      ; fully-qualified     # 🍡 dango
1F95F                                      ; fully-qualified     # 🥟 dumpling
1F960                                      ; fully-qualified     # 🥠 fortune cookie
1F961                                      ; fully-qualified     # 🥡 takeout box

# subgroup: food-marine
1F980                                      ; fully-qualified     # 🦀 crab
1F99E                                      ; fully-qualified     # 🦞 lobster
1F990                                      ; fully-qualified     # 🦐 shrimp
1F991                                      ; fully-qualified     # 🦑 squid
1F9AA                                      ; fully-qualified     # 🦪 oyster

# subgroup: food-sweet
1F366                                      ; fully-qualified     # 🍦 soft ice cream
1F367                                      ; fully-qualified     # 🍧 shaved ice
1F368                                      ; fully-qualified     # 🍨 ice cream
1F369                                      ; fully-qualified     # 🍩 doughnut
1F36A                                      ; fully-qualified     # 🍪 cookie
1F382                                      ; fully-qualified     # 🎂 birthday cake
1F370                                      ; fully-qualified     # 🍰 shortcake
1F9C1                                      ; fully-qualified     # 🧁 cupcake
1F967                                      ; fully-qualified     # 🥧 pie
1F36B                                      ; fully-qualified     # 🍫 chocolate bar
1F36C                                      ; fully-qualified     # 🍬 candy
1F36D                                      ; fully-qualified     # 🍭 lollipop
1F36E                                      ; fully-qualified     # 🍮 custard
1F36F                                      ; fully-qualified     # 🍯 honey pot

# subgroup: drink
1F37C                                      ; fully-qualified     # 🍼 baby bottle
1F95B                                      ; fully-qualified     # 🥛 glass of milk
2615                                       ; fully-qualified     # ☕ hot beverage
1F375                                      ; fully-qualified     # 🍵 teacup without handle
1F376                                      ; fully-qualified     # 🍶 sake
1F37E                                      ; fully-qualified     # 🍾 bottle with popping cork
1F377                                      ; fully-qualified     # 🍷 wine glass
1F378                                      ; fully-qualified     # 🍸 cocktail glass
1F379                                      ; fully-qualified     # 🍹 tropical drink
1F37A                                      ; fully-qualified     # 🍺 beer mug
1F37B                                      ; fully-qualified     # 🍻 clinking beer mugs
1F942                                      ; fully-qualified     # 🥂 clinking glasses
1F943                                      ; fully-qualified     # 🥃 tumbler glass
1F964                                      ; fully-qualified     # 🥤 cup with straw
1F9C3                                      ; fully-qualified     # 🧃 beverage box
1F9C9                                      ; fully-qualified     # 🧉 mate
1F9CA                                      ; fully-qualified     # 🧊 ice cube

# subgroup: dishware
1F962                                      ; fully-qualified     # 🥢 chopsticks
1F37D FE0F                                 ; fully-qualified     # 🍽️ fork and knife with plate
1F37D                                      ; unqualified         # 🍽 fork and knife with plate
1F374                                      ; fully-qualified     # 🍴 fork and knife
1F944                                      ; fully-qualified     # 🥄 spoon
1F52A                                      ; fully-qualified     # 🔪 kitchen knife
1F3FA                                      ; fully-qualified     # 🏺 amphora

# Food & Drink subtotal:\t\t123
# Food & Drink subtotal:\t\t123\tw/o modifiers

# group: Travel & Places

# subgroup: place-map
1F30D                                      ; fully-qualified     # 🌍 globe showing Europe-Africa
1F30E                                      ; fully-qualified     # 🌎 globe showing Americas
1F30F                                      ; fully-qualified     # 🌏 globe showing Asia-Australia
1F310                                      ; fully-qualified     # 🌐 globe with meridians
1F5FA FE0F                                 ; fully-qualified     # 🗺️ world map
1F5FA                                      ; unqualified         # 🗺 world map
1F5FE                                      ; fully-qualified     # 🗾 map of Japan
1F9ED                                      ; fully-qualified     # 🧭 compass

# subgroup: place-geographic
1F3D4 FE0F                                 ; fully-qualified     # 🏔️ snow-capped mountain
1F3D4                                      ; unqualified         # 🏔 snow-capped mountain
26F0 FE0F                                  ; fully-qualified     # ⛰️ mountain
26F0                                       ; unqualified         # ⛰ mountain
1F30B                                      ; fully-qualified     # 🌋 volcano
1F5FB                                      ; fully-qualified     # 🗻 mount fuji
1F3D5 FE0F                                 ; fully-qualified     # 🏕️ camping
1F3D5                                      ; unqualified         # 🏕 camping
1F3D6 FE0F                                 ; fully-qualified     # 🏖️ beach with umbrella
1F3D6                                      ; unqualified         # 🏖 beach with umbrella
1F3DC FE0F                                 ; fully-qualified     # 🏜️ desert
1F3DC                                      ; unqualified         # 🏜 desert
1F3DD FE0F                                 ; fully-qualified     # 🏝️ desert island
1F3DD                                      ; unqualified         # 🏝 desert island
1F3DE FE0F                                 ; fully-qualified     # 🏞️ national park
1F3DE                                      ; unqualified         # 🏞 national park

# subgroup: place-building
1F3DF FE0F                                 ; fully-qualified     # 🏟️ stadium
1F3DF                                      ; unqualified         # 🏟 stadium
1F3DB FE0F                                 ; fully-qualified     # 🏛️ classical building
1F3DB                                      ; unqualified         # 🏛 classical building
1F3D7 FE0F                                 ; fully-qualified     # 🏗️ building construction
1F3D7                                      ; unqualified         # 🏗 building construction
1F9F1                                      ; fully-qualified     # 🧱 brick
1F3D8 FE0F                                 ; fully-qualified     # 🏘️ houses
1F3D8                                      ; unqualified         # 🏘 houses
1F3DA FE0F                                 ; fully-qualified     # 🏚️ derelict house
1F3DA                                      ; unqualified         # 🏚 derelict house
1F3E0                                      ; fully-qualified     # 🏠 house
1F3E1                                      ; fully-qualified     # 🏡 house with garden
1F3E2                                      ; fully-qualified     # 🏢 office building
1F3E3                                      ; fully-qualified     # 🏣 Japanese post office
1F3E4                                      ; fully-qualified     # 🏤 post office
1F3E5                                      ; fully-qualified     # 🏥 hospital
1F3E6                                      ; fully-qualified     # 🏦 bank
1F3E8                                      ; fully-qualified     # 🏨 hotel
1F3E9                                      ; fully-qualified     # 🏩 love hotel
1F3EA                                      ; fully-qualified     # 🏪 convenience store
1F3EB                                      ; fully-qualified     # 🏫 school
1F3EC                                      ; fully-qualified     # 🏬 department store
1F3ED                                      ; fully-qualified     # 🏭 factory
1F3EF                                      ; fully-qualified     # 🏯 Japanese castle
1F3F0                                      ; fully-qualified     # 🏰 castle
1F492                                      ; fully-qualified     # 💒 wedding
1F5FC                                      ; fully-qualified     # 🗼 Tokyo tower
1F5FD                                      ; fully-qualified     # 🗽 Statue of Liberty

# subgroup: place-religious
26EA                                       ; fully-qualified     # ⛪ church
1F54C                                      ; fully-qualified     # 🕌 mosque
1F6D5                                      ; fully-qualified     # 🛕 hindu temple
1F54D                                      ; fully-qualified     # 🕍 synagogue
26E9 FE0F                                  ; fully-qualified     # ⛩️ shinto shrine
26E9                                       ; unqualified         # ⛩ shinto shrine
1F54B                                      ; fully-qualified     # 🕋 kaaba

# subgroup: place-other
26F2                                       ; fully-qualified     # ⛲ fountain
26FA                                       ; fully-qualified     # ⛺ tent
1F301                                      ; fully-qualified     # 🌁 foggy
1F303                                      ; fully-qualified     # 🌃 night with stars
1F3D9 FE0F                                 ; fully-qualified     # 🏙️ cityscape
1F3D9                                      ; unqualified         # 🏙 cityscape
1F304                                      ; fully-qualified     # 🌄 sunrise over mountains
1F305                                      ; fully-qualified     # 🌅 sunrise
1F306                                      ; fully-qualified     # 🌆 cityscape at dusk
1F307                                      ; fully-qualified     # 🌇 sunset
1F309                                      ; fully-qualified     # 🌉 bridge at night
2668 FE0F                                  ; fully-qualified     # ♨️ hot springs
2668                                       ; unqualified         # ♨ hot springs
1F3A0                                      ; fully-qualified     # 🎠 carousel horse
1F3A1                                      ; fully-qualified     # 🎡 ferris wheel
1F3A2                                      ; fully-qualified     # 🎢 roller coaster
1F488                                      ; fully-qualified     # 💈 barber pole
1F3AA                                      ; fully-qualified     # 🎪 circus tent

# subgroup: transport-ground
1F682                                      ; fully-qualified     # 🚂 locomotive
1F683                                      ; fully-qualified     # 🚃 railway car
1F684                                      ; fully-qualified     # 🚄 high-speed train
1F685                                      ; fully-qualified     # 🚅 bullet train
1F686                                      ; fully-qualified     # 🚆 train
1F687                                      ; fully-qualified     # 🚇 metro
1F688                                      ; fully-qualified     # 🚈 light rail
1F689                                      ; fully-qualified     # 🚉 station
1F68A                                      ; fully-qualified     # 🚊 tram
1F69D                                      ; fully-qualified     # 🚝 monorail
1F69E                                      ; fully-qualified     # 🚞 mountain railway
1F68B                                      ; fully-qualified     # 🚋 tram car
1F68C                                      ; fully-qualified     # 🚌 bus
1F68D                                      ; fully-qualified     # 🚍 oncoming bus
1F68E                                      ; fully-qualified     # 🚎 trolleybus
1F690                                      ; fully-qualified     # 🚐 minibus
1F691                                      ; fully-qualified     # 🚑 ambulance
1F692                                      ; fully-qualified     # 🚒 fire engine
1F693                                      ; fully-qualified     # 🚓 police car
1F694                                      ; fully-qualified     # 🚔 oncoming police car
1F695                                      ; fully-qualified     # 🚕 taxi
1F696                                      ; fully-qualified     # 🚖 oncoming taxi
1F697                                      ; fully-qualified     # 🚗 automobile
1F698                                      ; fully-qualified     # 🚘 oncoming automobile
1F699                                      ; fully-qualified     # 🚙 sport utility vehicle
1F69A                                      ; fully-qualified     # 🚚 delivery truck
1F69B                                      ; fully-qualified     # 🚛 articulated lorry
1F69C                                      ; fully-qualified     # 🚜 tractor
1F3CE FE0F                                 ; fully-qualified     # 🏎️ racing car
1F3CE                                      ; unqualified         # 🏎 racing car
1F3CD FE0F                                 ; fully-qualified     # 🏍️ motorcycle
1F3CD                                      ; unqualified         # 🏍 motorcycle
1F6F5                                      ; fully-qualified     # 🛵 motor scooter
1F9BD                                      ; fully-qualified     # 🦽 manual wheelchair
1F9BC                                      ; fully-qualified     # 🦼 motorized wheelchair
1F6FA                                      ; fully-qualified     # 🛺 auto rickshaw
1F6B2                                      ; fully-qualified     # 🚲 bicycle
1F6F4                                      ; fully-qualified     # 🛴 kick scooter
1F6F9                                      ; fully-qualified     # 🛹 skateboard
1F68F                                      ; fully-qualified     # 🚏 bus stop
1F6E3 FE0F                                 ; fully-qualified     # 🛣️ motorway
1F6E3                                      ; unqualified         # 🛣 motorway
1F6E4 FE0F                                 ; fully-qualified     # 🛤️ railway track
1F6E4                                      ; unqualified         # 🛤 railway track
1F6E2 FE0F                                 ; fully-qualified     # 🛢️ oil drum
1F6E2                                      ; unqualified         # 🛢 oil drum
26FD                                       ; fully-qualified     # ⛽ fuel pump
1F6A8                                      ; fully-qualified     # 🚨 police car light
1F6A5                                      ; fully-qualified     # 🚥 horizontal traffic light
1F6A6                                      ; fully-qualified     # 🚦 vertical traffic light
1F6D1                                      ; fully-qualified     # 🛑 stop sign
1F6A7                                      ; fully-qualified     # 🚧 construction

# subgroup: transport-water
2693                                       ; fully-qualified     # ⚓ anchor
26F5                                       ; fully-qualified     # ⛵ sailboat
1F6F6                                      ; fully-qualified     # 🛶 canoe
1F6A4                                      ; fully-qualified     # 🚤 speedboat
1F6F3 FE0F                                 ; fully-qualified     # 🛳️ passenger ship
1F6F3                                      ; unqualified         # 🛳 passenger ship
26F4 FE0F                                  ; fully-qualified     # ⛴️ ferry
26F4                                       ; unqualified         # ⛴ ferry
1F6E5 FE0F                                 ; fully-qualified     # 🛥️ motor boat
1F6E5                                      ; unqualified         # 🛥 motor boat
1F6A2                                      ; fully-qualified     # 🚢 ship

# subgroup: transport-air
2708 FE0F                                  ; fully-qualified     # ✈️ airplane
2708                                       ; unqualified         # ✈ airplane
1F6E9 FE0F                                 ; fully-qualified     # 🛩️ small airplane
1F6E9                                      ; unqualified         # 🛩 small airplane
1F6EB                                      ; fully-qualified     # 🛫 airplane departure
1F6EC                                      ; fully-qualified     # 🛬 airplane arrival
1FA82                                      ; fully-qualified     # 🪂 parachute
1F4BA                                      ; fully-qualified     # 💺 seat
1F681                                      ; fully-qualified     # 🚁 helicopter
1F69F                                      ; fully-qualified     # 🚟 suspension railway
1F6A0                                      ; fully-qualified     # 🚠 mountain cableway
1F6A1                                      ; fully-qualified     # 🚡 aerial tramway
1F6F0 FE0F                                 ; fully-qualified     # 🛰️ satellite
1F6F0                                      ; unqualified         # 🛰 satellite
1F680                                      ; fully-qualified     # 🚀 rocket
1F6F8                                      ; fully-qualified     # 🛸 flying saucer

# subgroup: hotel
1F6CE FE0F                                 ; fully-qualified     # 🛎️ bellhop bell
1F6CE                                      ; unqualified         # 🛎 bellhop bell
1F9F3                                      ; fully-qualified     # 🧳 luggage

# subgroup: time
231B                                       ; fully-qualified     # ⌛ hourglass done
23F3                                       ; fully-qualified     # ⏳ hourglass not done
231A                                       ; fully-qualified     # ⌚ watch
23F0                                       ; fully-qualified     # ⏰ alarm clock
23F1 FE0F                                  ; fully-qualified     # ⏱️ stopwatch
23F1                                       ; unqualified         # ⏱ stopwatch
23F2 FE0F                                  ; fully-qualified     # ⏲️ timer clock
23F2                                       ; unqualified         # ⏲ timer clock
1F570 FE0F                                 ; fully-qualified     # 🕰️ mantelpiece clock
1F570                                      ; unqualified         # 🕰 mantelpiece clock
1F55B                                      ; fully-qualified     # 🕛 twelve o’clock
1F567                                      ; fully-qualified     # 🕧 twelve-thirty
1F550                                      ; fully-qualified     # 🕐 one o’clock
1F55C                                      ; fully-qualified     # 🕜 one-thirty
1F551                                      ; fully-qualified     # 🕑 two o’clock
1F55D                                      ; fully-qualified     # 🕝 two-thirty
1F552                                      ; fully-qualified     # 🕒 three o’clock
1F55E                                      ; fully-qualified     # 🕞 three-thirty
1F553                                      ; fully-qualified     # 🕓 four o’clock
1F55F                                      ; fully-qualified     # 🕟 four-thirty
1F554                                      ; fully-qualified     # 🕔 five o’clock
1F560                                      ; fully-qualified     # 🕠 five-thirty
1F555                                      ; fully-qualified     # 🕕 six o’clock
1F561                                      ; fully-qualified     # 🕡 six-thirty
1F556                                      ; fully-qualified     # 🕖 seven o’clock
1F562                                      ; fully-qualified     # 🕢 seven-thirty
1F557                                      ; fully-qualified     # 🕗 eight o’clock
1F563                                      ; fully-qualified     # 🕣 eight-thirty
1F558                                      ; fully-qualified     # 🕘 nine o’clock
1F564                                      ; fully-qualified     # 🕤 nine-thirty
1F559                                      ; fully-qualified     # 🕙 ten o’clock
1F565                                      ; fully-qualified     # 🕥 ten-thirty
1F55A                                      ; fully-qualified     # 🕚 eleven o’clock
1F566                                      ; fully-qualified     # 🕦 eleven-thirty

# subgroup: sky & weather
1F311                                      ; fully-qualified     # 🌑 new moon
1F312                                      ; fully-qualified     # 🌒 waxing crescent moon
1F313                                      ; fully-qualified     # 🌓 first quarter moon
1F314                                      ; fully-qualified     # 🌔 waxing gibbous moon
1F315                                      ; fully-qualified     # 🌕 full moon
1F316                                      ; fully-qualified     # 🌖 waning gibbous moon
1F317                                      ; fully-qualified     # 🌗 last quarter moon
1F318                                      ; fully-qualified     # 🌘 waning crescent moon
1F319                                      ; fully-qualified     # 🌙 crescent moon
1F31A                                      ; fully-qualified     # 🌚 new moon face
1F31B                                      ; fully-qualified     # 🌛 first quarter moon face
1F31C                                      ; fully-qualified     # 🌜 last quarter moon face
1F321 FE0F                                 ; fully-qualified     # 🌡️ thermometer
1F321                                      ; unqualified         # 🌡 thermometer
2600 FE0F                                  ; fully-qualified     # ☀️ sun
2600                                       ; unqualified         # ☀ sun
1F31D                                      ; fully-qualified     # 🌝 full moon face
1F31E                                      ; fully-qualified     # 🌞 sun with face
1FA90                                      ; fully-qualified     # 🪐 ringed planet
2B50                                       ; fully-qualified     # ⭐ star
1F31F                                      ; fully-qualified     # 🌟 glowing star
1F320                                      ; fully-qualified     # 🌠 shooting star
1F30C                                      ; fully-qualified     # 🌌 milky way
2601 FE0F                                  ; fully-qualified     # ☁️ cloud
2601                                       ; unqualified         # ☁ cloud
26C5                                       ; fully-qualified     # ⛅ sun behind cloud
26C8 FE0F                                  ; fully-qualified     # ⛈️ cloud with lightning and rain
26C8                                       ; unqualified         # ⛈ cloud with lightning and rain
1F324 FE0F                                 ; fully-qualified     # 🌤️ sun behind small cloud
1F324                                      ; unqualified         # 🌤 sun behind small cloud
1F325 FE0F                                 ; fully-qualified     # 🌥️ sun behind large cloud
1F325                                      ; unqualified         # 🌥 sun behind large cloud
1F326 FE0F                                 ; fully-qualified     # 🌦️ sun behind rain cloud
1F326                                      ; unqualified         # 🌦 sun behind rain cloud
1F327 FE0F                                 ; fully-qualified     # 🌧️ cloud with rain
1F327                                      ; unqualified         # 🌧 cloud with rain
1F328 FE0F                                 ; fully-qualified     # 🌨️ cloud with snow
1F328                                      ; unqualified         # 🌨 cloud with snow
1F329 FE0F                                 ; fully-qualified     # 🌩️ cloud with lightning
1F329                                      ; unqualified         # 🌩 cloud with lightning
1F32A FE0F                                 ; fully-qualified     # 🌪️ tornado
1F32A                                      ; unqualified         # 🌪 tornado
1F32B FE0F                                 ; fully-qualified     # 🌫️ fog
1F32B                                      ; unqualified         # 🌫 fog
1F32C FE0F                                 ; fully-qualified     # 🌬️ wind face
1F32C                                      ; unqualified         # 🌬 wind face
1F300                                      ; fully-qualified     # 🌀 cyclone
1F308                                      ; fully-qualified     # 🌈 rainbow
1F302                                      ; fully-qualified     # 🌂 closed umbrella
2602 FE0F                                  ; fully-qualified     # ☂️ umbrella
2602                                       ; unqualified         # ☂ umbrella
2614                                       ; fully-qualified     # ☔ umbrella with rain drops
26F1 FE0F                                  ; fully-qualified     # ⛱️ umbrella on ground
26F1                                       ; unqualified         # ⛱ umbrella on ground
26A1                                       ; fully-qualified     # ⚡ high voltage
2744 FE0F                                  ; fully-qualified     # ❄️ snowflake
2744                                       ; unqualified         # ❄ snowflake
2603 FE0F                                  ; fully-qualified     # ☃️ snowman
2603                                       ; unqualified         # ☃ snowman
26C4                                       ; fully-qualified     # ⛄ snowman without snow
2604 FE0F                                  ; fully-qualified     # ☄️ comet
2604                                       ; unqualified         # ☄ comet
1F525                                      ; fully-qualified     # 🔥 fire
1F4A7                                      ; fully-qualified     # 💧 droplet
1F30A                                      ; fully-qualified     # 🌊 water wave

# Travel & Places subtotal:\t\t259
# Travel & Places subtotal:\t\t259\tw/o modifiers

# group: Activities

# subgroup: event
1F383                                      ; fully-qualified     # 🎃 jack-o-lantern
1F384                                      ; fully-qualified     # 🎄 Christmas tree
1F386                                      ; fully-qualified     # 🎆 fireworks
1F387                                      ; fully-qualified     # 🎇 sparkler
1F9E8                                      ; fully-qualified     # 🧨 firecracker
2728                                       ; fully-qualified     # ✨ sparkles
1F388                                      ; fully-qualified     # 🎈 balloon
1F389                                      ; fully-qualified     # 🎉 party popper
1F38A                                      ; fully-qualified     # 🎊 confetti ball
1F38B                                      ; fully-qualified     # 🎋 tanabata tree
1F38D                                      ; fully-qualified     # 🎍 pine decoration
1F38E                                      ; fully-qualified     # 🎎 Japanese dolls
1F38F                                      ; fully-qualified     # 🎏 carp streamer
1F390                                      ; fully-qualified     # 🎐 wind chime
1F391                                      ; fully-qualified     # 🎑 moon viewing ceremony
1F9E7                                      ; fully-qualified     # 🧧 red envelope
1F380                                      ; fully-qualified     # 🎀 ribbon
1F381                                      ; fully-qualified     # 🎁 wrapped gift
1F397 FE0F                                 ; fully-qualified     # 🎗️ reminder ribbon
1F397                                      ; unqualified         # 🎗 reminder ribbon
1F39F FE0F                                 ; fully-qualified     # 🎟️ admission tickets
1F39F                                      ; unqualified         # 🎟 admission tickets
1F3AB                                      ; fully-qualified     # 🎫 ticket

# subgroup: award-medal
1F396 FE0F                                 ; fully-qualified     # 🎖️ military medal
1F396                                      ; unqualified         # 🎖 military medal
1F3C6                                      ; fully-qualified     # 🏆 trophy
1F3C5                                      ; fully-qualified     # 🏅 sports medal
1F947                                      ; fully-qualified     # 🥇 1st place medal
1F948                                      ; fully-qualified     # 🥈 2nd place medal
1F949                                      ; fully-qualified     # 🥉 3rd place medal

# subgroup: sport
26BD                                       ; fully-qualified     # ⚽ soccer ball
26BE                                       ; fully-qualified     # ⚾ baseball
1F94E                                      ; fully-qualified     # 🥎 softball
1F3C0                                      ; fully-qualified     # 🏀 basketball
1F3D0                                      ; fully-qualified     # 🏐 volleyball
1F3C8                                      ; fully-qualified     # 🏈 american football
1F3C9                                      ; fully-qualified     # 🏉 rugby football
1F3BE                                      ; fully-qualified     # 🎾 tennis
1F94F                                      ; fully-qualified     # 🥏 flying disc
1F3B3                                      ; fully-qualified     # 🎳 bowling
1F3CF                                      ; fully-qualified     # 🏏 cricket game
1F3D1                                      ; fully-qualified     # 🏑 field hockey
1F3D2                                      ; fully-qualified     # 🏒 ice hockey
1F94D                                      ; fully-qualified     # 🥍 lacrosse
1F3D3                                      ; fully-qualified     # 🏓 ping pong
1F3F8                                      ; fully-qualified     # 🏸 badminton
1F94A                                      ; fully-qualified     # 🥊 boxing glove
1F94B                                      ; fully-qualified     # 🥋 martial arts uniform
1F945                                      ; fully-qualified     # 🥅 goal net
26F3                                       ; fully-qualified     # ⛳ flag in hole
26F8 FE0F                                  ; fully-qualified     # ⛸️ ice skate
26F8                                       ; unqualified         # ⛸ ice skate
1F3A3                                      ; fully-qualified     # 🎣 fishing pole
1F93F                                      ; fully-qualified     # 🤿 diving mask
1F3BD                                      ; fully-qualified     # 🎽 running shirt
1F3BF                                      ; fully-qualified     # 🎿 skis
1F6F7                                      ; fully-qualified     # 🛷 sled
1F94C                                      ; fully-qualified     # 🥌 curling stone

# subgroup: game
1F3AF                                      ; fully-qualified     # 🎯 direct hit
1FA80                                      ; fully-qualified     # 🪀 yo-yo
1FA81                                      ; fully-qualified     # 🪁 kite
1F3B1                                      ; fully-qualified     # 🎱 pool 8 ball
1F52E                                      ; fully-qualified     # 🔮 crystal ball
1F9FF                                      ; fully-qualified     # 🧿 nazar amulet
1F3AE                                      ; fully-qualified     # 🎮 video game
1F579 FE0F                                 ; fully-qualified     # 🕹️ joystick
1F579                                      ; unqualified         # 🕹 joystick
1F3B0                                      ; fully-qualified     # 🎰 slot machine
1F3B2                                      ; fully-qualified     # 🎲 game die
1F9E9                                      ; fully-qualified     # 🧩 puzzle piece
1F9F8                                      ; fully-qualified     # 🧸 teddy bear
2660 FE0F                                  ; fully-qualified     # ♠️ spade suit
2660                                       ; unqualified         # ♠ spade suit
2665 FE0F                                  ; fully-qualified     # ♥️ heart suit
2665                                       ; unqualified         # ♥ heart suit
2666 FE0F                                  ; fully-qualified     # ♦️ diamond suit
2666                                       ; unqualified         # ♦ diamond suit
2663 FE0F                                  ; fully-qualified     # ♣️ club suit
2663                                       ; unqualified         # ♣ club suit
265F FE0F                                  ; fully-qualified     # ♟️ chess pawn
265F                                       ; unqualified         # ♟ chess pawn
1F0CF                                      ; fully-qualified     # 🃏 joker
1F004                                      ; fully-qualified     # 🀄 mahjong red dragon
1F3B4                                      ; fully-qualified     # 🎴 flower playing cards

# subgroup: arts & crafts
1F3AD                                      ; fully-qualified     # 🎭 performing arts
1F5BC FE0F                                 ; fully-qualified     # 🖼️ framed picture
1F5BC                                      ; unqualified         # 🖼 framed picture
1F3A8                                      ; fully-qualified     # 🎨 artist palette
1F9F5                                      ; fully-qualified     # 🧵 thread
1F9F6                                      ; fully-qualified     # 🧶 yarn

# Activities subtotal:\t\t90
# Activities subtotal:\t\t90\tw/o modifiers

# group: Objects

# subgroup: clothing
1F453                                      ; fully-qualified     # 👓 glasses
1F576 FE0F                                 ; fully-qualified     # 🕶️ sunglasses
1F576                                      ; unqualified         # 🕶 sunglasses
1F97D                                      ; fully-qualified     # 🥽 goggles
1F97C                                      ; fully-qualified     # 🥼 lab coat
1F9BA                                      ; fully-qualified     # 🦺 safety vest
1F454                                      ; fully-qualified     # 👔 necktie
1F455                                      ; fully-qualified     # 👕 t-shirt
1F456                                      ; fully-qualified     # 👖 jeans
1F9E3                                      ; fully-qualified     # 🧣 scarf
1F9E4                                      ; fully-qualified     # 🧤 gloves
1F9E5                                      ; fully-qualified     # 🧥 coat
1F9E6                                      ; fully-qualified     # 🧦 socks
1F457                                      ; fully-qualified     # 👗 dress
1F458                                      ; fully-qualified     # 👘 kimono
1F97B                                      ; fully-qualified     # 🥻 sari
1FA71                                      ; fully-qualified     # 🩱 one-piece swimsuit
1FA72                                      ; fully-qualified     # 🩲 swim brief
1FA73                                      ; fully-qualified     # 🩳 shorts
1F459                                      ; fully-qualified     # 👙 bikini
1F45A                                      ; fully-qualified     # 👚 woman’s clothes
1F45B                                      ; fully-qualified     # 👛 purse
1F45C                                      ; fully-qualified     # 👜 handbag
1F45D                                      ; fully-qualified     # 👝 clutch bag
1F6CD FE0F                                 ; fully-qualified     # 🛍️ shopping bags
1F6CD                                      ; unqualified         # 🛍 shopping bags
1F392                                      ; fully-qualified     # 🎒 backpack
1F45E                                      ; fully-qualified     # 👞 man’s shoe
1F45F                                      ; fully-qualified     # 👟 running shoe
1F97E                                      ; fully-qualified     # 🥾 hiking boot
1F97F                                      ; fully-qualified     # 🥿 flat shoe
1F460                                      ; fully-qualified     # 👠 high-heeled shoe
1F461                                      ; fully-qualified     # 👡 woman’s sandal
1FA70                                      ; fully-qualified     # 🩰 ballet shoes
1F462                                      ; fully-qualified     # 👢 woman’s boot
1F451                                      ; fully-qualified     # 👑 crown
1F452                                      ; fully-qualified     # 👒 woman’s hat
1F3A9                                      ; fully-qualified     # 🎩 top hat
1F393                                      ; fully-qualified     # 🎓 graduation cap
1F9E2                                      ; fully-qualified     # 🧢 billed cap
26D1 FE0F                                  ; fully-qualified     # ⛑️ rescue worker’s helmet
26D1                                       ; unqualified         # ⛑ rescue worker’s helmet
1F4FF                                      ; fully-qualified     # 📿 prayer beads
1F484                                      ; fully-qualified     # 💄 lipstick
1F48D                                      ; fully-qualified     # 💍 ring
1F48E                                      ; fully-qualified     # 💎 gem stone

# subgroup: sound
1F507                                      ; fully-qualified     # 🔇 muted speaker
1F508                                      ; fully-qualified     # 🔈 speaker low volume
1F509                                      ; fully-qualified     # 🔉 speaker medium volume
1F50A                                      ; fully-qualified     # 🔊 speaker high volume
1F4E2                                      ; fully-qualified     # 📢 loudspeaker
1F4E3                                      ; fully-qualified     # 📣 megaphone
1F4EF                                      ; fully-qualified     # 📯 postal horn
1F514                                      ; fully-qualified     # 🔔 bell
1F515                                      ; fully-qualified     # 🔕 bell with slash

# subgroup: music
1F3BC                                      ; fully-qualified     # 🎼 musical score
1F3B5                                      ; fully-qualified     # 🎵 musical note
1F3B6                                      ; fully-qualified     # 🎶 musical notes
1F399 FE0F                                 ; fully-qualified     # 🎙️ studio microphone
1F399                                      ; unqualified         # 🎙 studio microphone
1F39A FE0F                                 ; fully-qualified     # 🎚️ level slider
1F39A                                      ; unqualified         # 🎚 level slider
1F39B FE0F                                 ; fully-qualified     # 🎛️ control knobs
1F39B                                      ; unqualified         # 🎛 control knobs
1F3A4                                      ; fully-qualified     # 🎤 microphone
1F3A7                                      ; fully-qualified     # 🎧 headphone
1F4FB                                      ; fully-qualified     # 📻 radio

# subgroup: musical-instrument
1F3B7                                      ; fully-qualified     # 🎷 saxophone
1F3B8                                      ; fully-qualified     # 🎸 guitar
1F3B9                                      ; fully-qualified     # 🎹 musical keyboard
1F3BA                                      ; fully-qualified     # 🎺 trumpet
1F3BB                                      ; fully-qualified     # 🎻 violin
1FA95                                      ; fully-qualified     # 🪕 banjo
1F941                                      ; fully-qualified     # 🥁 drum

# subgroup: phone
1F4F1                                      ; fully-qualified     # 📱 mobile phone
1F4F2                                      ; fully-qualified     # 📲 mobile phone with arrow
260E FE0F                                  ; fully-qualified     # ☎️ telephone
260E                                       ; unqualified         # ☎ telephone
1F4DE                                      ; fully-qualified     # 📞 telephone receiver
1F4DF                                      ; fully-qualified     # 📟 pager
1F4E0                                      ; fully-qualified     # 📠 fax machine

# subgroup: computer
1F50B                                      ; fully-qualified     # 🔋 battery
1F50C                                      ; fully-qualified     # 🔌 electric plug
1F4BB                                      ; fully-qualified     # 💻 laptop computer
1F5A5 FE0F                                 ; fully-qualified     # 🖥️ desktop computer
1F5A5                                      ; unqualified         # 🖥 desktop computer
1F5A8 FE0F                                 ; fully-qualified     # 🖨️ printer
1F5A8                                      ; unqualified         # 🖨 printer
2328 FE0F                                  ; fully-qualified     # ⌨️ keyboard
2328                                       ; unqualified         # ⌨ keyboard
1F5B1 FE0F                                 ; fully-qualified     # 🖱️ computer mouse
1F5B1                                      ; unqualified         # 🖱 computer mouse
1F5B2 FE0F                                 ; fully-qualified     # 🖲️ trackball
1F5B2                                      ; unqualified         # 🖲 trackball
1F4BD                                      ; fully-qualified     # 💽 computer disk
1F4BE                                      ; fully-qualified     # 💾 floppy disk
1F4BF                                      ; fully-qualified     # 💿 optical disk
1F4C0                                      ; fully-qualified     # 📀 dvd
1F9EE                                      ; fully-qualified     # 🧮 abacus

# subgroup: light & video
1F3A5                                      ; fully-qualified     # 🎥 movie camera
1F39E FE0F                                 ; fully-qualified     # 🎞️ film frames
1F39E                                      ; unqualified         # 🎞 film frames
1F4FD FE0F                                 ; fully-qualified     # 📽️ film projector
1F4FD                                      ; unqualified         # 📽 film projector
1F3AC                                      ; fully-qualified     # 🎬 clapper board
1F4FA                                      ; fully-qualified     # 📺 television
1F4F7                                      ; fully-qualified     # 📷 camera
1F4F8                                      ; fully-qualified     # 📸 camera with flash
1F4F9                                      ; fully-qualified     # 📹 video camera
1F4FC                                      ; fully-qualified     # 📼 videocassette
1F50D                                      ; fully-qualified     # 🔍 magnifying glass tilted left
1F50E                                      ; fully-qualified     # 🔎 magnifying glass tilted right
1F56F FE0F                                 ; fully-qualified     # 🕯️ candle
1F56F                                      ; unqualified         # 🕯 candle
1F4A1                                      ; fully-qualified     # 💡 light bulb
1F526                                      ; fully-qualified     # 🔦 flashlight
1F3EE                                      ; fully-qualified     # 🏮 red paper lantern
1FA94                                      ; fully-qualified     # 🪔 diya lamp

# subgroup: book-paper
1F4D4                                      ; fully-qualified     # 📔 notebook with decorative cover
1F4D5                                      ; fully-qualified     # 📕 closed book
1F4D6                                      ; fully-qualified     # 📖 open book
1F4D7                                      ; fully-qualified     # 📗 green book
1F4D8                                      ; fully-qualified     # 📘 blue book
1F4D9                                      ; fully-qualified     # 📙 orange book
1F4DA                                      ; fully-qualified     # 📚 books
1F4D3                                      ; fully-qualified     # 📓 notebook
1F4D2                                      ; fully-qualified     # 📒 ledger
1F4C3                                      ; fully-qualified     # 📃 page with curl
1F4DC                                      ; fully-qualified     # 📜 scroll
1F4C4                                      ; fully-qualified     # 📄 page facing up
1F4F0                                      ; fully-qualified     # 📰 newspaper
1F5DE FE0F                                 ; fully-qualified     # 🗞️ rolled-up newspaper
1F5DE                                      ; unqualified         # 🗞 rolled-up newspaper
1F4D1                                      ; fully-qualified     # 📑 bookmark tabs
1F516                                      ; fully-qualified     # 🔖 bookmark
1F3F7 FE0F                                 ; fully-qualified     # 🏷️ label
1F3F7                                      ; unqualified         # 🏷 label

# subgroup: money
1F4B0                                      ; fully-qualified     # 💰 money bag
1F4B4                                      ; fully-qualified     # 💴 yen banknote
1F4B5                                      ; fully-qualified     # 💵 dollar banknote
1F4B6                                      ; fully-qualified     # 💶 euro banknote
1F4B7                                      ; fully-qualified     # 💷 pound banknote
1F4B8                                      ; fully-qualified     # 💸 money with wings
1F4B3                                      ; fully-qualified     # 💳 credit card
1F9FE                                      ; fully-qualified     # 🧾 receipt
1F4B9                                      ; fully-qualified     # 💹 chart increasing with yen
1F4B1                                      ; fully-qualified     # 💱 currency exchange
1F4B2                                      ; fully-qualified     # 💲 heavy dollar sign

# subgroup: mail
2709 FE0F                                  ; fully-qualified     # ✉️ envelope
2709                                       ; unqualified         # ✉ envelope
1F4E7                                      ; fully-qualified     # 📧 e-mail
1F4E8                                      ; fully-qualified     # 📨 incoming envelope
1F4E9                                      ; fully-qualified     # 📩 envelope with arrow
1F4E4                                      ; fully-qualified     # 📤 outbox tray
1F4E5                                      ; fully-qualified     # 📥 inbox tray
1F4E6                                      ; fully-qualified     # 📦 package
1F4EB                                      ; fully-qualified     # 📫 closed mailbox with raised flag
1F4EA                                      ; fully-qualified     # 📪 closed mailbox with lowered flag
1F4EC                                      ; fully-qualified     # 📬 open mailbox with raised flag
1F4ED                                      ; fully-qualified     # 📭 open mailbox with lowered flag
1F4EE                                      ; fully-qualified     # 📮 postbox
1F5F3 FE0F                                 ; fully-qualified     # 🗳️ ballot box with ballot
1F5F3                                      ; unqualified         # 🗳 ballot box with ballot

# subgroup: writing
270F FE0F                                  ; fully-qualified     # ✏️ pencil
270F                                       ; unqualified         # ✏ pencil
2712 FE0F                                  ; fully-qualified     # ✒️ black nib
2712                                       ; unqualified         # ✒ black nib
1F58B FE0F                                 ; fully-qualified     # 🖋️ fountain pen
1F58B                                      ; unqualified         # 🖋 fountain pen
1F58A FE0F                                 ; fully-qualified     # 🖊️ pen
1F58A                                      ; unqualified         # 🖊 pen
1F58C FE0F                                 ; fully-qualified     # 🖌️ paintbrush
1F58C                                      ; unqualified         # 🖌 paintbrush
1F58D FE0F                                 ; fully-qualified     # 🖍️ crayon
1F58D                                      ; unqualified         # 🖍 crayon
1F4DD                                      ; fully-qualified     # 📝 memo

# subgroup: office
1F4BC                                      ; fully-qualified     # 💼 briefcase
1F4C1                                      ; fully-qualified     # 📁 file folder
1F4C2                                      ; fully-qualified     # 📂 open file folder
1F5C2 FE0F                                 ; fully-qualified     # 🗂️ card index dividers
1F5C2                                      ; unqualified         # 🗂 card index dividers
1F4C5                                      ; fully-qualified     # 📅 calendar
1F4C6                                      ; fully-qualified     # 📆 tear-off calendar
1F5D2 FE0F                                 ; fully-qualified     # 🗒️ spiral notepad
1F5D2                                      ; unqualified         # 🗒 spiral notepad
1F5D3 FE0F                                 ; fully-qualified     # 🗓️ spiral calendar
1F5D3                                      ; unqualified         # 🗓 spiral calendar
1F4C7                                      ; fully-qualified     # 📇 card index
1F4C8                                      ; fully-qualified     # 📈 chart increasing
1F4C9                                      ; fully-qualified     # 📉 chart decreasing
1F4CA                                      ; fully-qualified     # 📊 bar chart
1F4CB                                      ; fully-qualified     # 📋 clipboard
1F4CC                                      ; fully-qualified     # 📌 pushpin
1F4CD                                      ; fully-qualified     # 📍 round pushpin
1F4CE                                      ; fully-qualified     # 📎 paperclip
1F587 FE0F                                 ; fully-qualified     # 🖇️ linked paperclips
1F587                                      ; unqualified         # 🖇 linked paperclips
1F4CF                                      ; fully-qualified     # 📏 straight ruler
1F4D0                                      ; fully-qualified     # 📐 triangular ruler
2702 FE0F                                  ; fully-qualified     # ✂️ scissors
2702                                       ; unqualified         # ✂ scissors
1F5C3 FE0F                                 ; fully-qualified     # 🗃️ card file box
1F5C3                                      ; unqualified         # 🗃 card file box
1F5C4 FE0F                                 ; fully-qualified     # 🗄️ file cabinet
1F5C4                                      ; unqualified         # 🗄 file cabinet
1F5D1 FE0F                                 ; fully-qualified     # 🗑️ wastebasket
1F5D1                                      ; unqualified         # 🗑 wastebasket

# subgroup: lock
1F512                                      ; fully-qualified     # 🔒 locked
1F513                                      ; fully-qualified     # 🔓 unlocked
1F50F                                      ; fully-qualified     # 🔏 locked with pen
1F510                                      ; fully-qualified     # 🔐 locked with key
1F511                                      ; fully-qualified     # 🔑 key
1F5DD FE0F                                 ; fully-qualified     # 🗝️ old key
1F5DD                                      ; unqualified         # 🗝 old key

# subgroup: tool
1F528                                      ; fully-qualified     # 🔨 hammer
1FA93                                      ; fully-qualified     # 🪓 axe
26CF FE0F                                  ; fully-qualified     # ⛏️ pick
26CF                                       ; unqualified         # ⛏ pick
2692 FE0F                                  ; fully-qualified     # ⚒️ hammer and pick
2692                                       ; unqualified         # ⚒ hammer and pick
1F6E0 FE0F                                 ; fully-qualified     # 🛠️ hammer and wrench
1F6E0                                      ; unqualified         # 🛠 hammer and wrench
1F5E1 FE0F                                 ; fully-qualified     # 🗡️ dagger
1F5E1                                      ; unqualified         # 🗡 dagger
2694 FE0F                                  ; fully-qualified     # ⚔️ crossed swords
2694                                       ; unqualified         # ⚔ crossed swords
1F52B                                      ; fully-qualified     # 🔫 pistol
1F3F9                                      ; fully-qualified     # 🏹 bow and arrow
1F6E1 FE0F                                 ; fully-qualified     # 🛡️ shield
1F6E1                                      ; unqualified         # 🛡 shield
1F527                                      ; fully-qualified     # 🔧 wrench
1F529                                      ; fully-qualified     # 🔩 nut and bolt
2699 FE0F                                  ; fully-qualified     # ⚙️ gear
2699                                       ; unqualified         # ⚙ gear
1F5DC FE0F                                 ; fully-qualified     # 🗜️ clamp
1F5DC                                      ; unqualified         # 🗜 clamp
2696 FE0F                                  ; fully-qualified     # ⚖️ balance scale
2696                                       ; unqualified         # ⚖ balance scale
1F9AF                                      ; fully-qualified     # 🦯 probing cane
1F517                                      ; fully-qualified     # 🔗 link
26D3 FE0F                                  ; fully-qualified     # ⛓️ chains
26D3                                       ; unqualified         # ⛓ chains
1F9F0                                      ; fully-qualified     # 🧰 toolbox
1F9F2                                      ; fully-qualified     # 🧲 magnet

# subgroup: science
2697 FE0F                                  ; fully-qualified     # ⚗️ alembic
2697                                       ; unqualified         # ⚗ alembic
1F9EA                                      ; fully-qualified     # 🧪 test tube
1F9EB                                      ; fully-qualified     # 🧫 petri dish
1F9EC                                      ; fully-qualified     # 🧬 dna
1F52C                                      ; fully-qualified     # 🔬 microscope
1F52D                                      ; fully-qualified     # 🔭 telescope
1F4E1                                      ; fully-qualified     # 📡 satellite antenna

# subgroup: medical
1F489                                      ; fully-qualified     # 💉 syringe
1FA78                                      ; fully-qualified     # 🩸 drop of blood
1F48A                                      ; fully-qualified     # 💊 pill
1FA79                                      ; fully-qualified     # 🩹 adhesive bandage
1FA7A                                      ; fully-qualified     # 🩺 stethoscope

# subgroup: household
1F6AA                                      ; fully-qualified     # 🚪 door
1F6CF FE0F                                 ; fully-qualified     # 🛏️ bed
1F6CF                                      ; unqualified         # 🛏 bed
1F6CB FE0F                                 ; fully-qualified     # 🛋️ couch and lamp
1F6CB                                      ; unqualified         # 🛋 couch and lamp
1FA91                                      ; fully-qualified     # 🪑 chair
1F6BD                                      ; fully-qualified     # 🚽 toilet
1F6BF                                      ; fully-qualified     # 🚿 shower
1F6C1                                      ; fully-qualified     # 🛁 bathtub
1FA92                                      ; fully-qualified     # 🪒 razor
1F9F4                                      ; fully-qualified     # 🧴 lotion bottle
1F9F7                                      ; fully-qualified     # 🧷 safety pin
1F9F9                                      ; fully-qualified     # 🧹 broom
1F9FA                                      ; fully-qualified     # 🧺 basket
1F9FB                                      ; fully-qualified     # 🧻 roll of paper
1F9FC                                      ; fully-qualified     # 🧼 soap
1F9FD                                      ; fully-qualified     # 🧽 sponge
1F9EF                                      ; fully-qualified     # 🧯 fire extinguisher
1F6D2                                      ; fully-qualified     # 🛒 shopping cart

# subgroup: other-object
1F6AC                                      ; fully-qualified     # 🚬 cigarette
26B0 FE0F                                  ; fully-qualified     # ⚰️ coffin
26B0                                       ; unqualified         # ⚰ coffin
26B1 FE0F                                  ; fully-qualified     # ⚱️ funeral urn
26B1                                       ; unqualified         # ⚱ funeral urn
1F5FF                                      ; fully-qualified     # 🗿 moai

# Objects subtotal:\t\t282
# Objects subtotal:\t\t282\tw/o modifiers

# group: Symbols

# subgroup: transport-sign
1F3E7                                      ; fully-qualified     # 🏧 ATM sign
1F6AE                                      ; fully-qualified     # 🚮 litter in bin sign
1F6B0                                      ; fully-qualified     # 🚰 potable water
267F                                       ; fully-qualified     # ♿ wheelchair symbol
1F6B9                                      ; fully-qualified     # 🚹 men’s room
1F6BA                                      ; fully-qualified     # 🚺 women’s room
1F6BB                                      ; fully-qualified     # 🚻 restroom
1F6BC                                      ; fully-qualified     # 🚼 baby symbol
1F6BE                                      ; fully-qualified     # 🚾 water closet
1F6C2                                      ; fully-qualified     # 🛂 passport control
1F6C3                                      ; fully-qualified     # 🛃 customs
1F6C4                                      ; fully-qualified     # 🛄 baggage claim
1F6C5                                      ; fully-qualified     # 🛅 left luggage

# subgroup: warning
26A0 FE0F                                  ; fully-qualified     # ⚠️ warning
26A0                                       ; unqualified         # ⚠ warning
1F6B8                                      ; fully-qualified     # 🚸 children crossing
26D4                                       ; fully-qualified     # ⛔ no entry
1F6AB                                      ; fully-qualified     # 🚫 prohibited
1F6B3                                      ; fully-qualified     # 🚳 no bicycles
1F6AD                                      ; fully-qualified     # 🚭 no smoking
1F6AF                                      ; fully-qualified     # 🚯 no littering
1F6B1                                      ; fully-qualified     # 🚱 non-potable water
1F6B7                                      ; fully-qualified     # 🚷 no pedestrians
1F4F5                                      ; fully-qualified     # 📵 no mobile phones
1F51E                                      ; fully-qualified     # 🔞 no one under eighteen
2622 FE0F                                  ; fully-qualified     # ☢️ radioactive
2622                                       ; unqualified         # ☢ radioactive
2623 FE0F                                  ; fully-qualified     # ☣️ biohazard
2623                                       ; unqualified         # ☣ biohazard

# subgroup: arrow
2B06 FE0F                                  ; fully-qualified     # ⬆️ up arrow
2B06                                       ; unqualified         # ⬆ up arrow
2197 FE0F                                  ; fully-qualified     # ↗️ up-right arrow
2197                                       ; unqualified         # ↗ up-right arrow
27A1 FE0F                                  ; fully-qualified     # ➡️ right arrow
27A1                                       ; unqualified         # ➡ right arrow
2198 FE0F                                  ; fully-qualified     # ↘️ down-right arrow
2198                                       ; unqualified         # ↘ down-right arrow
2B07 FE0F                                  ; fully-qualified     # ⬇️ down arrow
2B07                                       ; unqualified         # ⬇ down arrow
2199 FE0F                                  ; fully-qualified     # ↙️ down-left arrow
2199                                       ; unqualified         # ↙ down-left arrow
2B05 FE0F                                  ; fully-qualified     # ⬅️ left arrow
2B05                                       ; unqualified         # ⬅ left arrow
2196 FE0F                                  ; fully-qualified     # ↖️ up-left arrow
2196                                       ; unqualified         # ↖ up-left arrow
2195 FE0F                                  ; fully-qualified     # ↕️ up-down arrow
2195                                       ; unqualified         # ↕ up-down arrow
2194 FE0F                                  ; fully-qualified     # ↔️ left-right arrow
2194                                       ; unqualified         # ↔ left-right arrow
21A9 FE0F                                  ; fully-qualified     # ↩️ right arrow curving left
21A9                                       ; unqualified         # ↩ right arrow curving left
21AA FE0F                                  ; fully-qualified     # ↪️ left arrow curving right
21AA                                       ; unqualified         # ↪ left arrow curving right
2934 FE0F                                  ; fully-qualified     # ⤴️ right arrow curving up
2934                                       ; unqualified         # ⤴ right arrow curving up
2935 FE0F                                  ; fully-qualified     # ⤵️ right arrow curving down
2935                                       ; unqualified         # ⤵ right arrow curving down
1F503                                      ; fully-qualified     # 🔃 clockwise vertical arrows
1F504                                      ; fully-qualified     # 🔄 counterclockwise arrows button
1F519                                      ; fully-qualified     # 🔙 BACK arrow
1F51A                                      ; fully-qualified     # 🔚 END arrow
1F51B                                      ; fully-qualified     # 🔛 ON! arrow
1F51C                                      ; fully-qualified     # 🔜 SOON arrow
1F51D                                      ; fully-qualified     # 🔝 TOP arrow

# subgroup: religion
1F6D0                                      ; fully-qualified     # 🛐 place of worship
269B FE0F                                  ; fully-qualified     # ⚛️ atom symbol
269B                                       ; unqualified         # ⚛ atom symbol
1F549 FE0F                                 ; fully-qualified     # 🕉️ om
1F549                                      ; unqualified         # 🕉 om
2721 FE0F                                  ; fully-qualified     # ✡️ star of David
2721                                       ; unqualified         # ✡ star of David
2638 FE0F                                  ; fully-qualified     # ☸️ wheel of dharma
2638                                       ; unqualified         # ☸ wheel of dharma
262F FE0F                                  ; fully-qualified     # ☯️ yin yang
262F                                       ; unqualified         # ☯ yin yang
271D FE0F                                  ; fully-qualified     # ✝️ latin cross
271D                                       ; unqualified         # ✝ latin cross
2626 FE0F                                  ; fully-qualified     # ☦️ orthodox cross
2626                                       ; unqualified         # ☦ orthodox cross
262A FE0F                                  ; fully-qualified     # ☪️ star and crescent
262A                                       ; unqualified         # ☪ star and crescent
262E FE0F                                  ; fully-qualified     # ☮️ peace symbol
262E                                       ; unqualified         # ☮ peace symbol
1F54E                                      ; fully-qualified     # 🕎 menorah
1F52F                                      ; fully-qualified     # 🔯 dotted six-pointed star

# subgroup: zodiac
2648                                       ; fully-qualified     # ♈ Aries
2649                                       ; fully-qualified     # ♉ Taurus
264A                                       ; fully-qualified     # ♊ Gemini
264B                                       ; fully-qualified     # ♋ Cancer
264C                                       ; fully-qualified     # ♌ Leo
264D                                       ; fully-qualified     # ♍ Virgo
264E                                       ; fully-qualified     # ♎ Libra
264F                                       ; fully-qualified     # ♏ Scorpio
2650                                       ; fully-qualified     # ♐ Sagittarius
2651                                       ; fully-qualified     # ♑ Capricorn
2652                                       ; fully-qualified     # ♒ Aquarius
2653                                       ; fully-qualified     # ♓ Pisces
26CE                                       ; fully-qualified     # ⛎ Ophiuchus

# subgroup: av-symbol
1F500                                      ; fully-qualified     # 🔀 shuffle tracks button
1F501                                      ; fully-qualified     # 🔁 repeat button
1F502                                      ; fully-qualified     # 🔂 repeat single button
25B6 FE0F                                  ; fully-qualified     # ▶️ play button
25B6                                       ; unqualified         # ▶ play button
23E9                                       ; fully-qualified     # ⏩ fast-forward button
23ED FE0F                                  ; fully-qualified     # ⏭️ next track button
23ED                                       ; unqualified         # ⏭ next track button
23EF FE0F                                  ; fully-qualified     # ⏯️ play or pause button
23EF                                       ; unqualified         # ⏯ play or pause button
25C0 FE0F                                  ; fully-qualified     # ◀️ reverse button
25C0                                       ; unqualified         # ◀ reverse button
23EA                                       ; fully-qualified     # ⏪ fast reverse button
23EE FE0F                                  ; fully-qualified     # ⏮️ last track button
23EE                                       ; unqualified         # ⏮ last track button
1F53C                                      ; fully-qualified     # 🔼 upwards button
23EB                                       ; fully-qualified     # ⏫ fast up button
1F53D                                      ; fully-qualified     # 🔽 downwards button
23EC                                       ; fully-qualified     # ⏬ fast down button
23F8 FE0F                                  ; fully-qualified     # ⏸️ pause button
23F8                                       ; unqualified         # ⏸ pause button
23F9 FE0F                                  ; fully-qualified     # ⏹️ stop button
23F9                                       ; unqualified         # ⏹ stop button
23FA FE0F                                  ; fully-qualified     # ⏺️ record button
23FA                                       ; unqualified         # ⏺ record button
23CF FE0F                                  ; fully-qualified     # ⏏️ eject button
23CF                                       ; unqualified         # ⏏ eject button
1F3A6                                      ; fully-qualified     # 🎦 cinema
1F505                                      ; fully-qualified     # 🔅 dim button
1F506                                      ; fully-qualified     # 🔆 bright button
1F4F6                                      ; fully-qualified     # 📶 antenna bars
1F4F3                                      ; fully-qualified     # 📳 vibration mode
1F4F4                                      ; fully-qualified     # 📴 mobile phone off

# subgroup: gender
2640 FE0F                                  ; fully-qualified     # ♀️ female sign
2640                                       ; unqualified         # ♀ female sign
2642 FE0F                                  ; fully-qualified     # ♂️ male sign
2642                                       ; unqualified         # ♂ male sign

# subgroup: other-symbol
2695 FE0F                                  ; fully-qualified     # ⚕️ medical symbol
2695                                       ; unqualified         # ⚕ medical symbol
267E FE0F                                  ; fully-qualified     # ♾️ infinity
267E                                       ; unqualified         # ♾ infinity
267B FE0F                                  ; fully-qualified     # ♻️ recycling symbol
267B                                       ; unqualified         # ♻ recycling symbol
269C FE0F                                  ; fully-qualified     # ⚜️ fleur-de-lis
269C                                       ; unqualified         # ⚜ fleur-de-lis
1F531                                      ; fully-qualified     # 🔱 trident emblem
1F4DB                                      ; fully-qualified     # 📛 name badge
1F530                                      ; fully-qualified     # 🔰 Japanese symbol for beginner
2B55                                       ; fully-qualified     # ⭕ hollow red circle
2705                                       ; fully-qualified     # ✅ check mark button
2611 FE0F                                  ; fully-qualified     # ☑️ check box with check
2611                                       ; unqualified         # ☑ check box with check
2714 FE0F                                  ; fully-qualified     # ✔️ check mark
2714                                       ; unqualified         # ✔ check mark
2716 FE0F                                  ; fully-qualified     # ✖️ multiplication sign
2716                                       ; unqualified         # ✖ multiplication sign
274C                                       ; fully-qualified     # ❌ cross mark
274E                                       ; fully-qualified     # ❎ cross mark button
2795                                       ; fully-qualified     # ➕ plus sign
2796                                       ; fully-qualified     # ➖ minus sign
2797                                       ; fully-qualified     # ➗ division sign
27B0                                       ; fully-qualified     # ➰ curly loop
27BF                                       ; fully-qualified     # ➿ double curly loop
303D FE0F                                  ; fully-qualified     # 〽️ part alternation mark
303D                                       ; unqualified         # 〽 part alternation mark
2733 FE0F                                  ; fully-qualified     # ✳️ eight-spoked asterisk
2733                                       ; unqualified         # ✳ eight-spoked asterisk
2734 FE0F                                  ; fully-qualified     # ✴️ eight-pointed star
2734                                       ; unqualified         # ✴ eight-pointed star
2747 FE0F                                  ; fully-qualified     # ❇️ sparkle
2747                                       ; unqualified         # ❇ sparkle
203C FE0F                                  ; fully-qualified     # ‼️ double exclamation mark
203C                                       ; unqualified         # ‼ double exclamation mark
2049 FE0F                                  ; fully-qualified     # ⁉️ exclamation question mark
2049                                       ; unqualified         # ⁉ exclamation question mark
2753                                       ; fully-qualified     # ❓ question mark
2754                                       ; fully-qualified     # ❔ white question mark
2755                                       ; fully-qualified     # ❕ white exclamation mark
2757                                       ; fully-qualified     # ❗ exclamation mark
3030 FE0F                                  ; fully-qualified     # 〰️ wavy dash
3030                                       ; unqualified         # 〰 wavy dash
00A9 FE0F                                  ; fully-qualified     # ©️ copyright
00A9                                       ; unqualified         # © copyright
00AE FE0F                                  ; fully-qualified     # ®️ registered
00AE                                       ; unqualified         # ® registered
2122 FE0F                                  ; fully-qualified     # ™️ trade mark
2122                                       ; unqualified         # ™ trade mark

# subgroup: keycap
0023 FE0F 20E3                             ; fully-qualified     # #️⃣ keycap: #
0023 20E3                                  ; unqualified         # #⃣ keycap: #
002A FE0F 20E3                             ; fully-qualified     # *️⃣ keycap: *
002A 20E3                                  ; unqualified         # *⃣ keycap: *
0030 FE0F 20E3                             ; fully-qualified     # 0️⃣ keycap: 0
0030 20E3                                  ; unqualified         # 0⃣ keycap: 0
0031 FE0F 20E3                             ; fully-qualified     # 1️⃣ keycap: 1
0031 20E3                                  ; unqualified         # 1⃣ keycap: 1
0032 FE0F 20E3                             ; fully-qualified     # 2️⃣ keycap: 2
0032 20E3                                  ; unqualified         # 2⃣ keycap: 2
0033 FE0F 20E3                             ; fully-qualified     # 3️⃣ keycap: 3
0033 20E3                                  ; unqualified         # 3⃣ keycap: 3
0034 FE0F 20E3                             ; fully-qualified     # 4️⃣ keycap: 4
0034 20E3                                  ; unqualified         # 4⃣ keycap: 4
0035 FE0F 20E3                             ; fully-qualified     # 5️⃣ keycap: 5
0035 20E3                                  ; unqualified         # 5⃣ keycap: 5
0036 FE0F 20E3                             ; fully-qualified     # 6️⃣ keycap: 6
0036 20E3                                  ; unqualified         # 6⃣ keycap: 6
0037 FE0F 20E3                             ; fully-qualified     # 7️⃣ keycap: 7
0037 20E3                                  ; unqualified         # 7⃣ keycap: 7
0038 FE0F 20E3                             ; fully-qualified     # 8️⃣ keycap: 8
0038 20E3                                  ; unqualified         # 8⃣ keycap: 8
0039 FE0F 20E3                             ; fully-qualified     # 9️⃣ keycap: 9
0039 20E3                                  ; unqualified         # 9⃣ keycap: 9
1F51F                                      ; fully-qualified     # 🔟 keycap: 10

# subgroup: alphanum
1F520                                      ; fully-qualified     # 🔠 input latin uppercase
1F521                                      ; fully-qualified     # 🔡 input latin lowercase
1F522                                      ; fully-qualified     # 🔢 input numbers
1F523                                      ; fully-qualified     # 🔣 input symbols
1F524                                      ; fully-qualified     # 🔤 input latin letters
1F170 FE0F                                 ; fully-qualified     # 🅰️ A button (blood type)
1F170                                      ; unqualified         # 🅰 A button (blood type)
1F18E                                      ; fully-qualified     # 🆎 AB button (blood type)
1F171 FE0F                                 ; fully-qualified     # 🅱️ B button (blood type)
1F171                                      ; unqualified         # 🅱 B button (blood type)
1F191                                      ; fully-qualified     # 🆑 CL button
1F192                                      ; fully-qualified     # 🆒 COOL button
1F193                                      ; fully-qualified     # 🆓 FREE button
2139 FE0F                                  ; fully-qualified     # ℹ️ information
2139                                       ; unqualified         # ℹ information
1F194                                      ; fully-qualified     # 🆔 ID button
24C2 FE0F                                  ; fully-qualified     # Ⓜ️ circled M
24C2                                       ; unqualified         # Ⓜ circled M
1F195                                      ; fully-qualified     # 🆕 NEW button
1F196                                      ; fully-qualified     # 🆖 NG button
1F17E FE0F                                 ; fully-qualified     # 🅾️ O button (blood type)
1F17E                                      ; unqualified         # 🅾 O button (blood type)
1F197                                      ; fully-qualified     # 🆗 OK button
1F17F FE0F                                 ; fully-qualified     # 🅿️ P button
1F17F                                      ; unqualified         # 🅿 P button
1F198                                      ; fully-qualified     # 🆘 SOS button
1F199                                      ; fully-qualified     # 🆙 UP! button
1F19A                                      ; fully-qualified     # 🆚 VS button
1F201                                      ; fully-qualified     # 🈁 Japanese “here” button
1F202 FE0F                                 ; fully-qualified     # 🈂️ Japanese “service charge” button
1F202                                      ; unqualified         # 🈂 Japanese “service charge” button
1F237 FE0F                                 ; fully-qualified     # 🈷️ Japanese “monthly amount” button
1F237                                      ; unqualified         # 🈷 Japanese “monthly amount” button
1F236                                      ; fully-qualified     # 🈶 Japanese “not free of charge” button
1F22F                                      ; fully-qualified     # 🈯 Japanese “reserved” button
1F250                                      ; fully-qualified     # 🉐 Japanese “bargain” button
1F239                                      ; fully-qualified     # 🈹 Japanese “discount” button
1F21A                                      ; fully-qualified     # 🈚 Japanese “free of charge” button
1F232                                      ; fully-qualified     # 🈲 Japanese “prohibited” button
1F251                                      ; fully-qualified     # 🉑 Japanese “acceptable” button
1F238                                      ; fully-qualified     # 🈸 Japanese “application” button
1F234                                      ; fully-qualified     # 🈴 Japanese “passing grade” button
1F233                                      ; fully-qualified     # 🈳 Japanese “vacancy” button
3297 FE0F                                  ; fully-qualified     # ㊗️ Japanese “congratulations” button
3297                                       ; unqualified         # ㊗ Japanese “congratulations” button
3299 FE0F                                  ; fully-qualified     # ㊙️ Japanese “secret” button
3299                                       ; unqualified         # ㊙ Japanese “secret” button
1F23A                                      ; fully-qualified     # 🈺 Japanese “open for business” button
1F235                                      ; fully-qualified     # 🈵 Japanese “no vacancy” button

# subgroup: geometric
1F534                                      ; fully-qualified     # 🔴 red circle
1F7E0                                      ; fully-qualified     # 🟠 orange circle
1F7E1                                      ; fully-qualified     # 🟡 yellow circle
1F7E2                                      ; fully-qualified     # 🟢 green circle
1F535                                      ; fully-qualified     # 🔵 blue circle
1F7E3                                      ; fully-qualified     # 🟣 purple circle
1F7E4                                      ; fully-qualified     # 🟤 brown circle
26AB                                       ; fully-qualified     # ⚫ black circle
26AA                                       ; fully-qualified     # ⚪ white circle
1F7E5                                      ; fully-qualified     # 🟥 red square
1F7E7                                      ; fully-qualified     # 🟧 orange square
1F7E8                                      ; fully-qualified     # 🟨 yellow square
1F7E9                                      ; fully-qualified     # 🟩 green square
1F7E6                                      ; fully-qualified     # 🟦 blue square
1F7EA                                      ; fully-qualified     # 🟪 purple square
1F7EB                                      ; fully-qualified     # 🟫 brown square
2B1B                                       ; fully-qualified     # ⬛ black large square
2B1C                                       ; fully-qualified     # ⬜ white large square
25FC FE0F                                  ; fully-qualified     # ◼️ black medium square
25FC                                       ; unqualified         # ◼ black medium square
25FB FE0F                                  ; fully-qualified     # ◻️ white medium square
25FB                                       ; unqualified         # ◻ white medium square
25FE                                       ; fully-qualified     # ◾ black medium-small square
25FD                                       ; fully-qualified     # ◽ white medium-small square
25AA FE0F                                  ; fully-qualified     # ▪️ black small square
25AA                                       ; unqualified         # ▪ black small square
25AB FE0F                                  ; fully-qualified     # ▫️ white small square
25AB                                       ; unqualified         # ▫ white small square
1F536                                      ; fully-qualified     # 🔶 large orange diamond
1F537                                      ; fully-qualified     # 🔷 large blue diamond
1F538                                      ; fully-qualified     # 🔸 small orange diamond
1F539                                      ; fully-qualified     # 🔹 small blue diamond
1F53A                                      ; fully-qualified     # 🔺 red triangle pointed up
1F53B                                      ; fully-qualified     # 🔻 red triangle pointed down
1F4A0                                      ; fully-qualified     # 💠 diamond with a dot
1F518                                      ; fully-qualified     # 🔘 radio button
1F533                                      ; fully-qualified     # 🔳 white square button
1F532                                      ; fully-qualified     # 🔲 black square button

# Symbols subtotal:\t\t297
# Symbols subtotal:\t\t297\tw/o modifiers

# group: Flags

# subgroup: flag
1F3C1                                      ; fully-qualified     # 🏁 chequered flag
1F6A9                                      ; fully-qualified     # 🚩 triangular flag
1F38C                                      ; fully-qualified     # 🎌 crossed flags
1F3F4                                      ; fully-qualified     # 🏴 black flag
1F3F3 FE0F                                 ; fully-qualified     # 🏳️ white flag
1F3F3                                      ; unqualified         # 🏳 white flag
1F3F3 FE0F 200D 1F308                      ; fully-qualified     # 🏳️‍🌈 rainbow flag
1F3F3 200D 1F308                           ; unqualified         # 🏳‍🌈 rainbow flag
1F3F4 200D 2620 FE0F                       ; fully-qualified     # 🏴‍☠️ pirate flag
1F3F4 200D 2620                            ; minimally-qualified # 🏴‍☠ pirate flag

# subgroup: country-flag
1F1E6 1F1E8                                ; fully-qualified     # 🇦🇨 flag: Ascension Island
1F1E6 1F1E9                                ; fully-qualified     # 🇦🇩 flag: Andorra
1F1E6 1F1EA                                ; fully-qualified     # 🇦🇪 flag: United Arab Emirates
1F1E6 1F1EB                                ; fully-qualified     # 🇦🇫 flag: Afghanistan
1F1E6 1F1EC                                ; fully-qualified     # 🇦🇬 flag: Antigua & Barbuda
1F1E6 1F1EE                                ; fully-qualified     # 🇦🇮 flag: Anguilla
1F1E6 1F1F1                                ; fully-qualified     # 🇦🇱 flag: Albania
1F1E6 1F1F2                                ; fully-qualified     # 🇦🇲 flag: Armenia
1F1E6 1F1F4                                ; fully-qualified     # 🇦🇴 flag: Angola
1F1E6 1F1F6                                ; fully-qualified     # 🇦🇶 flag: Antarctica
1F1E6 1F1F7                                ; fully-qualified     # 🇦🇷 flag: Argentina
1F1E6 1F1F8                                ; fully-qualified     # 🇦🇸 flag: American Samoa
1F1E6 1F1F9                                ; fully-qualified     # 🇦🇹 flag: Austria
1F1E6 1F1FA                                ; fully-qualified     # 🇦🇺 flag: Australia
1F1E6 1F1FC                                ; fully-qualified     # 🇦🇼 flag: Aruba
1F1E6 1F1FD                                ; fully-qualified     # 🇦🇽 flag: Åland Islands
1F1E6 1F1FF                                ; fully-qualified     # 🇦🇿 flag: Azerbaijan
1F1E7 1F1E6                                ; fully-qualified     # 🇧🇦 flag: Bosnia & Herzegovina
1F1E7 1F1E7                                ; fully-qualified     # 🇧🇧 flag: Barbados
1F1E7 1F1E9                                ; fully-qualified     # 🇧🇩 flag: Bangladesh
1F1E7 1F1EA                                ; fully-qualified     # 🇧🇪 flag: Belgium
1F1E7 1F1EB                                ; fully-qualified     # 🇧🇫 flag: Burkina Faso
1F1E7 1F1EC                                ; fully-qualified     # 🇧🇬 flag: Bulgaria
1F1E7 1F1ED                                ; fully-qualified     # 🇧🇭 flag: Bahrain
1F1E7 1F1EE                                ; fully-qualified     # 🇧🇮 flag: Burundi
1F1E7 1F1EF                                ; fully-qualified     # 🇧🇯 flag: Benin
1F1E7 1F1F1                                ; fully-qualified     # 🇧🇱 flag: St. Barthélemy
1F1E7 1F1F2                                ; fully-qualified     # 🇧🇲 flag: Bermuda
1F1E7 1F1F3                                ; fully-qualified     # 🇧🇳 flag: Brunei
1F1E7 1F1F4                                ; fully-qualified     # 🇧🇴 flag: Bolivia
1F1E7 1F1F6                                ; fully-qualified     # 🇧🇶 flag: Caribbean Netherlands
1F1E7 1F1F7                                ; fully-qualified     # 🇧🇷 flag: Brazil
1F1E7 1F1F8                                ; fully-qualified     # 🇧🇸 flag: Bahamas
1F1E7 1F1F9                                ; fully-qualified     # 🇧🇹 flag: Bhutan
1F1E7 1F1FB                                ; fully-qualified     # 🇧🇻 flag: Bouvet Island
1F1E7 1F1FC                                ; fully-qualified     # 🇧🇼 flag: Botswana
1F1E7 1F1FE                                ; fully-qualified     # 🇧🇾 flag: Belarus
1F1E7 1F1FF                                ; fully-qualified     # 🇧🇿 flag: Belize
1F1E8 1F1E6                                ; fully-qualified     # 🇨🇦 flag: Canada
1F1E8 1F1E8                                ; fully-qualified     # 🇨🇨 flag: Cocos (Keeling) Islands
1F1E8 1F1E9                                ; fully-qualified     # 🇨🇩 flag: Congo - Kinshasa
1F1E8 1F1EB                                ; fully-qualified     # 🇨🇫 flag: Central African Republic
1F1E8 1F1EC                                ; fully-qualified     # 🇨🇬 flag: Congo - Brazzaville
1F1E8 1F1ED                                ; fully-qualified     # 🇨🇭 flag: Switzerland
1F1E8 1F1EE                                ; fully-qualified     # 🇨🇮 flag: Côte d’Ivoire
1F1E8 1F1F0                                ; fully-qualified     # 🇨🇰 flag: Cook Islands
1F1E8 1F1F1                                ; fully-qualified     # 🇨🇱 flag: Chile
1F1E8 1F1F2                                ; fully-qualified     # 🇨🇲 flag: Cameroon
1F1E8 1F1F3                                ; fully-qualified     # 🇨🇳 flag: China
1F1E8 1F1F4                                ; fully-qualified     # 🇨🇴 flag: Colombia
1F1E8 1F1F5                                ; fully-qualified     # 🇨🇵 flag: Clipperton Island
1F1E8 1F1F7                                ; fully-qualified     # 🇨🇷 flag: Costa Rica
1F1E8 1F1FA                                ; fully-qualified     # 🇨🇺 flag: Cuba
1F1E8 1F1FB                                ; fully-qualified     # 🇨🇻 flag: Cape Verde
1F1E8 1F1FC                                ; fully-qualified     # 🇨🇼 flag: Curaçao
1F1E8 1F1FD                                ; fully-qualified     # 🇨🇽 flag: Christmas Island
1F1E8 1F1FE                                ; fully-qualified     # 🇨🇾 flag: Cyprus
1F1E8 1F1FF                                ; fully-qualified     # 🇨🇿 flag: Czechia
1F1E9 1F1EA                                ; fully-qualified     # 🇩🇪 flag: Germany
1F1E9 1F1EC                                ; fully-qualified     # 🇩🇬 flag: Diego Garcia
1F1E9 1F1EF                                ; fully-qualified     # 🇩🇯 flag: Djibouti
1F1E9 1F1F0                                ; fully-qualified     # 🇩🇰 flag: Denmark
1F1E9 1F1F2                                ; fully-qualified     # 🇩🇲 flag: Dominica
1F1E9 1F1F4                                ; fully-qualified     # 🇩🇴 flag: Dominican Republic
1F1E9 1F1FF                                ; fully-qualified     # 🇩🇿 flag: Algeria
1F1EA 1F1E6                                ; fully-qualified     # 🇪🇦 flag: Ceuta & Melilla
1F1EA 1F1E8                                ; fully-qualified     # 🇪🇨 flag: Ecuador
1F1EA 1F1EA                                ; fully-qualified     # 🇪🇪 flag: Estonia
1F1EA 1F1EC                                ; fully-qualified     # 🇪🇬 flag: Egypt
1F1EA 1F1ED                                ; fully-qualified     # 🇪🇭 flag: Western Sahara
1F1EA 1F1F7                                ; fully-qualified     # 🇪🇷 flag: Eritrea
1F1EA 1F1F8                                ; fully-qualified     # 🇪🇸 flag: Spain
1F1EA 1F1F9                                ; fully-qualified     # 🇪🇹 flag: Ethiopia
1F1EA 1F1FA                                ; fully-qualified     # 🇪🇺 flag: European Union
1F1EB 1F1EE                                ; fully-qualified     # 🇫🇮 flag: Finland
1F1EB 1F1EF                                ; fully-qualified     # 🇫🇯 flag: Fiji
1F1EB 1F1F0                                ; fully-qualified     # 🇫🇰 flag: Falkland Islands
1F1EB 1F1F2                                ; fully-qualified     # 🇫🇲 flag: Micronesia
1F1EB 1F1F4                                ; fully-qualified     # 🇫🇴 flag: Faroe Islands
1F1EB 1F1F7                                ; fully-qualified     # 🇫🇷 flag: France
1F1EC 1F1E6                                ; fully-qualified     # 🇬🇦 flag: Gabon
1F1EC 1F1E7                                ; fully-qualified     # 🇬🇧 flag: United Kingdom
1F1EC 1F1E9                                ; fully-qualified     # 🇬🇩 flag: Grenada
1F1EC 1F1EA                                ; fully-qualified     # 🇬🇪 flag: Georgia
1F1EC 1F1EB                                ; fully-qualified     # 🇬🇫 flag: French Guiana
1F1EC 1F1EC                                ; fully-qualified     # 🇬🇬 flag: Guernsey
1F1EC 1F1ED                                ; fully-qualified     # 🇬🇭 flag: Ghana
1F1EC 1F1EE                                ; fully-qualified     # 🇬🇮 flag: Gibraltar
1F1EC 1F1F1                                ; fully-qualified     # 🇬🇱 flag: Greenland
1F1EC 1F1F2                                ; fully-qualified     # 🇬🇲 flag: Gambia
1F1EC 1F1F3                                ; fully-qualified     # 🇬🇳 flag: Guinea
1F1EC 1F1F5                                ; fully-qualified     # 🇬🇵 flag: Guadeloupe
1F1EC 1F1F6                                ; fully-qualified     # 🇬🇶 flag: Equatorial Guinea
1F1EC 1F1F7                                ; fully-qualified     # 🇬🇷 flag: Greece
1F1EC 1F1F8                                ; fully-qualified     # 🇬🇸 flag: South Georgia & South Sandwich Islands
1F1EC 1F1F9                                ; fully-qualified     # 🇬🇹 flag: Guatemala
1F1EC 1F1FA                                ; fully-qualified     # 🇬🇺 flag: Guam
1F1EC 1F1FC                                ; fully-qualified     # 🇬🇼 flag: Guinea-Bissau
1F1EC 1F1FE                                ; fully-qualified     # 🇬🇾 flag: Guyana
1F1ED 1F1F0                                ; fully-qualified     # 🇭🇰 flag: Hong Kong SAR China
1F1ED 1F1F2                                ; fully-qualified     # 🇭🇲 flag: Heard & McDonald Islands
1F1ED 1F1F3                                ; fully-qualified     # 🇭🇳 flag: Honduras
1F1ED 1F1F7                                ; fully-qualified     # 🇭🇷 flag: Croatia
1F1ED 1F1F9                                ; fully-qualified     # 🇭🇹 flag: Haiti
1F1ED 1F1FA                                ; fully-qualified     # 🇭🇺 flag: Hungary
1F1EE 1F1E8                                ; fully-qualified     # 🇮🇨 flag: Canary Islands
1F1EE 1F1E9                                ; fully-qualified     # 🇮🇩 flag: Indonesia
1F1EE 1F1EA                                ; fully-qualified     # 🇮🇪 flag: Ireland
1F1EE 1F1F1                                ; fully-qualified     # 🇮🇱 flag: Israel
1F1EE 1F1F2                                ; fully-qualified     # 🇮🇲 flag: Isle of Man
1F1EE 1F1F3                                ; fully-qualified     # 🇮🇳 flag: India
1F1EE 1F1F4                                ; fully-qualified     # 🇮🇴 flag: British Indian Ocean Territory
1F1EE 1F1F6                                ; fully-qualified     # 🇮🇶 flag: Iraq
1F1EE 1F1F7                                ; fully-qualified     # 🇮🇷 flag: Iran
1F1EE 1F1F8                                ; fully-qualified     # 🇮🇸 flag: Iceland
1F1EE 1F1F9                                ; fully-qualified     # 🇮🇹 flag: Italy
1F1EF 1F1EA                                ; fully-qualified     # 🇯🇪 flag: Jersey
1F1EF 1F1F2                                ; fully-qualified     # 🇯🇲 flag: Jamaica
1F1EF 1F1F4                                ; fully-qualified     # 🇯🇴 flag: Jordan
1F1EF 1F1F5                                ; fully-qualified     # 🇯🇵 flag: Japan
1F1F0 1F1EA                                ; fully-qualified     # 🇰🇪 flag: Kenya
1F1F0 1F1EC                                ; fully-qualified     # 🇰🇬 flag: Kyrgyzstan
1F1F0 1F1ED                                ; fully-qualified     # 🇰🇭 flag: Cambodia
1F1F0 1F1EE                                ; fully-qualified     # 🇰🇮 flag: Kiribati
1F1F0 1F1F2                                ; fully-qualified     # 🇰🇲 flag: Comoros
1F1F0 1F1F3                                ; fully-qualified     # 🇰🇳 flag: St. Kitts & Nevis
1F1F0 1F1F5                                ; fully-qualified     # 🇰🇵 flag: North Korea
1F1F0 1F1F7                                ; fully-qualified     # 🇰🇷 flag: South Korea
1F1F0 1F1FC                                ; fully-qualified     # 🇰🇼 flag: Kuwait
1F1F0 1F1FE                                ; fully-qualified     # 🇰🇾 flag: Cayman Islands
1F1F0 1F1FF                                ; fully-qualified     # 🇰🇿 flag: Kazakhstan
1F1F1 1F1E6                                ; fully-qualified     # 🇱🇦 flag: Laos
1F1F1 1F1E7                                ; fully-qualified     # 🇱🇧 flag: Lebanon
1F1F1 1F1E8                                ; fully-qualified     # 🇱🇨 flag: St. Lucia
1F1F1 1F1EE                                ; fully-qualified     # 🇱🇮 flag: Liechtenstein
1F1F1 1F1F0                                ; fully-qualified     # 🇱🇰 flag: Sri Lanka
1F1F1 1F1F7                                ; fully-qualified     # 🇱🇷 flag: Liberia
1F1F1 1F1F8                                ; fully-qualified     # 🇱🇸 flag: Lesotho
1F1F1 1F1F9                                ; fully-qualified     # 🇱🇹 flag: Lithuania
1F1F1 1F1FA                                ; fully-qualified     # 🇱🇺 flag: Luxembourg
1F1F1 1F1FB                                ; fully-qualified     # 🇱🇻 flag: Latvia
1F1F1 1F1FE                                ; fully-qualified     # 🇱🇾 flag: Libya
1F1F2 1F1E6                                ; fully-qualified     # 🇲🇦 flag: Morocco
1F1F2 1F1E8                                ; fully-qualified     # 🇲🇨 flag: Monaco
1F1F2 1F1E9                                ; fully-qualified     # 🇲🇩 flag: Moldova
1F1F2 1F1EA                                ; fully-qualified     # 🇲🇪 flag: Montenegro
1F1F2 1F1EB                                ; fully-qualified     # 🇲🇫 flag: St. Martin
1F1F2 1F1EC                                ; fully-qualified     # 🇲🇬 flag: Madagascar
1F1F2 1F1ED                                ; fully-qualified     # 🇲🇭 flag: Marshall Islands
1F1F2 1F1F0                                ; fully-qualified     # 🇲🇰 flag: Macedonia
1F1F2 1F1F1                                ; fully-qualified     # 🇲🇱 flag: Mali
1F1F2 1F1F2                                ; fully-qualified     # 🇲🇲 flag: Myanmar (Burma)
1F1F2 1F1F3                                ; fully-qualified     # 🇲🇳 flag: Mongolia
1F1F2 1F1F4                                ; fully-qualified     # 🇲🇴 flag: Macao SAR China
1F1F2 1F1F5                                ; fully-qualified     # 🇲🇵 flag: Northern Mariana Islands
1F1F2 1F1F6                                ; fully-qualified     # 🇲🇶 flag: Martinique
1F1F2 1F1F7                                ; fully-qualified     # 🇲🇷 flag: Mauritania
1F1F2 1F1F8                                ; fully-qualified     # 🇲🇸 flag: Montserrat
1F1F2 1F1F9                                ; fully-qualified     # 🇲🇹 flag: Malta
1F1F2 1F1FA                                ; fully-qualified     # 🇲🇺 flag: Mauritius
1F1F2 1F1FB                                ; fully-qualified     # 🇲🇻 flag: Maldives
1F1F2 1F1FC                                ; fully-qualified     # 🇲🇼 flag: Malawi
1F1F2 1F1FD                                ; fully-qualified     # 🇲🇽 flag: Mexico
1F1F2 1F1FE                                ; fully-qualified     # 🇲🇾 flag: Malaysia
1F1F2 1F1FF                                ; fully-qualified     # 🇲🇿 flag: Mozambique
1F1F3 1F1E6                                ; fully-qualified     # 🇳🇦 flag: Namibia
1F1F3 1F1E8                                ; fully-qualified     # 🇳🇨 flag: New Caledonia
1F1F3 1F1EA                                ; fully-qualified     # 🇳🇪 flag: Niger
1F1F3 1F1EB                                ; fully-qualified     # 🇳🇫 flag: Norfolk Island
1F1F3 1F1EC                                ; fully-qualified     # 🇳🇬 flag: Nigeria
1F1F3 1F1EE                                ; fully-qualified     # 🇳🇮 flag: Nicaragua
1F1F3 1F1F1                                ; fully-qualified     # 🇳🇱 flag: Netherlands
1F1F3 1F1F4                                ; fully-qualified     # 🇳🇴 flag: Norway
1F1F3 1F1F5                                ; fully-qualified     # 🇳🇵 flag: Nepal
1F1F3 1F1F7                                ; fully-qualified     # 🇳🇷 flag: Nauru
1F1F3 1F1FA                                ; fully-qualified     # 🇳🇺 flag: Niue
1F1F3 1F1FF                                ; fully-qualified     # 🇳🇿 flag: New Zealand
1F1F4 1F1F2                                ; fully-qualified     # 🇴🇲 flag: Oman
1F1F5 1F1E6                                ; fully-qualified     # 🇵🇦 flag: Panama
1F1F5 1F1EA                                ; fully-qualified     # 🇵🇪 flag: Peru
1F1F5 1F1EB                                ; fully-qualified     # 🇵🇫 flag: French Polynesia
1F1F5 1F1EC                                ; fully-qualified     # 🇵🇬 flag: Papua New Guinea
1F1F5 1F1ED                                ; fully-qualified     # 🇵🇭 flag: Philippines
1F1F5 1F1F0                                ; fully-qualified     # 🇵🇰 flag: Pakistan
1F1F5 1F1F1                                ; fully-qualified     # 🇵🇱 flag: Poland
1F1F5 1F1F2                                ; fully-qualified     # 🇵🇲 flag: St. Pierre & Miquelon
1F1F5 1F1F3                                ; fully-qualified     # 🇵🇳 flag: Pitcairn Islands
1F1F5 1F1F7                                ; fully-qualified     # 🇵🇷 flag: Puerto Rico
1F1F5 1F1F8                                ; fully-qualified     # 🇵🇸 flag: Palestinian Territories
1F1F5 1F1F9                                ; fully-qualified     # 🇵🇹 flag: Portugal
1F1F5 1F1FC                                ; fully-qualified     # 🇵🇼 flag: Palau
1F1F5 1F1FE                                ; fully-qualified     # 🇵🇾 flag: Paraguay
1F1F6 1F1E6                                ; fully-qualified     # 🇶🇦 flag: Qatar
1F1F7 1F1EA                                ; fully-qualified     # 🇷🇪 flag: Réunion
1F1F7 1F1F4                                ; fully-qualified     # 🇷🇴 flag: Romania
1F1F7 1F1F8                                ; fully-qualified     # 🇷🇸 flag: Serbia
1F1F7 1F1FA                                ; fully-qualified     # 🇷🇺 flag: Russia
1F1F7 1F1FC                                ; fully-qualified     # 🇷🇼 flag: Rwanda
1F1F8 1F1E6                                ; fully-qualified     # 🇸🇦 flag: Saudi Arabia
1F1F8 1F1E7                                ; fully-qualified     # 🇸🇧 flag: Solomon Islands
1F1F8 1F1E8                                ; fully-qualified     # 🇸🇨 flag: Seychelles
1F1F8 1F1E9                                ; fully-qualified     # 🇸🇩 flag: Sudan
1F1F8 1F1EA                                ; fully-qualified     # 🇸🇪 flag: Sweden
1F1F8 1F1EC                                ; fully-qualified     # 🇸🇬 flag: Singapore
1F1F8 1F1ED                                ; fully-qualified     # 🇸🇭 flag: St. Helena
1F1F8 1F1EE                                ; fully-qualified     # 🇸🇮 flag: Slovenia
1F1F8 1F1EF                                ; fully-qualified     # 🇸🇯 flag: Svalbard & Jan Mayen
1F1F8 1F1F0                                ; fully-qualified     # 🇸🇰 flag: Slovakia
1F1F8 1F1F1                                ; fully-qualified     # 🇸🇱 flag: Sierra Leone
1F1F8 1F1F2                                ; fully-qualified     # 🇸🇲 flag: San Marino
1F1F8 1F1F3                                ; fully-qualified     # 🇸🇳 flag: Senegal
1F1F8 1F1F4                                ; fully-qualified     # 🇸🇴 flag: Somalia
1F1F8 1F1F7                                ; fully-qualified     # 🇸🇷 flag: Suriname
1F1F8 1F1F8                                ; fully-qualified     # 🇸🇸 flag: South Sudan
1F1F8 1F1F9                                ; fully-qualified     # 🇸🇹 flag: São Tomé & Príncipe
1F1F8 1F1FB                                ; fully-qualified     # 🇸🇻 flag: El Salvador
1F1F8 1F1FD                                ; fully-qualified     # 🇸🇽 flag: Sint Maarten
1F1F8 1F1FE                                ; fully-qualified     # 🇸🇾 flag: Syria
1F1F8 1F1FF                                ; fully-qualified     # 🇸🇿 flag: Eswatini
1F1F9 1F1E6                                ; fully-qualified     # 🇹🇦 flag: Tristan da Cunha
1F1F9 1F1E8                                ; fully-qualified     # 🇹🇨 flag: Turks & Caicos Islands
1F1F9 1F1E9                                ; fully-qualified     # 🇹🇩 flag: Chad
1F1F9 1F1EB                                ; fully-qualified     # 🇹🇫 flag: French Southern Territories
1F1F9 1F1EC                                ; fully-qualified     # 🇹🇬 flag: Togo
1F1F9 1F1ED                                ; fully-qualified     # 🇹🇭 flag: Thailand
1F1F9 1F1EF                                ; fully-qualified     # 🇹🇯 flag: Tajikistan
1F1F9 1F1F0                                ; fully-qualified     # 🇹🇰 flag: Tokelau
1F1F9 1F1F1                                ; fully-qualified     # 🇹🇱 flag: Timor-Leste
1F1F9 1F1F2                                ; fully-qualified     # 🇹🇲 flag: Turkmenistan
1F1F9 1F1F3                                ; fully-qualified     # 🇹🇳 flag: Tunisia
1F1F9 1F1F4                                ; fully-qualified     # 🇹🇴 flag: Tonga
1F1F9 1F1F7                                ; fully-qualified     # 🇹🇷 flag: Turkey
1F1F9 1F1F9                                ; fully-qualified     # 🇹🇹 flag: Trinidad & Tobago
1F1F9 1F1FB                                ; fully-qualified     # 🇹🇻 flag: Tuvalu
1F1F9 1F1FC                                ; fully-qualified     # 🇹🇼 flag: Taiwan
1F1F9 1F1FF                                ; fully-qualified     # 🇹🇿 flag: Tanzania
1F1FA 1F1E6                                ; fully-qualified     # 🇺🇦 flag: Ukraine
1F1FA 1F1EC                                ; fully-qualified     # 🇺🇬 flag: Uganda
1F1FA 1F1F2                                ; fully-qualified     # 🇺🇲 flag: U.S. Outlying Islands
1F1FA 1F1F3                                ; fully-qualified     # 🇺🇳 flag: United Nations
1F1FA 1F1F8                                ; fully-qualified     # 🇺🇸 flag: United States
1F1FA 1F1FE                                ; fully-qualified     # 🇺🇾 flag: Uruguay
1F1FA 1F1FF                                ; fully-qualified     # 🇺🇿 flag: Uzbekistan
1F1FB 1F1E6                                ; fully-qualified     # 🇻🇦 flag: Vatican City
1F1FB 1F1E8                                ; fully-qualified     # 🇻🇨 flag: St. Vincent & Grenadines
1F1FB 1F1EA                                ; fully-qualified     # 🇻🇪 flag: Venezuela
1F1FB 1F1EC                                ; fully-qualified     # 🇻🇬 flag: British Virgin Islands
1F1FB 1F1EE                                ; fully-qualified     # 🇻🇮 flag: U.S. Virgin Islands
1F1FB 1F1F3                                ; fully-qualified     # 🇻🇳 flag: Vietnam
1F1FB 1F1FA                                ; fully-qualified     # 🇻🇺 flag: Vanuatu
1F1FC 1F1EB                                ; fully-qualified     # 🇼🇫 flag: Wallis & Futuna
1F1FC 1F1F8                                ; fully-qualified     # 🇼🇸 flag: Samoa
1F1FD 1F1F0                                ; fully-qualified     # 🇽🇰 flag: Kosovo
1F1FE 1F1EA                                ; fully-qualified     # 🇾🇪 flag: Yemen
1F1FE 1F1F9                                ; fully-qualified     # 🇾🇹 flag: Mayotte
1F1FF 1F1E6                                ; fully-qualified     # 🇿🇦 flag: South Africa
1F1FF 1F1F2                                ; fully-qualified     # 🇿🇲 flag: Zambia
1F1FF 1F1FC                                ; fully-qualified     # 🇿🇼 flag: Zimbabwe

# subgroup: subdivision-flag
1F3F4 E0067 E0062 E0065 E006E E0067 E007F  ; fully-qualified     # 🏴󠁧󠁢󠁥󠁮󠁧󠁿 flag: England
1F3F4 E0067 E0062 E0073 E0063 E0074 E007F  ; fully-qualified     # 🏴󠁧󠁢󠁳󠁣󠁴󠁿 flag: Scotland
1F3F4 E0067 E0062 E0077 E006C E0073 E007F  ; fully-qualified     # 🏴󠁧󠁢󠁷󠁬󠁳󠁿 flag: Wales

# Flags subtotal:\t\t271
# Flags subtotal:\t\t271\tw/o modifiers

# Status Counts
# fully-qualified : 3010
# minimally-qualified : 571
# unqualified : 246
# component : 9

#EOF`;
