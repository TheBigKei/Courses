new Vue({
    el: '#app',
    data: {
        items: [
            { name: 'Item 1', description: 'Description for Item 1' },
            { name: 'Item 2', description: 'Description for Item 2' },
            { name: 'Item 3', description: 'Description for Item 3' }
        ],
        selectedItem: null,
        newItemName: '',
        newItemDescription: ''
    },
    methods: {
        showDetails(item) {
            this.selectedItem = item;
        },
        addItem() {
            if (this.newItemName && this.newItemDescription) {
                this.items.push({
                    name: this.newItemName,
                    description: this.newItemDescription
                });
                this.newItemName = '';
                this.newItemDescription = '';
            }
        }
    }
});