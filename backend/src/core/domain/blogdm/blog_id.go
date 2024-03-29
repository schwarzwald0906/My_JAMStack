package tmpblogdm

import (
	"context"

	"github.com/schwarzwald0906/My_Portfolio/src/core/domain/vo"
)

type BlogID vo.ID

func NewBlogID() BlogID {
	return BlogID(vo.NewID())
}

func NewBlogIDByStr(c context.Context, idStr string) (BlogID, error) {
	id, err := vo.NewIDByStr(c, idStr)
	return BlogID(id), err
}

func (id BlogID) String() string {
	return string(id)
}

func (id BlogID) Equals(id2 BlogID) bool {
	return string(id) == string(id2)
}
