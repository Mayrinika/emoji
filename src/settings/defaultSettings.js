import style from '../style.css';

export default {
    classes: {
        wrapper: style.input_wrapper,
        button: style.input_button,
        modal: {
            main: style.input_modal,
            content: style.content,
            settings: style.settings,
        },
        dark: style.input_dark,
        category: {
            main: style.category,
            title: style.category_title,
            list: style.category_list,
            hide: style.hide,
        },
        emoji: {
            item: style.category_item,
            hide: style.hide,
        },
        navigation : {
            main: style.navigation,
            item: style.navigation_item,
        },
        search: {
            main: style.search,
            input: style.search_input,
        },
    },
};