//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Binary Tree Traversal
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
function preOrder(node) {
  if (node == undefined) return [];
  return [node.data].concat(preOrder(node.left)).concat(preOrder(node.right));
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
 if (node == undefined) return [];
 return inOrder(node.left).concat(node.data).concat(inOrder(node.right));
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node) {
 if (node == undefined) return [];
 return postOrder(node.left).concat(postOrder(node.right)).concat([node.data]);
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
// Binary search tree validation
//----------------------------------------------------------------------
//----------------------------------------------------------------------
// A binary search tree is a binary tree that is ordered. This means that if you were to convert the tree to an array using an in-order traversal, the array would be in sorted order. The benefit gained by this ordering is that when the tree is balanced, searching is a logarithmic time operation, since each node you look at that isn't the one you're searching for lets you discard half of the tree.

// In this kata, you will write a function that will validate that a given binary tree is a binary search tree. The sort order is not predefined so it should work with either.



class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

const isMinFirstBST = (node, min, max) => {
  return (
      (min === undefined || min < node.value) &&
      (max === undefined || node.value < max) &&
      (node.left === null || isMinFirstBST(node.left, min, node.value)) &&
      (node.right === null || isMinFirstBST(node.right, node.value, max)));
};

const isMaxFirstBST = (node, min, max) => {
  return (
      (min === undefined || node.value > min) &&
      (max === undefined || max > node.value) &&
      (node.left === null || isMaxFirstBST(node.left, node.value, max)) &&
      (node.right === null || isMaxFirstBST(node.right, min, node.value)));
};

const isBST = (node, min, max) => {
  return node === null || isMinFirstBST(node) || isMaxFirstBST(node);
};
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//Find positive nodes in tree
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const traverse = (node, callback) => {
  if (node) callback(node);
  if (node && node.left) traverse(node.left, callback);
  if (node && node.right) traverse(node.right, callback);
};

module.exports = (tree) => {

  let arr = [];
  traverse(tree.root, node => arr.push(node.value));
  let count = arr.filter(even)

  return count.length;
};

let even = (num) => num % 2 === 0


//----------------------------------------------------------------------
//----------------------------------------------------------------------
//Convert array to tree
//----------------------------------------------------------------------
//----------------------------------------------------------------------

function arrayToTree(array) {
  let lists = [];
  for(let i = 0; i < array.length; i++) {
    lists.push(new TreeNode(array[i]));
  }

  for(let i = array.length; i >= 0; i--) {
    if(lists[2 * i + 1] !== undefined) {
      lists[i].left = lists[2 * i + 1];
    }
    if(lists[2 * i + 2] !== undefined) {
      lists[i].right = lists[2 * i + 2];
    }
  }

  return lists[0];
};

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//Given a binary tree, find the deep­est node in it
//----------------------------------------------------------------------
//----------------------------------------------------------------------

function deepestNode(tree){
  var result = {max : -1};
  var maxLevel = {max: -1};
  inOrder(tree, 0, maxLevel, result);
  return result.max;
}

function inOrder(tree, level, maxLevel, result){
  if(tree){
    inOrder(tree.left, ++level, maxLevel, result);
    //Update the level
    if(level > maxLevel.max){
      result.max = tree.value;
      maxLevel.max = level;
    }
    //console.log(tree.value);
    inOrder(tree.right, level, maxLevel, result);
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//Is given binary tree balanced
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//https://www.ideserve.co.in/learn/check-if-a-binary-tree-is-balanced
// 1. If currentNode is null, return height as 0. This indicates that a null tree is balanced with height of 0. This would be the base case for this algorithm.
// 2. We check if left sub-tree is balanced by making a recursive call:  leftSubtreeHeight = checkBalance(currentNode.left)
// If left sub-tree is not balanced, we return -1 to indicate that the tree rooted at currentNode is unbalanced as well.
// 3. We check if right sub-tree is balanced by making a recursive call:  rightSubtreeHeight = checkBalance(currentNode.right)
// If right sub-tree is not balanced, we return -1 to indicate that the tree rooted at currentNode is unbalanced as well.
// 4. If both left and right sub-trees are balanced, we check the balance of the tree at the currentNode by checking absolute difference of leftSubtreeHeight and rightSubtreeHeight. If it is greater than 1, then we return -1 to indicate imbalance.
// 5. If the tree is balanced at the currentNode as well, then we return height of the tree at the currentNode by returning (Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1).
