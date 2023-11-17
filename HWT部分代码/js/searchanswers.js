//将用户可以看到的灯谜创建成库
 var data = [
            { id: 1, title: "水中捞月（打一成语）", content: "谜底：有影无踪/求之不得/浮光掠影..." },
            { id: 2, title: "十五的月亮（打一成语）", content: "谜底：正大光明<br>解析：十五的月亮正是又大又明亮的时候，该成语形容心怀坦白，言行正派。" },
            { id: 3, title: "一年四季是春天（打一城市）", content: "谜底：长春<br>解析:一年四季是春天,说明春天的时间很长,所以答案是长春。" },
            { id: 4, title: "一撇划了三寸长（打一字）", content: "谜底：寿<br> 解析:‘一撇’会意代扣‘丿’,丿+三+寸=寿，所以答案是寿" },
            { id: 5, title: "丘山认父（打一字）", content: "谜底：岳<br>解析：丘+山=岳。谜面中的“父”理解为岳父，扣“岳”，第二次紧扣谜底。" },
        ];
        // 获取搜索输入框
        var sInput = document.getElementById('Input');
        // 获取搜索结果容器
        var sResults = document.getElementById('Results');
        // 监听输入框的键盘按下事件
        sInput.addEventListener('input', function() {
            // 执行搜索
            followFunction(this.value.toLowerCase());
        });

        sInput.addEventListener('keydown', function(event) {
            // 按下回车键时触发搜索
            if (event.key === 'Enter') {
                enterFunction(this.value.toLowerCase());
            }
        });
        //即是响应搜索函数实现
        function followFunction(input) {
            // 防止输入结果为空时所有答案均显示或输入一时出现两个答案
            if (input.trim() !== ""&&input.trim()!="一") {  
                var results = data.filter(item => item.title.toLowerCase().includes(input));
                if (results.length > 0) {
                    showSResults(results);
                }
            } else {
                sResults.innerHTML = "";  
            }
        }
        //按下回车键后再搜索函数实现
        function enterFunction(input) {
            // 进行搜索
            if (input.trim() !== "") { 
                var results = data.filter(item => item.title.toLowerCase().includes(input));
                if (results.length > 0) {
                    showSResults(results);
                } else {
                    failFound();
                }
            } else {
                sResults.innerHTML = ""; 
            }
        }
        function showSResults(results) {
            sResults.innerHTML = "";
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                var resultItem = document.createElement('div');
                resultItem.innerHTML = result.content;
                sResults.appendChild(resultItem);
            }
        }
        //查询失败函数实现
        function failFound() {
            sResults.innerHTML = "";
            var Message = document.createElement('div');
            Message.textContent = "抱歉，没有找到您想要的内容。";
            sResults.appendChild(Message);
        }
        
        

   
    
