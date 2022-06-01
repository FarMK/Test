var watchExampleVM = new Vue({
    el: '.app',
    data: {
        newTask: '',
        nextTodoId: 4,
        todos: [{
                id: 1,
                title: 'Помыть посуду'
            },
            {
                id: 2,
                title: 'Вынести мусор'
            },
            {
                id: 3,
                title: 'Подстричь газон'
            }
        ],

    },







    methods: {
        addTask: function() {
            if (this.newTask === '' || this.newTask === ' ') {
                alert('Введите что-то')
            } else {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTask
                })
            }

            this.newTask = ''
        },

        remove: function() {
            this.todos.splice(this.index, 1)
        },
    },





})