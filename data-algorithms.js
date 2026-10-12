/* Algorithms & Data Structures: standalone study cards, no backend required. */
window.CARDS = (window.CARDS || []).concat([
  {
    "section": "Алгоритмы и структуры данных",
    "q": "01. Big O и выбор алгоритма",
    "a": "Оцени время и память до написания Java-кода: O(1), O(log n), O(n), O(n log n), O(n²). Для n≈100 000 квадратичный перебор обычно неприемлем.",
    "points": [
      "Сначала запиши ограничения n и стоимость одной операции.",
      "Два независимых прохода: O(n); вложенные проходы по всему массиву: O(n²).",
      "В HashMap/HashSet операции обычно O(1) в среднем, но не гарантированно для каждого случая.",
      "При суммировании больших чисел используй long, чтобы избежать переполнения."
    ],
    "code": "int[] a = {1, 2, 3};\nlong sum = 0;\nfor (int x : a) sum += x; // O(n) time, O(1) extra space",
    "task": "Как оценить алгоритм, который сортирует массив, а затем один раз проходит по нему?",
    "solution": "O(n log n) из-за сортировки; дополнительная память зависит от используемой реализации сортировки.",
    "source": "https://usaco.guide/bronze",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "02. Java DS toolkit: выбрать коллекцию",
    "a": "Подбирай структуру по операциям, а не по привычке. HashMap/HashSet — быстрый доступ в среднем; TreeMap/TreeSet — сортировка ключей; ArrayDeque — stack/queue; PriorityQueue — heap.",
    "points": [
      "ArrayList.get(i): O(1); вставка в середину: O(n).",
      "HashMap.get/put и HashSet.contains: O(1) в среднем.",
      "TreeMap/TreeSet: O(log n); PriorityQueue.offer/poll: O(log n).",
      "ArrayDeque.offerLast/pollFirst — очередь; push/pop — стек. Старый Stack для новых решений обычно не нужен.",
      "List<List<Integer>> — adjacency list для графов."
    ],
    "code": "Map<String, Integer> counts = new HashMap<>();\ncounts.merge(\"qa\", 1, Integer::sum);\n\nDeque<Integer> queue = new ArrayDeque<>();\nqueue.offerLast(3);\nint first = queue.removeFirst();",
    "task": "Когда нужен TreeMap вместо HashMap?",
    "solution": "Когда необходимо хранить ключи в отсортированном порядке или выполнять операции поиска ближайших ключей.",
    "source": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/package-summary.html",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "03. Arrays / Strings / Hashing",
    "a": "Научись находить дубликаты, считать частоты, аккуратно работать с индексами и строками. Это самый полезный стартовый блок.",
    "points": [
      "Set — проверка уникальности; Map — частоты и значения по ключу.",
      "В String применяй charAt, length, StringBuilder; избегай конкатенации в цикле при накоплении большого результата.",
      "Не забывай пустой ввод, один элемент, отрицательные значения и повторяющиеся элементы.",
      "CSES: Missing Number, Repetitions, Increasing Array, Distinct Numbers, Maximum Subarray Sum."
    ],
    "code": "static Map<Character,Integer> frequency(String s) {\n  Map<Character,Integer> count = new HashMap<>();\n  for (char c : s.toCharArray()) {\n    count.merge(c, 1, Integer::sum);\n  }\n  return count;\n}",
    "task": "Найди первый повторяющийся элемент массива за O(n) времени.",
    "solution": "Проходи элементы слева направо, добавляй в HashSet. Первый элемент, для которого add возвращает false, повторился.",
    "source": "https://cses.fi/problemset/",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "04. Two pointers и in-place",
    "a": "Варианты: два указателя с концов отсортированного массива либо read/write, которые движутся в одном направлении.",
    "points": [
      "Оба указателя с концов: pair sum, palindrome, sorted array.",
      "Read/write: удалить дубликаты или отфильтровать элементы без второго массива.",
      "Инвариант: nums[0..write) — уже обработанный правильный префикс.",
      "CSES: Apartments, Ferris Wheel, Sum of Two Values, Sum of Three Values.",
      "В CSES Sum of Two Values нужны исходные индексы — после сортировки сохраняй пары (значение, индекс)."
    ],
    "code": "static int uniqueSorted(int[] nums) {\n  if (nums.length == 0) return 0;\n  int write = 1;\n  for (int read = 1; read < nums.length; read++) {\n    if (nums[read] != nums[write - 1]) {\n      nums[write++] = nums[read];\n    }\n  }\n  return write;\n}",
    "task": "[1,1,2,2,3] — что возвращает uniqueSorted и что в массиве?",
    "solution": "Возвращает 3, первые три элемента равны [1,2,3]. O(n) времени и O(1) дополнительной памяти.",
    "source": "https://usaco.guide/silver/two-pointers",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "05. Sliding window",
    "a": "Два указателя обрамляют непрерывный отрезок. При расширении добавляй правый элемент, при нарушении условия двигай левый.",
    "points": [
      "Подходит для подстрок, подмассивов, количества различных значений и диапазонов.",
      "Фиксированное окно: обновляй сумму при сдвиге; переменное окно: поддерживай инвариант допустимости.",
      "Важно: окно по сумме с перемещением только вперёд часто требует неотрицательных чисел. Для отрицательных значений нужны другие методы.",
      "CSES: Playlist, Subarray Sums I (положительные числа), Distinct Values Subarrays."
    ],
    "code": "int left = 0, sum = 0;\nfor (int right = 0; right < a.length; right++) {\n  sum += a[right];\n  while (sum > limit && left <= right) {\n    sum -= a[left++];\n  }\n  // a[left..right] satisfies sum <= limit (when a[i] >= 0)\n}",
    "task": "Почему это окно по сумме нельзя бездумно применять к отрицательным числам?",
    "solution": "После удаления элемента сумма может возрасти, а после добавления — уменьшиться: свойство монотонности окна теряется.",
    "source": "https://usaco.guide/silver/two-pointers",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "06. Prefix sums и range queries",
    "a": "Предвычисляй накопленные суммы: запрос суммы на [l,r] выполняется за O(1) после O(n) подготовки.",
    "points": [
      "prefix[0]=0; prefix[i+1]=prefix[i]+a[i].",
      "Сумма [l,r] включительно: prefix[r+1]-prefix[l].",
      "long[] полезен при больших значениях/длинных диапазонах.",
      "CSES: Static Range Sum Queries; дополнительно Range Xor Queries."
    ],
    "code": "long[] prefix = new long[a.length + 1];\nfor (int i = 0; i < a.length; i++) {\n  prefix[i + 1] = prefix[i] + a[i];\n}\nlong range = prefix[r + 1] - prefix[l];",
    "task": "Какова сложность для 1000 запросов суммы после подготовки массива?",
    "solution": "O(n + 1000) вместо O(1000·n), дополнительная память O(n).",
    "source": "https://usaco.guide/silver/prefix-sums",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "07. Binary search",
    "a": "Ищи значение или границу в отсортированном пространстве. Binary search по ответу применим при монотонном предикате.",
    "points": [
      "Отличай exact match от first >= x / first > x.",
      "При mid=left+(right-left)/2 избегай переполнения left+right для обычных индексов.",
      "Следи за диапазоном [left,right] или [left,right) — не смешивай соглашения.",
      "CSES: Factory Machines, Array Division.",
      "Для 'минимального подходящего значения' используй монотонное условие: false…false,true…true."
    ],
    "code": "static int lowerBound(int[] a, int x) {\n  int l = 0, r = a.length;\n  while (l < r) {\n    int mid = l + (r - l) / 2;\n    if (a[mid] < x) l = mid + 1;\n    else r = mid;\n  }\n  return l;\n}",
    "task": "Что вернёт lowerBound([1,2,2,5], 2)?",
    "solution": "Индекс 1 — первый элемент, который >= 2. Время O(log n), память O(1).",
    "source": "https://usaco.guide/silver/binary-search",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "08. Sorting / intervals / greedy",
    "a": "Sort + scan часто упрощает задачу. Интервалы сортируют по началу или концу, в зависимости от цели.",
    "points": [
      "Arrays.sort для примитивов; Comparator.comparing для объектов.",
      "Для выбора максимального числа непересекающихся интервалов обычно сортируют по времени окончания.",
      "Нужна проверка корректности greedy: локальный выбор должен вести к глобальному решению.",
      "CSES: Restaurant Customers, Movie Festival, Tasks and Deadlines, Room Allocation."
    ],
    "code": "int[][] intervals = {{4, 5}, {1, 3}, {2, 6}};\nArrays.sort(intervals, Comparator.comparingInt(x -> x[1]));\n// Сортировка по правому концу",
    "task": "Почему для Movie Festival сортируют по времени окончания?",
    "solution": "Если брать самый рано заканчивающийся совместимый сеанс, остаётся максимум времени для следующих.",
    "source": "https://cses.fi/problemset/",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "09. Stack / Queue / Deque",
    "a": "Стек — LIFO, очередь — FIFO, deque поддерживает операции с обоих концов. На Java используй ArrayDeque.",
    "points": [
      "Stack: валидные скобки, DFS, next greater, monotonic stack.",
      "Queue: BFS и последовательная обработка.",
      "Не добавляй null в ArrayDeque.",
      "CSES: Nearest Smaller Values; самостоятельно Valid Parentheses, Next Greater Element."
    ],
    "code": "Deque<Character> st = new ArrayDeque<>();\nfor (char ch : \"([])\".toCharArray()) {\n  if (ch == '(' || ch == '[') st.push(ch);\n  else if (st.isEmpty() ||\n      (ch == ')' && st.pop() != '(') ||\n      (ch == ']' && st.pop() != '[')) {\n    throw new IllegalArgumentException(\"Invalid\");\n  }\n}\nboolean valid = st.isEmpty();",
    "task": "Почему deque полезнее Stack для новых Java-решений?",
    "solution": "ArrayDeque подходит для стека и очереди и обычно эффективнее legacy Stack (наследует Vector).",
    "source": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "10. Linked list и fast/slow pointers",
    "a": "Разворачивай односвязный список через prev/current/next; slow/fast определяют середину и цикл.",
    "points": [
      "Reverse List: три ссылки, O(n) времени, O(1) памяти.",
      "Find Middle: slow+1, fast+2.",
      "Detect Cycle: встреча slow и fast означает цикл.",
      "Дополнительно merge two sorted lists, remove nth from end."
    ],
    "code": "static Node reverse(Node head) {\n  Node prev = null, cur = head;\n  while (cur != null) {\n    Node next = cur.next;\n    cur.next = prev;\n    prev = cur;\n    cur = next;\n  }\n  return prev;\n}\n// Node: int value; Node next;",
    "task": "Что произойдёт, если забыть сохранить cur.next перед перенаправлением ссылки?",
    "solution": "Потеряешь доступ к необработанной части списка.",
    "source": "https://usaco.guide/",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "11. Recursion / backtracking",
    "a": "Рекурсия должна иметь base case. В backtracking после ветки отменяй выбор (choose → explore → undo).",
    "points": [
      "Рисуй дерево вызовов на маленьком примере.",
      "Для n элементов subsets имеют 2^n вариантов, permutations — n!",
      "Java-recursion тратит стек; очень глубокий DFS может привести к StackOverflowError.",
      "Практика: subsets, permutations, простые задачи на сетке."
    ],
    "code": "static void subsets(int[] a, int i, List<Integer> path) {\n  if (i == a.length) {\n    System.out.println(path);\n    return;\n  }\n  subsets(a, i + 1, path);\n  path.add(a[i]);\n  subsets(a, i + 1, path);\n  path.remove(path.size() - 1);\n}",
    "task": "Почему после рекурсивного вызова нужен remove?",
    "solution": "Нужно восстановить состояние для альтернативной ветки дерева поиска.",
    "source": "https://usaco.guide/bronze",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "12. Binary trees + traversal",
    "a": "Знай preorder/inorder/postorder DFS и level-order BFS. Для BST различай упорядоченный поиск и обход дерева.",
    "points": [
      "Preorder: root-left-right; inorder: left-root-right; postorder: left-right-root.",
      "Level order делается очередью.",
      "Поиск в несбалансированном BST может деградировать до O(n).",
      "CSES: Subordinates (tree traversal)."
    ],
    "code": "static void inorder(TreeNode node) {\n  if (node == null) return;\n  inorder(node.left);\n  System.out.println(node.value);\n  inorder(node.right);\n}\n// TreeNode: int value; TreeNode left, right;",
    "task": "Как получить значения BST в возрастающем порядке?",
    "solution": "Inorder traversal, если соблюдается стандартное свойство BST.",
    "source": "https://usaco.guide/silver/graph-traversal",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "13. Graphs: DFS, BFS, connected components",
    "a": "Adjacency list: List<List<Integer>>. DFS проверяет достижимость, BFS даёт кратчайшее число рёбер в невзвешенном графе.",
    "points": [
      "Помечай visited при постановке в очередь, чтобы вершина не добавлялась многократно.",
      "DFS по сетке — flood fill, поиск connected components.",
      "BFS — для кратчайшего пути в невзвешенном графе; для весов нужны другие алгоритмы.",
      "CSES: Counting Rooms, Building Roads, Message Route, Labyrinth, Building Teams, Round Trip, Monsters."
    ],
    "code": "Deque<Integer> queue = new ArrayDeque<>();\nboolean[] visited = new boolean[n];\nqueue.offer(0);\nvisited[0] = true;\nwhile (!queue.isEmpty()) {\n  int v = queue.poll();\n  for (int u : graph.get(v)) {\n    if (!visited[u]) {\n      visited[u] = true;\n      queue.offer(u);\n    }\n  }\n}",
    "task": "Как узнать количество компонент связности в неориентированном графе?",
    "solution": "Перебирай вершины. Если вершина ещё не посещена, запусти DFS/BFS и увеличь счётчик.",
    "source": "https://usaco.guide/silver/graph-traversal",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "14. Heap / PriorityQueue",
    "a": "Min heap — получить минимальный элемент за O(1) peek и извлечь за O(log n); max heap — обратный comparator.",
    "points": [
      "Top K, K-way merge, выбор следующей задачи по приоритету.",
      "PriorityQueue НЕ хранит все элементы в отсортированном порядке.",
      "Важно: Comparator должен сравнивать без вычитания при риске переполнения."
    ],
    "code": "PriorityQueue<Integer> minHeap = new PriorityQueue<>();\nPriorityQueue<Integer> maxHeap =\n    new PriorityQueue<>(Comparator.reverseOrder());\nminHeap.offer(9);\nminHeap.offer(2);\nint minimum = minHeap.poll(); // 2",
    "task": "Как получить top K элементов из потока за O(n log k)?",
    "solution": "Поддерживай min heap размера k; если новый элемент больше минимума, заменяй минимум.",
    "source": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PriorityQueue.html",
    "must": 1,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "15. Topological sort / dependencies",
    "a": "Топологический порядок возможен только для DAG. Алгоритм Кана: indegree → queue → удаление исходящих рёбер.",
    "points": [
      "Практическая аналогия: порядок зависимых задач и сборок.",
      "При обработке вершины уменьши indegree соседей; при нуле добавь в очередь.",
      "Если обработано меньше N вершин, в графе есть цикл.",
      "CSES: Course Schedule."
    ],
    "code": "Deque<Integer> q = new ArrayDeque<>();\nfor (int i = 0; i < n; i++) {\n  if (indegree[i] == 0) q.offer(i);\n}\nint processed = 0;\nwhile (!q.isEmpty()) {\n  int v = q.poll();\n  processed++;\n  for (int u : graph.get(v)) {\n    if (--indegree[u] == 0) q.offer(u);\n  }\n}\nboolean hasCycle = processed != n;",
    "task": "Как обнаружить цикл при топологической сортировке?",
    "solution": "Если Kahn не смог обработать все вершины, оставшиеся лежат в цикле или зависят от цикла.",
    "source": "https://cses.fi/problemset/",
    "must": 0,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "16. DP — вводный уровень",
    "a": "Определи состояние dp[i], переход, базу и порядок вычисления. Сначала освоить одномерную DP, затем таблицы.",
    "points": [
      "Четыре вопроса: что храню? откуда перехожу? какой base case? в каком порядке считаю?",
      "Сначала решай Dice Combinations, Minimizing Coins, Removing Digits, Grid Paths I, Book Shop.",
      "Не трать время на bitmask DP, digit DP и сложные tree DP.",
      "Крайние случаи: недостижимое состояние, выход за границы, модуль, переполнение."
    ],
    "code": "// Fibonacci as a recurrence example\nlong[] dp = new long[n + 1];\ndp[0] = 0;\nif (n >= 1) dp[1] = 1;\nfor (int i = 2; i <= n; i++) {\n  dp[i] = dp[i - 1] + dp[i - 2];\n}\n// long also overflows for sufficiently large n",
    "task": "Почему memoization помогает при повторяющихся рекурсивных вызовах?",
    "solution": "Результаты одинаковых подзадач сохраняются и не вычисляются заново.",
    "source": "https://usaco.guide/gold/intro-dp",
    "must": 0,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "17. DSU / Union Find",
    "a": "Структура для динамического объединения компонент: find и union, с path compression и union by size/rank.",
    "points": [
      "При добавлении ребра объединяй компоненты его концов.",
      "find(x)==find(y) означает, что вершины связаны.",
      "Для удаления рёбер базовая DSU напрямую не подходит.",
      "CSES: Road Construction; Road Reparation — опционально."
    ],
    "code": "int find(int x) {\n  if (parent[x] != x) parent[x] = find(parent[x]);\n  return parent[x];\n}\n// parent[] инициализирован: parent[i] = i",
    "task": "Когда DSU удобнее многократного DFS?",
    "solution": "Когда связи добавляются динамически, а запросов о принадлежности компонентам много.",
    "source": "https://usaco.guide/gold/dsu",
    "must": 0,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "18. Dijkstra / shortest paths",
    "a": "BFS — для невзвешенных рёбер, Dijkstra — для неотрицательных весов. Для отрицательных весов стандартная Dijkstra не подходит.",
    "points": [
      "Держи dist[] и min-heap (расстояние, вершина).",
      "Если в куче устаревшее расстояние, пропусти запись.",
      "Для больших весов используй long.",
      "CSES: Shortest Routes I. Bellman–Ford и Floyd–Warshall — только концептуально."
    ],
    "code": "// Псевдокод: вершины с неотрицательными весами\n// dist[start] = 0; остальные = INF\n// heap: (0, start)\n// while heap not empty:\n//   pop минимальную пару (distance, node)\n//   if distance != dist[node]: continue\n//   for each edge (node -> next, weight):\n//     relax distance + weight",
    "task": "Почему нельзя заменить BFS на Dijkstra с отрицательными рёбрами?",
    "solution": "Dijkstra опирается на неотрицательность: после извлечения минимума его расстояние окончательно.",
    "source": "https://usaco.guide/gold/shortest-paths",
    "must": 0,
    "lesson": true
  },
  {
    "section": "Алгоритмы и структуры данных",
    "q": "19. Практика без тегов + разбор ошибок",
    "a": "После тематических USACO/CSES задач переключайся на случайные задачи AtCoder Problems: без просмотра tags, подсказок и названия паттерна.",
    "points": [
      "0–5 мин: input/output/constraints и edge cases; 5–10 мин: brute force; 10–20 мин: улучшение; 20–30 мин: Java.",
      "Стартовый ориентир AtCoder Difficulty 200–400; повышай до 300–500 и 400–700 только по фактической решаемости.",
      "После WA: off-by-one, границы, overflow, duplicates, comparator, visited, мутация коллекции.",
      "После AC: объясни инвариант, корректность, time/space complexity и альтернативы."
    ],
    "code": "// Проверки перед отправкой:\n// [] empty / single element\n// [] duplicates / negative / zero\n// [] sorted / reverse / all equal\n// [] overflow & long\n// [] complexity / space",
    "task": "Что делать, если 25 минут нет продвижения?",
    "solution": "Посмотри небольшой hint или часть editorial, затем закрой подсказку и реализуй самостоятельно. Перерешай через несколько дней.",
    "source": "https://kenkoooo.com/atcoder/",
    "must": 0,
    "lesson": true
  }
]);
window.PRACTICE = (window.PRACTICE || []).concat([
  {
    "src": "Алгоритмы / Java",
    "title": "Алгоритм: HashMap frequency",
    "code": "int[] a = {2, 3, 2, 5, 3, 2};\nMap<Integer,Integer> freq = new HashMap<>();\nfor (int x : a) freq.merge(x, 1, Integer::sum);\nSystem.out.println(freq.get(2));",
    "options": [
      "1",
      "2",
      "3",
      "null"
    ],
    "answer": "3",
    "why": "Число 2 встречается трижды. Один проход: O(n) времени; O(k) дополнительной памяти, где k — число уникальных значений."
  },
  {
    "src": "Алгоритмы / Java",
    "title": "Binary search: lower bound",
    "code": "int[] a = {1, 2, 2, 2, 7};\n// Какой индекс вернёт lowerBound(a, 2)?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "1",
    "why": "lowerBound — индекс первого значения >= target, не произвольное совпадение."
  },
  {
    "src": "Алгоритмы / Java",
    "title": "BFS или Dijkstra?",
    "code": "// В графе все рёбра имеют вес 1.\n// Нужно найти минимальное число рёбер от A до B.",
    "options": [
      "BFS",
      "Dijkstra обязательно",
      "DFS обязательно",
      "DSU"
    ],
    "answer": "BFS",
    "why": "Для невзвешенного графа BFS находит кратчайшее число рёбер за O(V+E) времени."
  }
]);
