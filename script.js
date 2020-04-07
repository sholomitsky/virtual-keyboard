class KeyBoard {
    Element = {

    }
    Properties = {
        
    }
    initial () {
        this.Element.AreaKeyBoard = document.createElement('div');
        this.Element.KeysBoard = document.createElement('div');
        this.Element.AreaKeyBoard.classList.add('keyboards');
        this.Element.KeysBoard.classList.add('keyboards');

    }
    Keysarr = ['~','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del',
                'CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
                'Shift','z','x','c','v','b','n','m',',','.','/',
                'Shift','Ctrl','Win','Alt','Space','Alt','Ctrl']; 
    KeysEventCode = [
        'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
        'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
        'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
        'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 
        'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight'];
    KeysSystem = ['MetaLeft','Backspace', 'Tab', 'CapsLock', 'Shift', 'AltRight','AltLeft', 'Space', 'ControlLeft','ControlRight','ShiftLeft','ShiftRight'];
     constructor() {
                    if (window.localStorage.getItem('lang') == 'en'){
                        this.Properties.lang = 'en';
                        } 
                    this.Element.areaKeyBoard = document.createElement("div");
                    this.Element.KeysBoard = document.createElement("div");
                    this.Element.textarea = document.createElement("textarea");
                    
                    this.Element.areaKeyBoard.classList.add("areaKeyBoard");
                    this.Element.KeysBoard.classList.add("keysBoard");
                    this.Element.textarea.classList.add("textarea");
                    this.Element.KeysBoard.appendChild(this.createKeys());
            
                    this.Element.areaKeyBoard.appendChild(this.Element.KeysBoard);
                    document.body.appendChild(this.Element.areaKeyBoard);
                    document.body.appendChild(this.Element.textarea);
                    this.clicker();         
                    }
                       
    createKeys() {
        const fragment = document.createDocumentFragment();
        const buttonToBr = [14, 15, 13, 12 ];
        let number = 0;
        let count = 0;
        let langs;
        if(this.Properties.lang == 'en') langs = this.Keysarr;
        langs.forEach(element => {
            count++;
            let element1 = document.createElement('button');
            element1.classList.add('button');
            element1.setAttribute('type', 'button');
            element1.innerText = element;
            fragment.appendChild(element1);
            if (buttonToBr[number] == count) {
                fragment.appendChild(document.createElement("br"));
                number++;
                count=0;
            }

        })

        return fragment;

    }

    
    clicker() {
        document.querySelector('.keysBoard').addEventListener('click',(event)=>{
            if (event.target.classList.contains('button')){
                let cursorPositionStart = this.Element.textarea.selectionEnd+1;
                let cursorPositionEnd = this.Element.textarea.selectionEnd+1;
                switch (event.target.getAttribute('id')) {                   
                    default:
                        if(!this.KeysSystem.includes(event.target.getAttribute('id')))
                            this.Element.textarea.value = this.Element.textarea.value.slice(0,cursorPositionStart-1)+event.target.innerText+this.Element.textarea.value.slice(cursorPositionStart-1,this.Element.textarea.length)
                            this.Element.textarea.selectionStart = cursorPositionEnd;
                            this.Element.textarea.selectionEnd = cursorPositionEnd;                           
                }                
            }
               
            this.Element.textarea.focus();
        })
    }   
}
let arr = new KeyBoard();