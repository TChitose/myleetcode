function mycode21(l1?, l2?) {
    let headPointer = new ListNode()
    let head = headPointer;
    while(l1 !== null || l2 !== null){
        let val1 = l1 ? l1.val : 101;
        let val2 = l2 ? l2.val : 101;
        let next = null;
        if(val1 < val2){
            l1 = l1 ? l1.next : null;
            next = val1;
        } else {
            l2 = l2 ? l2.next : null;
            next = val2;
        }
        headPointer.next = new ListNode(next);
        headPointer = headPointer.next;
    }
    return head.next;
};


function mybestcode21(l1?, l2?) {
    let headPointer = new ListNode()
    let head = headPointer;
    while(l1 && l2){
        if(l1.val < l2.val){
            headPointer.next = l1;
            l1 = l1 ? l1.next : null;
        } else {
            headPointer.next = l2;
            l2 = l2 ? l2.next : null;
        }
        headPointer = headPointer.next
    }
    headPointer.next = l1 || l2;
    return head.next;
};

var bestcode22 = function(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    
    return mergedHead.next;
};