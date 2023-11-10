import {onMounted, onUnmounted, reactive} from "vue";
export default function(){
    let point = reactive({//1.先导入数据
        x:0,
        y:0
    })

    function getPoint(event){
        point.x = event.clientX
        point.y = event.clientY
        console.log('x='+'point.x','y='+'point.y')
    }

    onMounted(()=>{
        window.addEventListener('click',getPoint)
    })

    onUnmounted(()=>{
        window.removeEventListener('click',getPoint)
    })
    return point
}
