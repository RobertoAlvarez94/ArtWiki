import React from 'react';
import './SkillTree.css';

const roadmapData = {
    title: "30 Day Challenge",
    description: "Start Here",
    children: [
        {
            title: "Gesture",
            description: "Capture the flow",
            children: []
        },
        {
            title: "Perspective",
            description: "3D Space",
            children: [
                {
                    title: "Terms",
                    description: "Horizon, VP, Cone of Vision",
                    children: []
                },
                {
                    title: "Linear Perspective",
                    children: [
                        { title: "1 Point" },
                        { title: "2 Point" },
                        { title: "3 Point" }
                    ]
                },
                {
                    title: "Parallel Perspective",
                    children: [
                        { title: "Isometric" },
                        { title: "Oblique" }
                    ]
                }
            ]
        },
        {
            title: "Anatomy 101",
            description: "Basic Shapes",
            children: []
        },
        {
            title: "Values & Light",
            description: "Shadows & Form",
            children: []
        },
        {
            title: "Composition",
            description: "Guiding the eye",
            children: []
        }
    ]
};

const TreeNode = ({ node, defaultOpen = false }) => {
    const hasChildren = node.children && node.children.length > 0;
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    const toggleOpen = () => {
        if (hasChildren) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={`tree-node-wrapper ${hasChildren ? 'has-children' : ''}`}>
            <div className="tree-node-content">
                <div
                    className={`skill-node ${hasChildren ? 'clickable' : ''}`}
                    onClick={toggleOpen}
                >
                    <div className="node-header">
                        <div className="node-title">{node.title}</div>
                        {hasChildren && (
                            <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
                        )}
                    </div>
                    {node.description && <div className="node-desc">{node.description}</div>}
                </div>
            </div>

            {hasChildren && isOpen && (
                <div className="tree-children">
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const SkillTree = () => {
    return (
        <div className="skill-tree-container">
            {/* Root Wrapper to apply special root styles if needed */}
            <div className="tree-root-wrapper">
                <TreeNode node={roadmapData} defaultOpen={true} />
            </div>
        </div>
    );
};

export default SkillTree;
