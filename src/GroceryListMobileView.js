class GroceryListMobileView extends React.Component {
    constructor(props)
    {
        super(props);

        this.listKey = props.listKey;
        this.dbRef = props.dbRef;

        this.state = {
            items: 0,
            list: [],
            checked: []
        };

        this.updateListFromSnapshot = this.updateListFromSnapshot.bind(this);
        this.handleToggleCheck = this.handleToggleCheck.bind(this);
        this.clearList = this.clearList.bind(this);
    }

    componentDidMount()
    {
        this.dbRef.child('mobile').child(this.listKey).once('value').then(this.updateListFromSnapshot);
    }

    updateListFromSnapshot(snapshot)
    {
        if (snapshot.val())
        {
            let _list = [];
            let _checked = [];
            for (const kvp of Object.entries(snapshot.val()))
            {
                _list.push(kvp[1]);
                _checked.push(false);
            }

            this.setState({
                items: _list.length,
                list: _list,
                checked: _checked
            });
        }
    }

    clearList()
    {
        this.dbRef.child('mobile').child(this.key).remove();
    }

    handleToggleCheck(i)
    {
        this.setState(function(state) {
            state.checked[i] = !state.checked[i];
            return state;
        });
    }

    render()
    {
        let arr = [];
        for (let i = 0; i < this.state.items; i++)
        {
            arr.push(i);
        }

        return <table>
            {
                arr.map(i =>
                    <tr>
                        <td className="left-mobile-cell">
                            <span>
                            {this.state.list[i].name}:&nbsp;&nbsp;{this.state.list[i].quantity}&nbsp;{(this.state.list[i].units) ? this.state.list[i].units : ""}
                            </span>
                        </td>
                        <td className="right-mobile-cell">
                            <input type="checkbox" value={this.state.checked[i]} onChange={(event) => this.handleToggleCheck(i)}/>
                        </td>
                    </tr>
                )
            }
        </table>;
    }
}

function renderMobileView(key, dbRef, container)
{
    ReactDOM.render(<GroceryListMobileView listKey={key} dbRef={dbRef}/>, container);
}